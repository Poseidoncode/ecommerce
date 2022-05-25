import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store';
import Home from '@/App.vue';
import Dashboard from '@/views/dashBoard.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'home page',
      needNav: true,
      needFooter: true,
    },
    // redirect: "/home",
    component: () => import('@/views/homePage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: 'home page',
      needNav: false,
      needFooter: false,
    },
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashBoard.vue'),
    name: 'dashboard',
    redirect: '/dashboard/products',
    meta: { title: '後臺管理', needNav: false, needFooter: false },
    children: [
      {
        path: 'products',
        component: () => import('@/views/dashboard/products.vue'),
        name: 'products',
        meta: { title: '產品管理', needFooter: false },
      },
      {
        path: 'orders',
        component: () => import('@/views/dashboard/orders.vue'),
        name: 'orders',
        meta: { title: '訂單管理', needFooter: false },
      },
      {
        path: 'coupons',
        component: () => import('@/views/dashboard/coupons.vue'),
        name: 'coupons',
        meta: { title: '優惠券管理', needFooter: false },
      },
      {
        path: 'articles',
        component: () => import('@/views/dashboard/articles.vue'),
        name: 'articles',
        meta: { title: '文章管理', needFooter: false },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'about page',
      needNav: true,
    },
    component: () => import('@/views/about.vue'),
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      title: 'news page',
      needNav: true,
    },
    component: () => import('@/views/news.vue'),
  },
  {
    path: '/article',
    name: 'article',
    meta: {
      title: 'article page',
      needNav: true,
    },
    component: () => import('@/views/article.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    meta: {
      title: 'faq page',
      needNav: true,
    },
    component: () => import('@/views/faq.vue'),
  },
  {
    path: '/productslist',
    name: 'productslist',
    meta: {
      title: 'productslist',
      needNav: true,
    },
    component: () => import('@/views/productsList.vue'),
  },
  {
    path: '/productdetail',
    name: 'productdetail',
    meta: {
      title: 'productdetail',
      needNav: true,
    },
    component: () => import('@/views/productDetail.vue'),
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
