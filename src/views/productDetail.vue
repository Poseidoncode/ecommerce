<template>
  <div class="py-6">

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center space-x-2 text-gray-400 text-sm">
        <a href="#" class="hover:underline hover:text-gray-600" @click.prevent="$router.push('/')">Home</a>
        <span>
          <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <a href="#" class="hover:underline hover:text-gray-600" @click.prevent="$router.push('/productslist')">Shop</a>
        <span>
          <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <span>{{ product.category }}</span>
      </div>
    </div>
    <!-- ./ Breadcrumbs -->

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

      <div class="flex flex-col md:flex-row -mx-4">

        <div class="md:flex-1 px-4">
          <!-- ----prodict img -->
          <div class="product-img">

            <swiper :loop="false" @click="setThumbsSwiper" :spaceBetween="10" :slidesPerView="3" :freeMode="false"
              :watchSlidesProgress="false" :modules="modules" class="mySwiper" :direction="'vertical'">


              <swiper-slide v-for="(itemimg, idx) in product.imagesUrl" :key="`content${idx}`"><img :src="itemimg" />
              </swiper-slide>

            </swiper>

            <swiper :style="{
              '--swiper-navigation-color': 'gray',
              '--swiper-pagination-color': 'gray',
            }" :loop="false" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }"
              :modules="modules" class="mySwiper2">

              <swiper-slide v-for="(itemimg, idx) in product.imagesUrl" :key="`content${idx}`"><img :src="itemimg" />
              </swiper-slide>

            </swiper>
          </div>

        </div>
        <div class="md:flex-1 px-4">
          <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {{ product.title }}
          </h2>
          <p class="text-gray-500 text-sm">
            By
            <a href="#" class="text-indigo-600 hover:underline">ABC Company</a>
          </p>

          <div class="flex items-center space-x-4 my-4">
            <div>
              <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                <span class="text-indigo-400 mr-1 mt-1">$</span>
                <span class="font-bold text-indigo-600 text-3xl">25</span>
              </div>
            </div>
            <div class="flex-1">
              <p class="text-green-500 text-xl font-semibold">Save 12%</p>
              <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
            </div>
          </div>

          <p class="text-gray-500">
            Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
            exercitationem porro saepe ea harum corrupti vero id laudantium
            enim, libero blanditiis expedita cupiditate a est.
          </p>

          <div class="flex py-4 space-x-4">
            <div class="relative">
              <div
                class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                Qty
              </div>
              <select
                class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>

              <svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>

            <button type="button"
              class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue';
import { getCustomerSingleProduct } from 'Service/apis.js';
import { useToast } from 'vue-toastification';
import { useRoute, useRouter } from 'vue-router';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { EffectCards } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper';

export default defineComponent({
  props: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  setup (props, { emit }) {
    const route = useRoute();
    const router = useRouter();

    console.log('route', route, route.params.productId, route.params.value);

    const toast = useToast();
    const product = ref([]);
    const getData = async () => {
      try {
        const res = await getCustomerSingleProduct(`${route.params.productId}`);
        if (!!res.data?.product?.imagesUrl.length) {
          res.data.product.imagesUrl = res.data.product.imagesUrl.filter((s) => !!s);
        }
        product.value = { ...res.data?.product };

        console.log("product.value", product.value)
      } catch (e) {
        toast.error(`${e.response ? e.response.data : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };
    onMounted(async () => {
      await getData();
      setThumbsSwiper()
    });


    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper = null) => {
      console.log("swiper", swiper)
      thumbsSwiper.value = swiper;
    };
    return {
      product,
      getData,

      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 344px;
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
    opacity: 1;
  }
}

.mySwiper2 {
  // height: 80%;
  max-height: 344px;
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
</style>
