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
      needFooter: true,
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
      needFooter: false,
    },
  },
  {
    path: "/dashboard",
    component: () => import("@/views/dashBoard.vue"),
    name: "dashboard",
    redirect: "/dashboard/products",
    meta: { title: "DashboardManagement", needNav: false, needFooter: false },
    children: [
      {
        path: "products",
        component: () => import("@/views/dashboard/products.vue"),
        name: "products",
        meta: { title: "ProductManagement", needFooter: false },
      },
      {
        path: "orders",
        component: () => import("@/views/dashboard/orders.vue"),
        name: "orders",
        meta: { title: "OrdersManagement", needFooter: false },
      },
      {
        path: "coupons",
        component: () => import("@/views/dashboard/coupons.vue"),
        name: "coupons",
        meta: { title: "CouponManagement", needFooter: false },
      },
      {
        path: "articles",
        component: () => import("@/views/dashboard/articles.vue"),
        name: "articles",
        meta: { title: "NewsManagement", needFooter: false },
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "about page",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/about.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    meta: {
      title: "contact page",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/contact.vue"),
  },
  {
    path: "/news",
    name: "news",
    meta: {
      title: "news page",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/news.vue"),
  },
  {
    path: "/newsdetail/:newsId",
    name: "newsdetail",
    meta: {
      title: "newsdetail",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/newsDetail.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    meta: {
      title: "faq page",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/faq.vue"),
  },
  {
    path: "/productslist",
    name: "productslist",
    meta: {
      title: "productslist",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/productsList.vue"),
  },
  {
    path: "/productdetail/:productId",
    name: "productdetail",
    meta: {
      title: "productdetail",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/productDetail.vue"),
  },
  {
    path: "/favourite",
    name: "favourite",
    meta: {
      title: "favourite page",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/favourite.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    meta: {
      title: "cart page",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/cart.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    meta: {
      title: "checkout page",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/checkout.vue"),
  },
  {
    path: "/payment",
    name: "payment",
    meta: {
      title: "patment page",
      needNav: true,
      needFooter: true,
    },
    component: () => import("@/views/payment.vue"),
  },
  {
    path: "/testpage",
    name: "testpage",
    meta: {
      title: "testpage",
      needNav: false,
      needFooter: false,
    },
    component: () => import("@/views/testpage.vue"),
  },
  {
    path: "/testpage2",
    name: "testpage2",
    meta: {
      title: "testpage2",
      needNav: false,
      needFooter: false,
    },
    component: () => import("@/views/testpage2.vue"),
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
