<template>
  <div class="pb-6">
    <section class="bg-section">
      <div class="text-white bg-setting bg-setting-local">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
          <div
            class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start"
          >
            <h1
              class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1"
            >
              Shop
            </h1>
            <h2
              class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2"
            >
              Get your Luxurious Elegence
            </h2>
          </div>
          <div
            class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center"
          ></div>
        </div>
      </div>
    </section>
    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center space-x-2 text-gray-800 text-sm">
        <div
          class="hover:underline hover:text-gray-800 cursor-pointer"
          @click.prevent="$router.push('/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <span>
          <svg
            class="h-5 w-5 leading-none text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <div
          class="text-gray-800 hover:underline hover:text-gray-900 cursor-pointer"
          @click.prevent="$router.push('/productslist')"
        >
          Shop
        </div>
        <span>
          <svg
            class="h-5 w-5 leading-none text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <div
          href="#"
          class="text-gray-800 hover:underline hover:text-gray-900 cursor-pointer"
          @click="goSpecialCategory(product.category)"
        >
          {{ product.category }}
        </div>

        <span>
          <svg
            class="h-5 w-5 leading-none text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <span class="text-gray-400">{{ product.title }}</span>
      </div>
    </div>
    <!-- ./ Breadcrumbs -->

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <!-- ----prodict img -->
          <div class="product-img">
            <swiper
              :loop="false"
              @swiper="setThumbsSwiper"
              :spaceBetween="0"
              :slidesPerView="5"
              :freeMode="false"
              :watchSlidesProgress="false"
              :modules="modules"
              class="mySwiper"
              :direction="'vertical'"
            >
              <swiper-slide
                v-for="(itemimg, idx) in product.imagesUrl"
                :key="`content${idx}`"
                ><img :src="itemimg" />
              </swiper-slide>
            </swiper>

            <swiper
              :style="{
                '--swiper-navigation-color': '#072260',
                '--swiper-pagination-color': '#072260',
                '--swiper-navigation-size': '26px',
              }"
              :loop="false"
              :spaceBetween="10"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiper }"
              :modules="modules"
              class="mySwiper2"
            >
              <swiper-slide
                v-for="(itemimg, idx) in product.imagesUrl"
                :key="`content${idx}`"
                ><img :src="itemimg" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2
            class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
          >
            {{ product.title }}
          </h2>

          <div class="flex items-center space-x-4 my-4">
            <div>
              <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                <span class="mr-1 mt-1" style="color: red">$</span>
                <span class="font-bold text-3xl" style="color: red">{{
                  product.price || ""
                }}</span>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex">
                $
                <p class="old-price ml-1">{{ product.origin_price || "" }}</p>
                <p class="theme-color5 text-xl font-semibold">
                  Save
                  {{
                    (
                      ((+product.origin_price - +product.price) / +product.origin_price) *
                      100
                    ).toFixed(1)
                  }}%
                </p>
              </div>

              <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
            </div>
          </div>

          <p class="text-gray-500">
            {{ product.description || "" }}
          </p>

          <div class="flex py-4 space-x-4">
            <div class="relative">
              <div
                class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-600 tracking-wide font-semibold"
              >
                Qty
              </div>
              <select
                class="cursor-pointer appearance-none rounded border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                v-model="selectedQty"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>

              <svg
                class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>

            <!-- <button
              type="button"
              class="h-14 px-6 py-2 font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white"
              @click.stop="addToCart(product)"
            >
              Add to Cart
            </button> -->

            <button
              class="font-bold uppercase text-base px-6 py-2 shadow outline-none focus:outline-none custom-search"
              type="button"
              :style="`background: #001F60;color:#FFFFFF;border: 1px solid white;outline: 1px solid #001F60;height: 50px;margin-top: 3px;`"
              @click.stop="addToCart(product)"
            >
              Add to Cart
            </button>

            <button
              @click.stop="addToFavorite(product)"
              class="focus:outline-none mx-8 sm:mx-0 item-hover-content item-hover-content2"
            >
              <svg
                class="h-6 w-6"
                :fill="product.isFavorProduct ? '#FCD34D' : 'none'"
                viewBox="0 0 24 24"
                :stroke="product.isFavorProduct ? '#FCD34D' : 'currentColor'"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- -----------section2 -->
      <div class="card mt-10">
        <TabView class="tabview-custom" ref="tabview4">
          <TabPanel>
            <template #header>
              <i class="pi pi-tag"></i>
              <span style="display: inline-block" class="ml-1"> Specifications</span>
            </template>
            <div class="specifications-content" v-html="product.contentreplace"></div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <i class="pi pi-wallet"></i>
              <span style="display: inline-block" class="ml-1"> Returns Policy</span>
            </template>
            <div class="specifications-content">
              <p>
                ● Items with a value of $35 or more must be returned using a trackable
                shipping method.
              </p>
              <p>
                ● All product packaging (boxes, manuals, warranty cards, etc.) and
                certificates of authenticity, grading, and appraisal must be returned with
                the item.
              </p>
              <p>● Any items returned without original documentation will be rejected.</p>
              <p>
                ● Items that have been resized, damaged, or otherwise altered after
                delivery won't be accepted for return.
              </p>
            </div>
          </TabPanel>
        </TabView>
      </div>

      <!-- -----------section3 -->
      <h2 class="heading-line" style="margin: 50px 0 25px">
        <span>Your recently viewed items</span>
      </h2>

      <swiper
        ref="{swiperRef}"
        :mousewheel="{
          invert: true,
        }"
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="false"
        :speed="1200"
        :centeredSlides="false"
        :lazy="true"
        :navigation="{
          nextEl: '.arrow-next',
          prevEl: '.arrow-previous',
        }"
        :initialSlide="1"
        :keyboard="{
          enabled: true,
        }"
        class="product-slide"
        :breakpoints="{
          0: {
            /* when window >=0px - webflow mobile portriat */
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          478: {
            /* when window >= 478px - webflow mobile landscape */
            slidesPerView: 3,
            spaceBetween: 15,
          },
          767: {
            /* when window >= 767px - webflow tablet */ slidesPerView: 2.25,
            spaceBetween: 30,
          },
          988: {
            /* when window >= 988px - webflow desktop */
            slidesPerView: 4.25,
            spaceBetween: 50,
          },
          1920: {
            /* when window >= 988px - webflow desktop */
            slidesPerView: 4.25,
            spaceBetween: 50,
          },
        }"
        :modules="modules2"
        :scrollbar="{
          delay: 3000,
        }"
      >
        <swiper-slide v-for="(itemCat, i) in itemsRecently" :key="`itemCat${i}`">
          <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div
              class="h-56 w-full product-background"
              :style="itemCat.imageUrl ? `background:url(${itemCat.imageUrl})` : ''"
            >
              <button
                class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn"
                @click.prevent="addToCart(itemCat)"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </button>
              <div
                class="itemCat-hover cursor-pointer"
                @click.prevent="showDetail(itemCat)"
              >
                <div class="itemCat-hover-content">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4697 20.5304C19.7626 20.8232 20.2374 20.8232 20.5303 20.5304C20.8232 20.2375 20.8232 19.7626 20.5303 19.4697L19.4697 20.5304ZM7 9.25C6.58579 9.25 6.25 9.58579 6.25 10C6.25 10.4142 6.58579 10.75 7 10.75V9.25ZM13 10.75C13.4142 10.75 13.75 10.4142 13.75 10C13.75 9.58579 13.4142 9.25 13 9.25V10.75ZM10.75 7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7H10.75ZM9.25 13C9.25 13.4142 9.58579 13.75 10 13.75C10.4142 13.75 10.75 13.4142 10.75 13H9.25ZM20.5303 19.4697L15.4801 14.4194L14.4194 15.4801L19.4697 20.5304L20.5303 19.4697ZM10 16.25C6.54822 16.25 3.75 13.4518 3.75 10H2.25C2.25 14.2802 5.71979 17.75 10 17.75V16.25ZM3.75 10C3.75 6.54822 6.54822 3.75 10 3.75V2.25C5.71979 2.25 2.25 5.71979 2.25 10H3.75ZM10 3.75C13.4518 3.75 16.25 6.54822 16.25 10H17.75C17.75 5.71979 14.2802 2.25 10 2.25V3.75ZM16.25 10C16.25 11.7261 15.5513 13.2876 14.4194 14.4194L15.4801 15.4801C16.8817 14.0784 17.75 12.1399 17.75 10H16.25ZM14.4194 14.4194C13.2876 15.5513 11.7261 16.25 10 16.25V17.75C12.1399 17.75 14.0784 16.8818 15.4801 15.4801L14.4194 14.4194ZM7 10.75H13V9.25H7V10.75ZM9.25 7V13H10.75V7H9.25Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="px-5 py-3 mt-2">
              <h3 class="uppercase text-center theme-color7">
                {{ itemCat.title || "" }}
              </h3>
              <h4 class="text-black-500 mt-2 text-center theme-color7">
                ${{ itemCat.price }}
              </h4>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch, inject } from "vue";
import {
  getCustomerSingleProduct,
  postCustomerCart,
  putCustomerCart,
  getCustomerProductAll,
} from "Service/apis.js";
import { useToast } from "vue-toastification";
import { useRoute, useRouter } from "vue-router";

import { Swiper, SwiperSlide } from "swiper/vue";
import { useStore } from "vuex";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { EffectCards } from "swiper";
import { Keyboard, Mousewheel, Pagination, FreeMode, Navigation, Thumbs } from "swiper";

export default defineComponent({
  props: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const emitter = inject("emitter");
    const selectedQty = ref(1);

    const toast = useToast();
    const product = ref({});

    //detail Data
    const getData = async () => {
      try {
        const res = await getCustomerSingleProduct(`${route.params.productId}`);
        if (!!res.data?.product?.imagesUrl.length) {
          res.data.product.imagesUrl = res.data.product.imagesUrl.filter((s) => !!s);
        }

        product.value = { ...res.data?.product };
        product.value.contentreplace = product.value.content.replace(/\n/g, "<br>");

        const dataFavorArr = !!localStorage.getItem("favorData")
          ? JSON.parse(localStorage.getItem("favorData"))
          : [];

        product.value.isFavorProduct = dataFavorArr.find(
          (k) => k == route.params.productId
        )
          ? true
          : false;
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };
    //detail show
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper = null) => {
      thumbsSwiper.value = swiper;
    };

    const goSpecialCategory = (cat) => {
      store.commit("m_setSearchData", {
        category: cat,
        title: "",
        price: "",
      });
      window.scrollTo({
        top: 400,
        left: 0,
        // behavior: "smooth",
      });
      router.push("/productslist");
    };

    ///detail Action

    const addToFavorite = (item) => {
      let dataFavorArr = [];

      const existFavorArr = !!localStorage.getItem("favorData");

      if (!existFavorArr) {
        dataFavorArr = [item.id];
        toast.info(`The Item has  been added to favorite.`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      } else {
        dataFavorArr = JSON.parse(localStorage.getItem("favorData"));
        const isExistThisFavorite = dataFavorArr.find((s) => s == item.id) ? true : false;

        if (isExistThisFavorite) {
          dataFavorArr = dataFavorArr.filter((s) => s != item.id);
          toast.info(`The Item has been removed from favorite.`, {
            timeout: 2000,
            hideProgressBar: true,
          });
        } else {
          dataFavorArr.push(item.id);
          toast.info(`The Item has  been added to favorite.`, {
            timeout: 2000,
            hideProgressBar: true,
          });
        }
      }

      localStorage.setItem("favorData", JSON.stringify(dataFavorArr));
      emitter.emit("getFavorData");
      getData();
    };

    const addToCart = async (item) => {
      try {
        let obj = {};
        const isExist = store.state.cart.find((s) => s.product_id == item.id)
          ? true
          : false;

        if (isExist) {
          let productData = store.state.cart.find((s) => s.product_id == item.id);

          obj = {
            product_id: productData.product_id,
            qty: +productData.qty + +selectedQty.value,
          };
          const res = await putCustomerCart({ data: obj }, productData.id);

          emitter.emit("getCartData");
        } else {
          obj = {
            product_id: item.id,
            qty: +selectedQty.value,
          };
          const res = await postCustomerCart({ data: obj });
          emitter.emit("getCartData");
        }

        toast.info(`The Item has already been added to cart. `, {
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

    const setRecentlyViewData = (item) => {
      let dataRecentlyArr = [];
      const existRecentlyArr = !!localStorage.getItem("recentlyData");
      const productId = route.params.productId;

      if (!existRecentlyArr) {
        dataRecentlyArr = [productId];
      } else {
        dataRecentlyArr = JSON.parse(localStorage.getItem("recentlyData"));
        const isExistThisRecent = dataRecentlyArr.find((s) => s == productId)
          ? true
          : false;

        if (isExistThisRecent) {
          dataRecentlyArr = dataRecentlyArr.filter((s) => s != productId);
          dataRecentlyArr.unshift(productId);
        } else {
          dataRecentlyArr.unshift(productId);
        }
      }

      if (dataRecentlyArr.length > 10) {
        dataRecentlyArr = dataRecentlyArr.slice(0, 10);
      }
      localStorage.setItem("recentlyData", JSON.stringify(dataRecentlyArr));
    };

    const itemsRecently = ref([]);

    const getRecentlyViewData = async () => {
      let dataRecentlyArr = !!localStorage.getItem("recentlyData")
        ? JSON.parse(localStorage.getItem("recentlyData"))
        : [];
      if (sessionStorage.getItem("needs")) {
        let arr = JSON.parse(sessionStorage.getItem("needs"));

        dataRecentlyArr = dataRecentlyArr.map((s) => arr.find((k) => s == k.id));

        itemsRecently.value = [...dataRecentlyArr];
        return;
      }

      const res = await getCustomerProductAll(``);
      let arr = [...res.data?.products];
      arr = arr.filter((s) => s.title != "測試的產品s");

      dataRecentlyArr = dataRecentlyArr.map((s) => arr.find((k) => s == k.id));
      itemsRecently.value = [...dataRecentlyArr];

      sessionStorage.setItem("needs", JSON.stringify(arr));
    };

    const showDetail = (item) => {
      window.scrollTo({
        top: 0,
        left: 0,
        // behavior: "smooth",
      });

      router.replace({
        name: "productdetail",
        params: { productId: item.id },
      });
    };

    watch(
      () => route.params.productId,
      async (pv, prev) => {
        if (pv) {
          emitter.emit("toggleLoader");
          await getData();
          await setThumbsSwiper();
          await setRecentlyViewData();
          emitter.emit("toggleLoader");
          getRecentlyViewData();
        }
      }
    );

    onMounted(async () => {
      emitter.emit("toggleLoader");
      await getData();
      await setThumbsSwiper();
      await setRecentlyViewData();
      emitter.emit("toggleLoader");
      getRecentlyViewData();
    });

    return {
      product,
      getData,
      setRecentlyViewData,
      getRecentlyViewData,
      itemsRecently,
      showDetail,

      thumbsSwiper,
      setThumbsSwiper,
      goSpecialCategory,
      modules: [FreeMode, Navigation, Thumbs],
      modules2: [Keyboard, Mousewheel, Pagination, Navigation],
      addToFavorite,
      addToCart,
      selectedQty,
    };
  },
});
</script>

<style lang="scss" scoped>
//upper detatil
.swiper {
  width: 100%;
  height: 420px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.mySwiper {
  box-sizing: border-box;
  padding: 10px 0;
  margin-right: 8px;
  margin-left: 0;

  .swiper-slide {
    width: 100%;
    opacity: 0.2;

    &:hover {
      cursor: pointer;

      opacity: 1;
    }
  }

  .swiper-slide-active {
    // opacity: 1;
  }
}

.mySwiper2 {
  width: 100%;
  margin-left: 0;
  margin-right: 0;

  .swiper-slide {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.product-img {
  display: grid;
  justify-content: center;
  grid-template-columns: 18% 82%;
  grid-gap: 10px;
}

::v-deep(.swiper-wrapper) {
  display: flex;
  align-items: flex-end;
}

.old-price {
  text-decoration: line-through;
  padding-right: 10px;
  font-size: 18px;
  font-weight: 700;
}

//specifications
::v-deep(.p-tabview .p-tabview-nav) {
  border-width: 0 0 1px 0;
  border-color: #d1d1d1;
}

.specifications-content {
  line-height: 210%;
}

//background
.bg-section {
  height: 237px;
  margin-bottom: 100px;
}

.bg-setting-local {
  padding: 10px 0 120px 0;

  background: #03112e url("/public/assets/bgSwirl.svg") repeat 0 0/52px;
}

@media (max-width: 575px) {
  .bg-section {
    height: 220px;
    margin-bottom: 160px;
  }

  .bg-section-word1 {
    margin-top: 60px;
  }

  .bg-section-word2 {
    display: none;
  }

  .bg-setting-local {
    padding: 50px 0 5px 0;
  }

  .bg-setting-local {
    background-position: 102% 74%;
  }
}

.product-slide {
  height: 100%;
  .product-background {
    background-size: contain !important;
    background-repeat: no-repeat no-repeat !important;
    background-position: center !important;
    position: relative;

    .cart-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
    }

    &:hover {
      .itemCat-hover {
        display: block;
        width: 100% !important;
        height: 224px;
        // background: rgba(0, 0, 0, 0.5);
        background: rgba(22, 22, 22, 0.295);
        position: relative;

        .itemCat-hover-content {
          position: absolute;
          color: #fff;
          top: 50%;
          left: 50%;
          text-decoration: underline;
          transform: translate(-50%, -50%);
          font-size: 26px;
        }
      }
    }
  }
}
</style>
