<template>
  <div class="main-content">
    <div class="left-bar"><PanelMenu :model="items" /></div>

    <router-view class="right-content"></router-view>
  </div>
</template>

<script>
import { ref, inject } from "vue";

export default {
  setup() {
    const emitter = inject("emitter"); // Inject `emitter`
    const items = ref([
      {
        key: "0",
        label: "Products",
        icon: "pi pi-fw pi-file",
        items: [
          {
            key: "0_0",
            label: "New",
            icon: "pi pi-fw pi-plus",
            command: () => callFunction("addProducts"),
          },
          {
            key: "0_1",
            label: "View",
            icon: "pi pi-fw pi-external-link",
            to: "/dashboard/products",
          },
        ],
      },
      {
        key: "1",
        label: "Orders",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            key: "1_0",
            label: "Left",
            icon: "pi pi-fw pi-align-left",
            to: "/login",
          },
          {
            key: "1_1",
            label: "Right",
            icon: "pi pi-fw pi-align-right",
          },
          {
            key: "1_2",
            label: "Center",
            icon: "pi pi-fw pi-align-center",
          },
          {
            key: "1_3",
            label: "Justify",
            icon: "pi pi-fw pi-align-justify",
          },
        ],
      },
      {
        key: "2",
        label: "Coupons",
        icon: "pi pi-fw pi-user",
        items: [
          {
            key: "0_0",
            label: "New",
            icon: "pi pi-fw pi-plus",
            command: () => callFunction("addCoupons"),
          },
          {
            key: "0_1",
            label: "View",
            icon: "pi pi-fw pi-external-link",
            to: "/dashboard/coupons",
          },
        ],
      },
      {
        key: "3",
        label: "Articles",
        icon: "pi pi-fw pi-calendar",
        items: [
          {
            key: "3_0",
            label: "Edit",
            icon: "pi pi-fw pi-pencil",
            items: [
              {
                key: "3_0_0",
                label: "Save",
                icon: "pi pi-fw pi-calendar-plus",
              },
              {
                key: "3_0_0",
                label: "Delete",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
          {
            key: "3_1",
            label: "Archieve",
            icon: "pi pi-fw pi-calendar-times",
            items: [
              {
                key: "3_1_0",
                label: "Remove",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
        ],
      },
    ]);

    const callFunction = () => {
      // alert(123);
      emitter.emit("addProducts");
    };

    return { items, callFunction };
  },
};
</script>

<style scoped lang="scss">
// .p-panelmenu {
//   width: 22rem;
// }
.main-content {
  // display: flex;
  .left-bar {
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    left: 0;
    // background: black;
    box-shadow: 0px 10px 40px rgb(41 50 65 / 6%);
  }
  .right-content {
    padding-left: 160px;
  }
}
</style>
