<template>
  <section>
    <div class="product-img">
      <swiper
        @swiper="setThumbsSwiper"
        :loop="true"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper"
        :direction="'vertical'"
      >
        <swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
        ><swiper-slide
          ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
        /></swiper-slide>
      </swiper>

      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :loop="true"
        :spaceBetween="10"
        :navigation="false"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2"
      >
        <swiper-slide
          ><img src="https://swiperjs.com/demos/images/nature-1.jpg"
        /></swiper-slide>

        <swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
        ><swiper-slide
          ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
        /></swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue';
import { getCustomerSingleProduct } from 'Service/apis.js';
import { useToast } from 'vue-toastification';
import { useRoute, useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './style.css';

// import required modules

import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper';

export default defineComponent({
  props: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();

    const toast = useToast();
    const product = ref([]);
    // let thumbsSwiper = null;
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs, EffectCards],
      // modules3: [FreeMode, Navigation, Thumbs, Virtual],
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper {
  // width: 100%;
  width: 240px;
  height: 320px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper {
  // height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
  margin-right: 8px;
  margin-left: 0;
  .swiper-slide {
    // width: 25%;
    //  height: 100%;
    width: 120px;
    height: 120px;
    opacity: 0.4;
  }
}
// .swiper-wrapper {
//   display: flex;
//   align-items: flex-end;
// }

.mySwiper2 {
  height: 80%;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 480px;
  height: 640px;
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
  display: flex;
  justify-content: center;
}
::v-deep(.swiper-wrapper) {
  display: flex;
  align-items: flex-end;
}
</style>
