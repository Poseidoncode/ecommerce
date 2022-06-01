<template>
  <!-- component -->
  <div>
    <section class="bg-section">
      <div class="text-white bg-setting bg-setting-local">
        <div class="container mx-auto flex flex-col md:flex-row items-center  ">
          <div class="flex flex-col w-full lg:w-1/3 justify-center p-8  items-center md:items-start">
            <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1">
              News
            </h1>
            <h2 class="text-3xl md:text-3xl  p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2">
              Get Your Epic time
            </h2>

          </div>
          <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center"></div>
        </div>
      </div>
    </section>
    <div class="news">

      <div v-for="(item, i) in 50" :key="`news${i}`">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 mx-3">
          <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref, defineComponent } from "vue";

export default defineComponent({
  props: {},
  setup (props, { emit }) {
    // emit("update:modelValue", _newValues);
    return {};
  },
});
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.bg-section {
  height: 437px;
  margin-bottom: 100px;
}

.bg-setting-local {
  padding: 200px 0 120px 0;
  background: url('https://images.unsplash.com/photo-1617317376997-8748e6862c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: 50% 65%;
  background-size: cover;
}

@media (max-width: 575px) {
  .bg-section {
    height: 220px;
    margin-bottom: 160px;
  }

  .bg-section-word1 {
    margin-top: 60px
  }

  .bg-section-word2 {
    display: none;
  }

  .bg-setting-local {
    padding: 50px 0 5px 0;
  }

  .bg-setting-local {
    background-position: 102% 74%
  }

}
</style>
