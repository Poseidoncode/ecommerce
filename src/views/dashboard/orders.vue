<template>
  <section class="main-section px-3">
    <section class="search-block">
      <h5 class="big-title">OrderManagement</h5>
    </section>

    <header class="ecommerce-grid my-dark">
      <div
        v-for="(item, i) in headers"
        :key="`headers${i}`"
        class="header"
        @click="sort(item)"
      >
        {{ item.name }}
        <span v-show="item.sortDesc === null" v-if="item.key">
          <i class="pi pi-sort"></i>
        </span>
        <span v-show="item.sortDesc === false" v-if="item.key">
          <i class="pi pi-caret-up"></i>
        </span>
        <span v-show="item.sortDesc" v-if="item.key">
          <i class="pi pi-caret-down"></i>
        </span>
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
      <div class="content" :title="item.percent">
        {{ item.percent || "" }}
      </div>
      <div class="content" :title="item.due_date">
        {{ item.due_date || "" }}
      </div>
      <div class="content" :title="item.code">
        {{ item.code || "" }}
      </div>

      <div class="content" :title="item.is_enabled">
        <Checkbox
          :binary="true"
          v-model="item.is_enabled"
          @change="setStatus(item)"
        />
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
            nowType == 1
              ? "AddCoupon"
              : nowType == 2
              ? "EditCoupon"
              : "DeleteCoupon"
          }}
        </h3>
      </template>
      <section class="modal-main-content">
        <!-- {{ modalItem }} -->
        <h2 v-if="nowType == 3" class="mb-2 font-black text-xl">
          Delete This Order?
        </h2>
        <div class="p-inputgroup mt-2 col-span-full">
          <span class="p-inputgroup-addon red-star">標題</span>
          <InputText
            type="text"
            v-model.trim="modalItem.title"
            :disabled="nowType == 3"
            class="custom-search"
          />
        </div>

        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">Percent</span>
          <InputText
            v-model.trim="modalItem.percent"
            class="custom-search"
            :disabled="nowType == 3"
            type="Number"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">到期日</span>

          <Calendar
            v-model="modalItem.due_date"
            :showIcon="true"
            dateFormat="yy-mm-dd"
            style="height: 40px"
            class="hidden-item"
            :disabled="nowType == 3"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">折扣碼</span>
          <InputText
            v-model.trim="modalItem.code"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>

        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon">是否啟用</span>
          <Checkbox
            style="margin: 12px 0 0 10px"
            :binary="true"
            v-model="modalItem.is_enabled"
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
  getOrders,
  putOrders,
  deleteOneOrders,
  deleteAllOrders,
  addFileImage,
} from "Service/apis.js";
import dayjs from "dayjs";

export default defineComponent({
  name: "function",
  components: {},
  setup() {
    const emitter = inject("emitter"); // Inject `emitter`
    emitter.on("deleteOrders", (value) => {
      // *Listen* for event
      deleteAllUserOrders();
    });
    //-----------ListData----------------
    //for list
    const headers = ref([
      { name: "Operate", key: "", sortDesc: null },
      { name: "標題", key: "title", sortDesc: null }, //必填
      { name: "Percent", key: "percent", sortDesc: null }, //必填
      { name: "到期日", key: "due_date", sortDesc: null }, //必填
      { name: "折扣碼", key: "code", sortDesc: null }, //必填
      { name: "是否啟用", key: "is_enabled", sortDesc: null },
    ]);

    const items = ref([]);

    const offset = ref(0);
    const rows = ref(10);
    const totalItemsCount = ref(1);

    const toast = useToast();

    async function getData() {
      try {
        //top:筆數、skip:跳過幾筆
        const page = +offset.value / +rows.value + +1;
        const skip = (page - 1) * rows.value;
        const top = rows.value;

        const res = await getOrders(`?page=${page}`);

        console.log("res", res);

        items.value = [...res.data?.orders];
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

    function showEditModal(type, item) {
      //type- 1Add、2Edit、3Delete

      if (type == 2 || type == 3) {
        modalItem.value = { ...item };
      } else {
        modalItem.value = {
          title: "",
          is_enabled: true,
          percent: 90,
          due_date: null,
          code: "",
        };
      }
      nowType.value = type;
      editModal.value = true;
    }

    const deleteAllUserOrders = async () => {
      try {
        await deleteAllOrders();
        toast.info(`Delete全部OrdersSuccess`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };

    const saveEditModal = async () => {
      const obj = {
        ...modalItem.value,
      };
      obj.due_date = dayjs(obj.due_date).format("YYYY-MM-DD");

      try {
        // const res = await putInstitutionList(obj);
        if (nowType.value == 1) {
          const res1 = await deleteAllOrders({ data: obj });
        }
        if (nowType.value == 2) {
          const res2 = await putOrders({ data: obj }, obj.id);
        }
        if (nowType.value == 3) {
          const res3 = await deleteOneOrders(obj.id);
        }

        toast.info(
          `${
            nowType.value == 1 ? "Add" : nowType.value == 2 ? "Edit" : "Delete"
          }Success`,
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
      const res2 = await putOrders({ data: obj }, obj.id);
      getData();
      toast.info(`Coupon調整Success`, {
        timeout: 2000,
        hideProgressBar: true,
      });
    };

    const images = ref("");

    const onUpload = () => {
      toast.info(`圖片上傳Success`, {
        timeout: 3000,
        hideProgressBar: true,
      });
    };

    const uploadNewFile = async () => {
      document.getElementById("file-upload").click();
    };
    const fileChange = async (e) => {
      const currentFile = e.target.files[0];
      const currentFileName = Boolean(e.target.files[0])
        ? e.target.files[0].name.split(".")[0]
        : "";

      try {
        if (!Boolean(currentFileName)) {
          toast.error("請先選擇檔案", {
            timeout: 2000,
            hideProgressBar: true,
          });
          return;
        }

        let form = new FormData();

        form.append("File", currentFile);
        const res = await addFileImage(form);
        console.log("res", res);

        if (res.data?.info) {
          modalItem.value.imagesArr[0].url = res.data.imageUrl;
          toast.info(`上傳圖片Success`, {
            timeout: 2000,
            hideProgressBar: true,
          });
        } else {
          toast.error(`上傳圖片失敗: ${res.data?.message?.code}`, {
            timeout: 2000,
            hideProgressBar: true,
          });
        }
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
      document.getElementById("file-upload").value = "";
    };

    return {
      onUpload,
      uploadNewFile,
      fileChange,
      images,

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
  grid-template-columns: 180px repeat(5, 1fr);

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
