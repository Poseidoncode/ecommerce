<template>
  <section class="dtc-main-section px-3">
    <section class="search-block">
      <h5 class="big-title">產品管理</h5>
      <div class="p-2 search-section">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">啟用狀態</span>
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
              @change="getData"
            />
            <label :for="item.text">{{ item.text }}</label>
          </div>
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">功能代碼</span>
          <InputText
            type="text"
            v-model="selectedNo"
            @keydown.enter="getData"
            class="custom-search"
          />
        </div>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">功能名稱</span>
          <InputText
            type="text"
            v-model="selectedName"
            @keydown.enter="getData"
            class="custom-search"
          />
        </div>
        <button
          class="text-white font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search"
          type="button"
          style="background: #0c69e1"
          @click="getData"
        >
          查詢
        </button>
        <button
          class="text-white font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search"
          type="button"
          style="background: #6a9f3e"
          @click="clearSearch"
        >
          清除
        </button>
        <button
          class="text-gray-700 font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search"
          type="button"
          style="background: #f9be4a"
          @click="showEditModal(1)"
        >
          +新增功能
        </button>
      </div>
    </section>

    <header class="dtc-grid my-dark">
      <div
        v-for="(item, i) in headers"
        :key="`headers${i}`"
        @click="sortData(item)"
        class="header"
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
      class="dtc-grid"
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
          style="background: #2a97f0"
          @click="showEditModal(2, item)"
        >
          編輯功能
        </button>
        <button
          class="text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 text-sm"
          type="button"
          style="background: #fc5792"
          @click="showEditModal(3, item)"
        >
          刪除功能
        </button>
      </div>

      <div class="content">
        {{ item.No || "" }}
      </div>
      <div class="content">
        {{ item.Name || "" }}
      </div>
      <div class="content">
        {{ item.Seq || "" }}
      </div>
      <div class="content" style="padding-top: 0px">
        <Checkbox
          :binary="true"
          v-model="item.IsActivated"
          @change="changeActivate(item)"
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
        :totalRecords="totalItemsCount"
        :rowsPerPageOptions="[5, 10, 50]"
      ></Paginator>
      <div class="mt-4">共{{ totalItemsCount }}筆</div>
    </footer>

    <!-- //EditModal -->
    <Dialog
      v-model:visible="editModal"
      style="width: 800px"
      :draggable="false"
      :modal="true"
      class="custom-modal"
    >
      <template #header>
        <h3>
          {{
            nowType == 1 ? "新增功能" : nowType == 2 ? "編輯功能" : "刪除功能"
          }}
        </h3>
      </template>
      <section>
        <h2 v-if="nowType == 3" class="mb-2 font-black text-xl">
          是否確定要刪除此功能?
        </h2>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">功能代碼</span>
          <InputText
            type="text"
            v-model.trim="modalItem.No"
            :disabled="nowType == 2 || nowType == 3"
            class="custom-search"
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">功能名稱</span>
          <InputText
            type="text"
            v-model.trim="modalItem.Name"
            class="custom-search"
            :disabled="nowType == 3"
            autofocus
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon red-star">顯示順序</span>
          <InputText
            type="Number"
            v-model.trim="modalItem.Seq"
            class="custom-search"
            :disabled="nowType == 3"
            autofocus
          />
        </div>
        <div class="p-inputgroup mt-2">
          <span class="p-inputgroup-addon special-addon">啟用狀態</span>
          <Checkbox
            :binary="true"
            v-model="modalItem.IsActivated"
            style="margin-left: 8px !important; margin-top: 8px !important"
            :disabled="nowType == 3"
          />
        </div>
      </section>

      <template #footer>
        <Button label="確定" @click="saveEditModal" />
        <Button
          label="取消"
          class="p-button-success"
          @click="editModal = false"
        />
      </template>
    </Dialog>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useToast } from "vue-toastification";

import { getProducts } from "Service/apis.js";
// import buildQuery from "odata-query";
// import {
//   arrFilter,
//   appendArrFilter,
//   substringofFilter,
//   appendSubstringofFilter,
//   equalFilter,
//   appendEqualFilter,
//   equalNumFilter,
//   appendEqualNumFilter,
// } from "Service/searchFunction.js";

export default defineComponent({
  name: "function",
  components: {},
  setup() {
    //-----------ListData----------------
    //for list
    const headers = ref([
      { name: "操作", key: "", sortDesc: null },
      { name: "功能代碼", key: "No", sortDesc: null },
      { name: "功能名稱", key: "Name", sortDesc: null },
      { name: "顯示順序", key: "Seq", sortDesc: null },
      { name: "啟用狀態", key: "IsActivated", sortDesc: null },
    ]);

    const items = ref([]);

    const offset = ref(0);
    const rows = ref(10);
    const totalItemsCount = ref(1);
    const orderByArr = ref([]);

    const toast = useToast();

    async function getData() {
      try {
        //odata3 qs
        const page = +offset.value / +rows.value + +1;
        const skip = (page - 1) * rows.value;
        const top = rows.value;
        const orderBy = orderByArr.value;

        if (
          !(
            orderByArr.value.includes("Seq") ||
            orderByArr.value.includes("Seq desc")
          )
        ) {
          orderBy.push("Seq");
        }

        const obj = { top, skip, orderBy };
        // let qs = buildQuery(obj);
        let bQs = false;
        let qs = "";

        // if (typeof selectedActivate.value === "boolean") {
        //   qs = equalNumFilter("IsActivated", qs, selectedActivate.value);
        //   bQs = true;
        // }

        // if (selectedNo.value) {
        //   if (bQs) {
        //     qs = appendSubstringofFilter("No", qs, selectedNo.value);
        //   } else {
        //     qs = substringofFilter("No", qs, selectedNo.value);
        //   }
        //   bQs = true;
        // }

        // if (selectedName.value) {
        //   if (bQs) {
        //     qs = appendSubstringofFilter("Name", qs, selectedName.value);
        //   } else {
        //     qs = substringofFilter("Name", qs, selectedName.value);
        //   }
        //   bQs = true;
        // }

        //top:筆數、skip:跳過幾筆

        const res = await getProducts(`${qs}`);
        console.log("res", res);
        // let { Items, Count } = res.data;

        // items.value = [...Items];
        // totalItemsCount.value = Count;
      } catch (e) {
        toast.error(`${e.response ? e.response.data : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    }

    //sort
    function sortData(item) {
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
      getData();
    }

    //for search
    const selectedActivate = ref(null);
    const selectedNo = ref("");
    const selectedName = ref("");

    const activates = ref([
      { value: true, text: "啟用" },
      { value: false, text: "已停用" },
    ]);

    function clearSearch() {
      selectedActivate.value = "";
      selectedNo.value = "";
      selectedName.value = "";
      getData();
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
    const modalItem = ref({
      No: "",
      Name: "",
      IsActivated: true,
    });

    function showEditModal(type, item) {
      //type- 1新增、2編輯、3刪除

      if (type == 2 || type == 3) {
        modalItem.value = { ...item };
      } else {
        modalItem.value = {
          No: "",
          Name: "",
          Seq: "",
          IsActivated: true,
        };
      }
      nowType.value = type;
      editModal.value = true;
    }

    async function saveEditModal() {
      if (!Boolean(modalItem.value.No) || !Boolean(modalItem.value.Name)) {
        toast.error(`功能代碼和功能名稱為必填欄位`, {
          timeout: 4000,
          hideProgressBar: true,
        });
        return;
      }

      if (+modalItem.value.Seq < 100 || +modalItem.value.Seq > 300) {
        toast.error(`顯示順序數值只能介於100~300`, {
          timeout: 4000,
          hideProgressBar: true,
        });
        return;
      }

      const obj = {
        No: modalItem.value.No,
        Name: modalItem.value.Name,
        Seq: +modalItem.value.Seq,
        IsActivated: modalItem.value.IsActivated,
      };

      try {
        // const res = await putInstitutionList(obj);
        if (nowType.value == 1) {
          //   const res1 = await addFunctionItem(obj);
        }
        if (nowType.value == 2) {
          //   const res2 = await modifyFunctionItem(obj);
        }
        if (nowType.value == 3) {
          //   const res3 = await removeFunctionItem(modalItem.value.No);
        }

        toast.success(
          `${
            nowType.value == 1 ? "新增" : nowType.value == 2 ? "編輯" : "刪除"
          }成功`,
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
    }

    async function changeActivate(item) {
      const obj = {
        No: item.No,
        Name: item.Name,
        IsActivated: item.IsActivated,
      };
      try {
        // await modifyFunctionItem(obj);
        toast.success("功能調整成功", {
          timeout: 2000,
          hideProgressBar: true,
        });
      } catch (e) {
        toast.error(`${e.response ? e.response.data : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    }

    return {
      //for list data variable
      headers,
      items,
      toast,

      //list data Function
      getData,
      sortData,

      //paginator
      offset, //目前在第幾筆
      rows, //1頁顯示筆數
      totalItemsCount,
      orderByArr,

      //for search
      selectedActivate,
      selectedNo,
      selectedName,

      activates,

      clearSearch,

      //editModal variable
      editModal,
      modalItem,
      nowType,

      //editModal Function
      showEditModal,
      saveEditModal,

      changeActivate,
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
  background: #f1f9e7;
  color: #1f2d56;
  font-weight: bold;
  border: 0px !important;
}
.special-addon {
  border-right: 0.5px solid #dbdcdd;
}
.custom-search {
  // height: 42px;
}
.p-dropdown {
  line-height: 12px;
}
.dtc-grid {
  display: grid;
  grid-template-columns: 244px 1fr 1fr 1fr 1fr;

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

.my-dark {
  > div {
    background: #e9e9e9;
    color: #f3f3f3;
    font-weight: bolder;
  }
}
</style>
