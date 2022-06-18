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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                '--swiper-navigation-color': 'gray',
                '--swiper-pagination-color': 'gray',
                '--swiper-navigation-size': '32px',
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
                <p class="old-price">${{ product.origin_price || "" }}</p>
                <p class="text-green-500 text-xl font-semibold">
                  Save
                  {{
                    (
                      ((+product.origin_price - +product.price) /
                        +product.origin_price) *
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
                class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold"
              >
                Qty
              </div>
              <select
                class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
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

            <button
              type="button"
              class="h-14 px-6 py-2 font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- -----------section2 -->
      <div class="card mt-3">
        <TabView class="tabview-custom" ref="tabview4">
          <TabPanel>
            <template #header>
              <i class="pi pi-tag"></i>
              <span style="display: inline-block" class="ml-1">
                Specifications</span
              >
            </template>
            <div
              class="specifications-content"
              v-html="product.contentreplace"
            ></div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <i class="pi pi-wallet"></i>
              <span style="display: inline-block" class="ml-1">
                Returns Policy</span
              >
            </template>
            <div class="specifications-content">
              <p>
                ● Items with a value of $35 or more must be returned using a
                trackable shipping method.
              </p>
              <p>
                ● All product packaging (boxes, manuals, warranty cards, etc.)
                and certificates of authenticity, grading, and appraisal must be
                returned with the item.
              </p>
              <p>
                ● Any items returned without original documentation will be
                rejected.
              </p>
              <p>
                ● Items that have been resized, damaged, or otherwise altered
                after delivery won't be accepted for return.
              </p>
            </div>
          </TabPanel>
        </TabView>
      </div>

      <!-- -----------section3 -->
      <h2 class="heading-line" style="margin: 0 0 5px">
        <span>Your recently viewed items</span>
      </h2>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { getCustomerSingleProduct } from "Service/apis.js";
import { useToast } from "vue-toastification";
import { useRoute, useRouter } from "vue-router";

import { Swiper, SwiperSlide } from "swiper/vue";
import { useStore } from "vuex";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { EffectCards } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper";

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

    const toast = useToast();
    const product = ref({});

    const getData = async () => {
      try {
        const res = await getCustomerSingleProduct(`${route.params.productId}`);
        if (!!res.data?.product?.imagesUrl.length) {
          res.data.product.imagesUrl = res.data.product.imagesUrl.filter(
            (s) => !!s
          );
        }

        product.value = { ...res.data?.product };

        product.value.contentreplace = product.value.content.replace(
          /\n/g,
          "<br>"
        );
      } catch (e) {
        toast.error(`${e.response ? e.response.data : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };

    onMounted(async () => {
      await getData();
      setThumbsSwiper();
    });

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

    return {
      product,
      getData,

      thumbsSwiper,
      setThumbsSwiper,
      goSpecialCategory,
      modules: [FreeMode, Navigation, Thumbs],
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
</style>
