<template>
  <div class="main-content">
    <div class="left-bar">
      <PanelMenu :model="items" />
    </div>

    <router-view class="right-content"></router-view>
  </div>
</template>

<script>
import { ref, inject, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const emitter = inject("emitter"); // Inject `emitter`
    const router = useRouter();
    const route = useRoute();
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
            key: "0_0",
            label: "Delete",
            icon: "pi pi-fw pi-trash",
            command: () => callFunction("deleteOrders"),
          },
          {
            key: "0_1",
            label: "View",
            icon: "pi pi-fw pi-external-link",
            to: "/dashboard/orders",
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
            key: "0_0",
            label: "New",
            icon: "pi pi-fw pi-plus",
            command: () => callFunction("addArticles"),
          },
          {
            key: "0_1",
            label: "View",
            icon: "pi pi-fw pi-external-link",
            to: "/dashboard/articles",
          },
        ],
      },
      {
        key: "4",
        label: "Logout",
        icon: "pi pi-fw pi-calendar",
        to: "/",
        command: () => logout(),
      },
    ]);

    const callFunction = async (type) => {
      // console.log('type', type);
      if (type == "addProducts") {
        if (route.name != "products") {
          router.push({ name: "products" });
          setTimeout(() => {
            emitter.emit("addProducts");
          }, 40);
        } else {
          emitter.emit("addProducts");
        }
      } else if (type == "deleteOrders") {
        emitter.emit("deleteOrders");
      } else if (type == "addCoupons") {
        if (route.name != "coupons") {
          router.push({ name: "coupons" });
          setTimeout(() => {
            emitter.emit("addCoupons");
          }, 40);
        } else {
          emitter.emit("addCoupons");
        }
      } else if (type == "addArticles") {
        if (route.name != "articles") {
          router.push({ name: "articles" });
          setTimeout(() => {
            emitter.emit("addArticles");
          }, 40);
        } else {
          emitter.emit("addArticles");
        }
      }
    };

    const logout = () => {
      sessionStorage.clear();
      router.push({ name: "home" });
    };

    return { items, callFunction };
  },
};
</script>

<style scoped lang="scss">
.main-content {
  .left-bar {
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    left: 0;
    background: #303030;
    box-shadow: 0px 10px 40px rgb(41 50 65 / 6%);
  }

  .right-content {
    padding-left: 160px;
  }
}

::v-deep(.p-panelmenu .p-panelmenu-panel .p-panelmenu-header > a) {
  background: #303030;
  color: #dde0e0;
}
::v-deep(.p-panelmenu .p-panelmenu-content) {
  background: #303030;
  color: #dde0e0;
}
::v-deep(.p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link
    .p-menuitem-text) {
  background: #303030;
  color: #dde0e0;
  &:hover {
    background: #303030;
    color: #dde0e0;
  }
}
::v-deep(.p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link
    .p-menuitem-icon) {
  background: #303030;
  color: #dde0e0;
}
::v-deep(.p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link:not(.p-disabled):hover) {
  background: #303030;
  color: #dde0e0 !important;
}
</style>
