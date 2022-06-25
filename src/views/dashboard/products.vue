<template>
  <section class="main-section px-3">
    <section class="search-block">
      <h5 class="big-title">ProductManagement</h5>
      <div class="p-2 search-section">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">IsEnabled</span>
          <div
            v-for="item of activates"
            :key="item.text"
            class="p-field-radiobutton mr-3 mt-2"
          >
            <RadioButton
              :id="item.text"
              name="item"
              :value="item.value"
              v-model="selectedActivate"
              @change="filterItems"
            />
            <label :for="item.text">{{ item.text }}</label>
          </div>
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">Title</span>
          <InputText
            type="text"
            v-model="selectedTitle"
            @keydown.enter="filterItems"
            class="custom-search"
          />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">Content </span>
          <InputText
            type="text"
            v-model="selectedContent"
            @keydown.enter="filterItems"
            class="custom-search"
          />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">Category</span>
          <InputText
            type="text"
            v-model="selectedCat"
            @keydown.enter="filterItems"
            class="custom-search"
          />
        </div>
        <button
          class="text-white font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search"
          type="button"
          style="background: #0c69e1"
          @click="filterItems"
        >
          Search
        </button>
        <button
          class="text-white font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search"
          type="button"
          style="background: #6a9f3e"
          @click="clearSearch"
        >
          Clear
        </button>
        <button
          class="text-gray-700 font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search"
          type="button"
          style="background: #f9be4a"
          @click="showEditModal(1)"
        >
          AddProduct
        </button>
      </div>
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
      v-for="(item, idx) in itemsForShow"
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
      <div class="content" :title="item.description">
        {{ item.description || "" }}
      </div>
      <div class="content" :title="item.content">
        {{ item.content || "" }}
      </div>
      <div class="content" :title="item.category">
        {{ item.category || "" }}
      </div>
      <div class="content" :title="item.unit">
        {{ item.unit || "" }}
      </div>
      <div class="content" :title="item.origin_price">
        {{ item.origin_price || "" }}
      </div>
      <div class="content" :title="item.price">
        {{ item.price || "" }}
      </div>

      <!-- <div class="content" :title="item.imageUrl">
        {{ item.imageUrl || "" }}
      </div>
      <div class="content" :title="item.imagesUrl">
        {{ item.imagesUrl || "" }}
      </div> -->
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
              ? "AddProduct"
              : nowType == 2
              ? "EditProduct"
              : "DeleteProduct"
          }}
        </h3>
      </template>
      <section class="modal-main-content">
        <!-- {{ modalItem }} -->
        <h2 v-if="nowType == 3" class="mb-2 font-black text-xl">
          Delete This Product?
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
        <div class="p-inputgroup mt-2 col-span-full">
          <span class="p-inputgroup-addon red-star">Description</span>
          <Textarea
            v-model.trim="modalItem.description"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>
        <div class="p-inputgroup mt-2 col-span-full">
          <span class="p-inputgroup-addon red-star">Content</span>
          <Textarea
            v-model.trim="modalItem.content"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">Category</span>
          <InputText
            v-model.trim="modalItem.category"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">Unit</span>
          <InputText
            v-model.trim="modalItem.unit"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">Origin Price</span>
          <InputText
            type="Number"
            v-model.trim="modalItem.origin_price"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>

        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">Price</span>
          <InputText
            type="Number"
            v-model.trim="modalItem.price"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon">Main Image</span>
          <InputText
            v-model.trim="modalItem.imagesArr[0].url"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>
        <div
          class="p-inputgroup mt-2"
          v-for="(item, i) in modalItem.imagesArr.slice(1)"
          :key="`headers${i}`"
        >
          <span class="p-inputgroup-addon">Image Url {{ i + 1 }}</span>

          <InputText
            v-model="item.url"
            class="custom-search"
            :disabled="nowType == 3"
          />
        </div>

        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon">IsEnabled</span>
          <Checkbox
            style="margin: 12px 0 0 10px"
            :binary="true"
            v-model="modalItem.is_enabled"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon">Upload Main Image</span>

          <Button
            @click.stop="uploadNewFile"
            title="上傳主圖圖片"
            label="Submit"
            icon="pi pi-box"
            iconPos="left"
            style="margin-left: 10px"
          />
          <input
            id="file-upload"
            type="file"
            @change="fileChange($event)"
            ref="inputFile"
            accept="image/bmp,image/x-bmp,image/jpeg,image/png,.pdf"
            hidden
          />
          <!-- <FileUpload
            name="file"
            url="https://vue-course-api.hexschool.io/api/poseidoncode/admin/upload"
            @upload="onUpload"
            :multiple="true"
            accept="image/*"
            :maxFileSize="1000000"
          >
            <template #empty>
              <p>Drag and drop files to here to upload.</p>
            </template>
          </FileUpload> -->
        </div>

        <div class="col-span-full flex justify-center mt-2">
          <Galleria
            :circular="true"
            :showItemNavigators="true"
            :value="modalItem.imagesArr"
            :responsiveOptions="responsiveOptions"
            :numVisible="6"
            containerStyle="max-width: 640px"
            :showThumbnails="false"
            :showIndicators="true"
          >
            <template #item="slotProps">
              <img
                :src="slotProps.item.url"
                style="height: 400px; display: block"
                :title="slotProps.item.index"
                v-if="!!slotProps.item.url"
              />
              <div
                v-else
                style="width: 500px; height: 310px; border: 1px solid #e1e0e0"
              ></div>
            </template>
          </Galleria>
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
  getProductsAll,
  postProducts,
  deleteProducts,
  putProducts,
  addFileImage,
} from "Service/apis.js";

export default defineComponent({
  name: "function",
  components: {},
  setup() {
    const emitter = inject("emitter"); // Inject `emitter`
    emitter.on("addProducts", (value) => {
      // *Listen* for event
      showEditModal(1);
    });
    //-----------ListData----------------
    //for list
    const headers = ref([
      { name: "Operate", key: "", sortDesc: null },

      { name: "Title", key: "title", sortDesc: null }, //必填
      { name: "Description", key: "description", sortDesc: null },
      { name: "Content", key: "content", sortDesc: null },
      { name: "Category", key: "category", sortDesc: null }, //必填
      { name: "Unit", key: "unit", sortDesc: null }, //必填
      { name: "Origin Price", key: "origin_price", sortDesc: null }, //必填
      { name: "Price", key: "price", sortDesc: null }, //必填

      { name: "IsEnabled", key: "is_enabled", sortDesc: null },
    ]);

    const items = ref([]);
    const itemsForShow = ref([]);

    const offset = ref(0);
    const rows = ref(10);
    const totalItemsCount = ref(1);
    const orderByArr = ref([]);

    const toast = useToast();

    async function getData() {
      try {
        //top:筆數、skip:跳過幾筆

        const res = await getProductsAll();

        let arr = Object.values(res.data?.products);
        arr = arr.filter((s) => s.title != "測試的Products");

        // let { Items, Count } = res.data;

        items.value = [...arr];
        itemsForShow.value = [...arr];
        filterItems();

        // totalItemsCount.value = arr.length;
      } catch (e) {
        toast.error(`${e.response ? e.response.data : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    }
    const filterItems = () => {
      //top & skip
      const page = +offset.value / +rows.value + +1;
      const skip = (page - 1) * rows.value;
      const top = rows.value;

      //search Filter
      let arr = JSON.parse(JSON.stringify(items.value));

      if (typeof selectedActivate.value == "boolean") {
        arr = arr.filter((s) => s.is_enabled == selectedActivate.value);
      }

      if (selectedTitle.value) {
        arr = arr.filter((s) => s.title.includes(selectedTitle.value));
      }

      if (selectedContent.value) {
        arr = arr.filter((s) => s.content.includes(selectedContent.value));
      }

      if (selectedCat.value) {
        arr = arr.filter((s) => s.category.includes(selectedCat.value));
      }

      // this.rowCount = arr.length;
      totalItemsCount.value = arr.length;

      //pageNow
      arr = arr.slice(skip, top + skip);
      itemsForShow.value = JSON.parse(JSON.stringify(arr));
    };

    //sort
    const sort = (item) => {
      if (!item.key) {
        return;
      }
      if (item.sortDesc) {
        item.sortDesc = null;
      } else if (false === item.sortDesc) {
        item.sortDesc = true;
      } else if (null === item.sortDesc) {
        item.sortDesc = false;
      }
      orderByArr.value = [];

      headers.value.forEach((s) => {
        if (s.sortDesc !== null) {
          orderByArr.value.push(s.sortDesc ? `${s.key} desc` : `${s.key}`);
        }
      });

      let sortBy = orderByArr.value.map((s) => ({
        prop: s.includes("desc") ? s.split(" ")[0] : s,
        direction: s.includes("desc") ? 1 : -1,
      }));

      items.value.sort(function (a, b) {
        let i = 0,
          result = 0;
        while (i < sortBy.length && result === 0) {
          if (isNaN(+b[sortBy[i].prop].toString())) {
            result =
              sortBy[i].direction *
              (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString()
                ? -1
                : a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString()
                ? 1
                : 0);
          } else {
            result =
              sortBy[i].direction *
              (+a[sortBy[i].prop].toString() < +b[sortBy[i].prop].toString()
                ? -1
                : +a[sortBy[i].prop].toString() > +b[sortBy[i].prop].toString()
                ? 1
                : 0);
          }

          i++;
        }
        return result;
      });
      filterItems();
    };

    //for search
    const selectedActivate = ref(null);
    const selectedTitle = ref("");
    const selectedContent = ref("");
    const selectedCat = ref("");

    const activates = ref([
      { value: true, text: "啟用" },
      { value: false, text: "已停用" },
    ]);

    function clearSearch() {
      selectedActivate.value = "";
      selectedTitle.value = "";
      selectedContent.value = "";
      selectedCat.value = "";
      getData();
    }

    onMounted(async () => {
      await getData();
    });

    watch(offset, (v, pv) => {
      filterItems();
    });

    watch(rows, (v, pv) => {
      filterItems();
    });

    //-----------editModal----------------
    const editModal = ref(false);
    const nowType = ref(1);
    const modalItem = ref({});

    function showEditModal(type, item) {
      //type- 1Add、2Edit、3Delete
      let imgArr = new Array(6).fill().map((s, i) => ({
        url: "",
        index: `網址${i + 1}`,
      }));

      if (type == 2 || type == 3) {
        modalItem.value = { ...item };
        if (item?.imagesUrl) {
          modalItem.value.imagesArr = item.imagesUrl.map((s, i) => ({
            url: s,
            index: `網址${i + 1}`,
          }));
          modalItem.value.imagesArr.unshift({
            url: item.imageUrl,
            index: `主圖網址`,
          });
        } else {
          modalItem.value.imagesArr = imgArr;
          modalItem.value.imagesArr.unshift({
            url: item.imageUrl,
            index: `主圖網址`,
          });
        }
      } else {
        modalItem.value = {
          category: "",
          content: "",
          description: "",
          imageUrl: "",
          imagesArr: imgArr,
          is_enabled: true,
          origin_price: 0,
          price: 0,
          title: "",
          unit: "",
        };
      }
      nowType.value = type;
      editModal.value = true;
    }

    const saveEditModal = async () => {
      const obj = {
        ...modalItem.value,
      };

      obj.imagesUrl = obj.imagesArr.slice(1).map((s) => `${s.url}`);
      obj.imageUrl = obj.imagesArr[0].url;
      delete obj.imagesArr;

      try {
        // const res = await putInstitutionList(obj);
        if (nowType.value == 1) {
          const res1 = await postProducts({ data: obj });
        }
        if (nowType.value == 2) {
          const res2 = await putProducts({ data: obj }, obj.id);
        }
        if (nowType.value == 3) {
          const res3 = await deleteProducts(obj.id);
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
        toast.error(`${e.response ? e.response.data : e}`, {
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
      const res2 = await putProducts({ data: obj }, obj.id);
      getData();
      toast.info(`Product調整Success`, {
        timeout: 2000,
        hideProgressBar: true,
      });
    };

    const images = ref("");

    const responsiveOptions = ref([
      {
        breakpoint: "1024px",
        numVisible: 5,
      },
      {
        breakpoint: "768px",
        numVisible: 3,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
      },
    ]);

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
        toast.error(`${e.response ? e.response.data : e}`, {
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
      responsiveOptions,
      //for list data variable
      headers,
      items,
      itemsForShow,
      toast,

      //list data Function
      getData,
      filterItems,
      sort,

      //paginator
      offset, //目前在第幾筆
      rows, //1頁顯示筆數
      totalItemsCount,
      orderByArr,

      //for search
      selectedActivate,
      selectedTitle,
      selectedContent,
      selectedCat,

      activates,

      clearSearch,

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
  grid-template-columns: 180px 720px repeat(7, 1fr);

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
