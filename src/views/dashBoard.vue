<template>
  <div class="main-content">
    <div class="left-bar"><PanelMenu :model="items" /></div>

    <router-view class="right-content"></router-view>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
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
            command: () => testFunction(),
          },
          {
            key: "0_1",
            label: "View",
            icon: "pi pi-fw pi-external-link",
          },
          {
            key: "0_2",
            label: "Delete",
            icon: "pi pi-fw pi-trash",
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
            key: "2_0",
            label: "New",
            icon: "pi pi-fw pi-user-plus",
          },
          {
            key: "2_1",
            label: "Delete",
            icon: "pi pi-fw pi-user-minus",
          },
          {
            key: "2_2",
            label: "Search",
            icon: "pi pi-fw pi-users",
            items: [
              {
                key: "2_2_0",
                label: "Filter",
                icon: "pi pi-fw pi-filter",
                items: [
                  {
                    key: "2_2_0_0",
                    label: "Print",
                    icon: "pi pi-fw pi-print",
                  },
                ],
              },
              {
                key: "2_2_1",
                icon: "pi pi-fw pi-bars",
                label: "List",
              },
            ],
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

    const testFunction = () => {
      alert(123);
    };

    return { items, testFunction };
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
