import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
import Home from "@/App.vue";
import Dashboard from "@/views/dashBoard.vue";
const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "home page",
      needNav: true,
    },
    // redirect: "/home",
    component: () => import("@/views/homePage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
      title: "home page",
      needNav: false,
    },
  },
  {
    path: "/dashboard",
    component: () => import("@/views/dashBoard.vue"),
    name: "dashboard",
    redirect: "/dashboard/products",
    meta: { title: "後臺管理", needNav: false },
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
    path: "/about",
    name: "about",
    meta: {
      title: "about page",
    },
    component: () => import("@/views/about.vue"),
  },
  {
    path: "/news",
    name: "news",
    meta: {
      title: "news page",
      needNav: true,
    },
    component: () => import("@/views/news.vue"),
  },
  {
    path: "/article",
    name: "article",
    meta: {
      title: "article page",
      needNav: true,
    },
    component: () => import("@/views/article.vue"),
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
