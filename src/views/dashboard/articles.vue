<template>
  <section class="main-section px-3">
    <section class="search-block">
      <h5 class="big-title">News Management</h5>
    </section>

    <header class="ecommerce-grid my-dark">
      <div
        v-for="(item, i) in headers"
        :key="`headers${i}`"
        class="header"
        @click="sort(item)"
      >
        {{ item.name }}
      </div>
    </header>
    <main
      class="ecommerce-grid"
      v-for="(item, idx) in items"
      :key="`content${idx}`"
      style="color: #39312e"
      :style="
        idx % 2 == 0
          ? 'background-color:#ffffff ;'
          : 'background-color:#e7f2f3;'
      "
    >
      <div class="content" style="cursor: pointer; padding-top: 3px">
        <button
          class="text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1 text-sm"
          type="button"
          style="background: #0d4a9e"
          @click="showEditModal(2, item)"
        >
          Edit
        </button>
        <button
          class="text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 text-sm"
          type="button"
          style="background: #218be1"
          @click="showEditModal(3, item)"
        >
          Delete
        </button>
      </div>

      <div class="content" :title="item.title">
        {{ item.title || "" }}
      </div>
      <div class="content" :title="item.tag">
        {{ item.tag ? item.tag.join(",") : "" }}
      </div>
      <div class="content" :title="item.author">
        {{ item.author || "" }}
      </div>
      <div class="content" :title="item.timeforshow">
        {{ item.timeforshow || "" }}
      </div>
      <div class="content" :title="item.category">
        {{ item.category || "" }}
        <!-- <Checkbox :binary="true" v-model="item.isPublic" @change="setStatus(item)" /> -->
      </div>
      <div class="content" :title="item.isPublic">
        {{ item.isPublic ? "Public" : "Private" }}
        <!-- <Checkbox :binary="true" v-model="item.isPublic" @change="setStatus(item)" /> -->
      </div>
    </main>
    <main
      v-if="!items.length"
      class="mt-2 text-center text-xl font-semibold col-span-full"
      style="font-family: Microsoft JhengHei, Helvetica"
    >
      No Data
    </main>
    <footer class="grid grid-flow-col auto-cols-max justify-center">
      <Paginator
        v-model:first="offset"
        v-model:rows="rows"
        :rowsPerPageOptions="[5, 10, 50]"
        :totalRecords="totalItemsCount"
      ></Paginator>
      <div class="mt-4">共{{ totalItemsCount }}筆</div>
    </footer>

    <!-- //EditModal -->
    <Dialog
      v-model:visible="editModal"
      style="width: 85vw"
      :draggable="false"
      :modal="true"
      class="custom-modal"
    >
      <template #header>
        <h3>
          {{
            nowType == 1 ? "AddNews" : nowType == 2 ? "EditNews" : "DeleteNews"
          }}
        </h3>
      </template>
      <section class="modal-main-content">
        <!-- {{ modalItem }} -->
        <h2 v-if="nowType == 3" class="mb-2 font-black text-xl">
          Delete This News?
        </h2>
        <div class="p-inputgroup mt-2 col-span-full">
          <span class="p-inputgroup-addon red-star">Title</span>
          <InputText
            type="text"
            v-model.trim="modalItem.title"
            :disabled="nowType == 3"
            class="custom-search"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">Tag</span>

          <InputText
            v-model.trim="newTag"
            class="custom-search"
            :disabled="nowType == 3"
            type="text"
            placeholder="加入新TAG"
          />
          <Button label="Add" @click="editTag(newTag, 1)" />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">Image</span>
          <InputText
            v-model.trim="modalItem.image"
            class="custom-search"
            :disabled="nowType == 3"
            type="text"
          />
        </div>
        <div class="p-inputgroup mt-2 flex" style="grid-column: 1/-1">
          <div
            class="tage-data"
            v-for="(itemtag, it) in modalItem.tag"
            :key="`articles${it}`"
          >
            <span class="cursor-pointer" @click="editTag(itemtag, 2)"
              >&nbsp;#{{ itemtag }}&nbsp;&nbsp;</span
            >
          </div>
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">Author</span>
          <InputText
            v-model.trim="modalItem.author"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>
        <div class="p-inputgroup mt-2" style="grid-column: 1/-1">
          <span class="p-inputgroup-addon red-star">Outline</span>
          <InputText
            v-model.trim="modalItem.outline"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>

        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon">IsPublic</span>
          <Checkbox
            style="margin: 12px 0 0 10px"
            :binary="true"
            v-model="modalItem.isPublic"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon">Category</span>

          <InputText
            v-model.trim="modalItem.category"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>
        <div class="p-inputgroup mt-2" style="grid-column: 1/-1">
          <Editor
            class="w-full custom-search"
            v-model="modalItem.content"
            editorStyle="height: 460px"
            :disabled="nowType == 3"
          />
        </div>
      </section>

      <template #footer>
        <Button label="Confirm" @click="saveEditModal" />
        <Button
          label="Cancel"
          class="p-button-success"
          @click="editModal = false"
        />
      </template>
    </Dialog>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted, watch, inject } from "vue";
import { useToast } from "vue-toastification";

import {
  getArticles,
  putArticles,
  deleteArticles,
  postArticles,
  getSingleArticle,
  addFileImage,
} from "Service/apis.js";
import dayjs from "dayjs";

export default defineComponent({
  name: "function",
  components: {},
  setup() {
    const emitter = inject("emitter"); // Inject `emitter`
    emitter.on("addArticles", (value) => {
      // *Listen* for event
      showEditModal(1);
    });
    //-----------ListData----------------
    //for list
    const headers = ref([
      { name: "Operate", key: "", sortDesc: null },
      { name: "Title", key: "title", sortDesc: null }, //必填
      { name: "Tag", key: "tag", sortDesc: null }, //必填
      { name: "Author", key: "author", sortDesc: null }, //必填
      { name: "CreateTime", key: "timeforshow", sortDesc: null }, //必填
      { name: "Category", key: "category", sortDesc: null },
      { name: "IsPublic", key: "isPublic", sortDesc: null },
    ]);

    const items = ref([]);

    const offset = ref(0);
    const rows = ref(10);
    const totalItemsCount = ref(1);

    const toast = useToast();

    async function getData() {
      try {
        // top:筆數、skip:跳過幾筆
        const page = +offset.value / +rows.value + +1;
        const skip = (page - 1) * rows.value;
        const top = rows.value;

        const res = await getArticles(`?page=${page}`);

        // let { Items, Count } = ;
        let arr = [...res.data?.articles];
        arr = arr.map((s) => {
          s.timeforshow = dayjs(new Date(+s.create_at)).format(
            "YYYY/MM/DD HH:mm:ss"
          );
          return s;
        });
        items.value = [...arr];
        totalItemsCount.value = +res.data?.pagination?.total_pages * 10;
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    }

    onMounted(async () => {
      await getData();
    });

    watch(offset, (v, pv) => {
      getData();
    });

    watch(rows, (v, pv) => {
      getData();
    });

    //-----------editModal----------------
    const editModal = ref(false);
    const nowType = ref(1);
    const modalItem = ref({});

    const showEditModal = async (type, item) => {
      newTag.value = "";
      //type- 1Add、2Edit、3Delete
      if (type == 3) {
        modalItem.value = { ...item };
      } else if (type == 2) {
        const res = await getSingleArticle(`${item.id}`);
        modalItem.value = { ...res.data.article };
        if (!res.data.article?.tag) {
          modalItem.value.tag = [];
        }
      } else {
        modalItem.value = {
          tag: [],
        };
      }
      nowType.value = type;
      editModal.value = true;
    };

    const saveEditModal = async () => {
      const obj = {
        ...modalItem.value,
      };
      obj.due_date = dayjs(obj.due_date).format("YYYY-MM-DD");

      try {
        // const res = await putInstitutionList(obj);
        if (nowType.value == 1) {
          obj.create_at = +Date.now();
          const res1 = await postArticles({ data: obj });
        }
        if (nowType.value == 2) {
          const res2 = await putArticles({ data: obj }, obj.id);
        }
        if (nowType.value == 3) {
          const res3 = await deleteArticles(obj.id);
        }

        toast.info(
          `${
            nowType.value == 1 ? "Add" : nowType.value == 2 ? "Edit" : "Delete"
          } Success`,
          {
            timeout: 2000,
            hideProgressBar: true,
          }
        );
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
      getData();
      editModal.value = false;
    };

    const setStatus = async (item) => {
      const obj = {
        ...item,
      };
      const res2 = await putArticles({ data: obj }, obj.id);
      getData();
      toast.info(`News調整Success`, {
        timeout: 2000,
        hideProgressBar: true,
      });
    };

    const newTag = ref("");
    const editTag = (data, type) => {
      if (type == 1) {
        modalItem.value.tag.push(data);
        newTag.value = "";
      } else if (type == 2) {
        modalItem.value.tag = modalItem.value.tag.filter((s) => s != data);
      }
    };

    return {
      newTag,
      editTag,

      //for list data variable
      headers,
      items,

      toast,

      //list data Function
      getData,

      //paginator
      offset, //目前在第幾筆
      rows, //1頁顯示筆數
      totalItemsCount,

      //editModal variable
      editModal,
      modalItem,
      nowType,

      //editModal Function
      showEditModal,
      saveEditModal,
      setStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-block {
  .big-title {
    background: #e1e8f5;
    padding: 5px;
    color: #333;
    border-radius: 0.15rem 0.15rem 0 0;
    font-size: 20px;
    font-weight: bold;
  }

  margin-bottom: 6px;
  margin-top: 10px;
  background: #fbfcf9;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem 0.25rem 0 0;

  .search-section {
    display: grid;
    grid-template-columns: repeat(8, max-content);
    grid-column-gap: 6px;
  }
}

.p-inputgroup-addon {
  width: 135px;
  background: #3b86f2;
  color: #ffffff;
  font-weight: bold;
  border: 0px !important;
}

.custom-search {
  // height: 42px;
}

.p-dropdown {
  line-height: 12px;
}

.ecommerce-grid {
  display: grid;
  grid-template-columns: 180px repeat(6, 1fr);

  text-align: center;

  > div {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 15px;
    padding: 4px 0;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    display: -webkit-box;
    height: 40px;
    line-height: 30px;
    font-size: 16px;
    color: rgb(46, 45, 45);
  }

  > div:first-child {
    border-left: 2px solid #ffffff;
  }

  > .header {
    line-height: 2rem;
    font-weight: 700;
    color: #1c2a54;
  }

  > .content {
    padding: 6px;
    padding-top: 4px;
    height: 43px;
  }

  > .full-content {
    grid-column: 1 / -1;
  }
}

.modal-main-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
}

.my-dark {
  > div {
    background: #e0fbfc;
    color: #f3f3f3;
    font-weight: bolder;
  }
}
</style>
