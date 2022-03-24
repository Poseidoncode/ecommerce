import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
import Home from "@/App.vue";
import Dashboard from "@/views/dashBoard.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "home page",
    },
    component: () => import("@/views/landingpage.vue"),
    // component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("@/views/dashBoard.vue"),
    name: "dashboard",
    redirect: "/dashboard/products",
    meta: { title: "後臺管理" },
    children: [
      {
        path: "products",
        component: () => import("@/views/dashboard/products.vue"),
        name: "products",
        meta: { title: "產品資料設定" },
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "home page",
      name: "home",
    },
    component: () => import("@/views/landingpage.vue"),
    // component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (!store.getters.g_isLogin && to.name !== "Login") {
//     const _authData = sessionStorage.getItem("authData")
//       ? JSON.parse(sessionStorage.getItem("authData"))
//       : null;

//     if (!!_authData?.token) {
//       store.commit("m_setUserData", _authData);
//       next();
//     } else {
//       next({ name: "Login" });
//     }
//   } else {
//     next();
//   }
// });

export default router;
