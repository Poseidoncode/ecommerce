<template>
  <!-- component -->
  <div>
    <section class="bg-section">
      <div class="text-white bg-setting bg-setting-local">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
          <div
            class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start"
          >
            <h1
              class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1"
            >
              News
            </h1>
            <h2
              class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2"
            >
              Get Your Epic time
            </h2>
          </div>
          <div
            class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center"
          ></div>
        </div>
      </div>
    </section>
    <!-- component -->
    <div class="flex justify-center items-center">
      <div
        class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto"
      >
        <div role="main" class="flex flex-col items-center justify-center">
          <!-- <h1
            class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50"
          >
            This Week News
          </h1> -->
          <h1
            class="mb-1 md:mb-6 text-2xl font-bold md:text-4xl theme-color7 text-center"
          >
            This Week Watches News
          </h1>
          <p
            class="text-lg md:text-xl leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12"
          >
            All About Watches And Good Life!
          </p>
        </div>
        <div class="lg:flex items-stretch md:mt-12 mt-8">
          <div class="lg:w-1/2">
            <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div class="sm:w-1/2 relative content-block">
                <div class="content-block-inside">
                  <p
                    class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                  >
                    {{ weeks[0]?.timeforshow || "" }}
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-white title-outline2">
                      {{ weeks[0]?.title || "" }}
                    </h2>
                    <p class="text-base leading-4 text-white mt-2 title-outline2">
                      {{ weeks[0]?.outline || "" }}
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      @click.prevent="showDetail(weeks[0])"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  :src="weeks[0]?.image"
                  class="w-full content-block-img"
                  @click.prevent="showDetail(weeks[0])"
                />
              </div>
              <div class="sm:w-1/2 sm:mt-0 mt-4 relative content-block">
                <div>
                  <p
                    class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                  >
                    {{ weeks[1]?.timeforshow || "" }}
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-white title-outline2">
                      {{ weeks[1]?.title || "" }}
                    </h2>
                    <p class="text-base leading-4 text-white mt-2 title-outline2">
                      {{ weeks[1]?.outline || "" }}
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      @click.prevent="showDetail(weeks[1])"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  :src="weeks[1]?.image"
                  class="w-full content-block-img"
                  @click.prevent="showDetail(weeks[1])"
                />
              </div>
            </div>
            <div class="relative content-block content-block2 mt-8">
              <div class="content-block-inside">
                <p
                  class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                >
                  {{ weeks[2]?.timeforshow || "" }}
                </p>
                <div class="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 class="text-xl font-semibold text-white title-outline2">
                    {{ weeks[2]?.title || "" }}
                  </h2>
                  <p class="text-base leading-4 text-white mt-2 title-outline2">
                    {{ weeks[2]?.outline || "" }}
                  </p>
                  <a
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    @click.prevent="showDetail(weeks[2])"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <img
                :src="weeks[2]?.image"
                class="w-full hidden sm:block content-block-img"
                @click.prevent="showDetail(weeks[2])"
              />
              <img
                class="w-full sm:hidden content-block-img"
                :src="weeks[2]?.image"
                @click.prevent="showDetail(weeks[2])"
              />
            </div>
          </div>
          <div
            class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between"
          >
            <div class="relative content-block content-block2">
              <div class="content-block-inside">
                <p
                  class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                >
                  {{ weeks[3]?.timeforshow || "" }}
                </p>
                <div class="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 class="text-xl font-semibold 5 text-white title-outline2">
                    {{ weeks[3]?.title || "" }}
                  </h2>
                  <p class="text-base leading-4 text-white mt-2 title-outline2">
                    {{ weeks[3]?.outline || "" }}
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    @click.prevent="showDetail(weeks[3])"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                :src="weeks[3]?.image"
                class="w-full sm:block hidden content-block-img"
                @click.prevent="showDetail(weeks[3])"
              />
              <img
                class="w-full sm:hidden content-block-img"
                :src="weeks[3]?.image"
                @click.prevent="showDetail(weeks[3])"
              />
            </div>
            <div
              class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4"
            >
              <div class="relative w-full content-block">
                <div class="content-block-inside">
                  <p
                    class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                  >
                    {{ weeks[4]?.timeforshow || "" }}
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-white title-outline2">
                      {{ weeks[4]?.title || "" }}
                    </h2>
                    <p class="text-base leading-4 text-white mt-2 title-outline2">
                      {{ weeks[4]?.outline || "" }}
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      @click.prevent="showDetail(weeks[4])"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  :src="weeks[4]?.image"
                  class="w-full content-block-img"
                  @click.prevent="showDetail(weeks[4])"
                />
              </div>
              <div class="relative w-full sm:mt-0 mt-4 content-block">
                <div class="content-block-inside">
                  <p
                    class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                  >
                    {{ weeks[5]?.timeforshow || "" }}
                  </p>
                  <div class="absolute bottom-0 left-0 p-6">
                    <h2 class="text-xl font-semibold 5 text-white title-outline2">
                      {{ weeks[5]?.title || "" }}
                    </h2>
                    <p class="text-base leading-4 text-white mt-2 title-outline2">
                      {{ weeks[0]?.outline || "" }}
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      @click.prevent="showDetail(weeks[5])"
                    >
                      <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg
                        class="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  :src="weeks[5]?.image"
                  class="w-full content-block-img"
                  @click.prevent="showDetail(weeks[5])"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- list-section -->
    <div
      class="container mx-auto 2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto"
    >
      <h1
        class="heading-line text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50 my-10"
        style="margin: 0 0 5px"
      >
        <span>Popular News</span>
      </h1>
      <div class="news-content">
        <div
          class="main-content"
          v-for="(item, i) in popular.slice(0, 4)"
          :key="`news${i}`"
        >
          <div
            class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 mx-3"
          >
            <div class="news-img cursor-pointer" @click.prevent="showDetail(item)">
              <img class="rounded-t-lg" :src="item.image" :alt="item.title" />
            </div>
            <div class="p-5">
              <a href="#" @click.prevent="showDetail(item)">
                <h5
                  class="text-gray-900 font-bold text-xl tracking-tight mb-2 title-outline"
                  :title="item.title"
                >
                  {{ item.title || "" }}
                </h5>
              </a>
              <div class="wrapper-outline">
                <p class="content-outline">
                  {{ item.outline || "" }}
                </p>
              </div>
              <div class="flex justify-end mt-2">
                <a
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mr-1"
                  href="#"
                  @click.prevent="showDetail(item)"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref, defineComponent, onMounted } from "vue";
import { getCustomerArticle } from "Service/apis.js";
import { useToast } from "vue-toastification";
import dayjs from "dayjs";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  props: {},
  setup(props, { emit }) {
    const emitter = inject("emitter");
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();
    const offset = ref(0);
    const rows = ref(10);
    const totalItemsCount = ref(1);
    const items = ref([]);
    const popular = ref([]);
    const weeks = ref([]);
    const getData = async () => {
      try {
        // const page = +offset.value / +rows.value + +1;
        // const skip = (page - 1) * rows.value;
        // const top = rows.value;

        const res1 = await getCustomerArticle(`?page=1`);
        const res2 = await getCustomerArticle(`?page=2`);

        let arr = [...res1.data?.articles, ...res2.data?.articles];
        arr = arr.map((s) => {
          // s.timeforshow = dayjs(new Date(+s.create_at)).format("YYYY/MM/DD HH:mm:ss");

          s.timeforshow =
            s.category == "Weeks"
              ? dayjs(new Date()).subtract(8, "hour").format("D MMMM, YYYY")
              : dayjs(new Date(+s.create_at)).format("D MMMM, YYYY");
          return s;
        });
        popular.value = arr.filter((s) => s.category == "Popular");
        weeks.value = arr.filter((s) => s.category == "Weeks");
        // items.value = [...arr];
        // totalItemsCount.value = +res.data?.pagination?.total_pages * 10;
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };

    const showDetail = (item) => {
      window.scrollTo({
        top: 0,
        left: 0,
        // behavior: "smooth",
      });
      router.push({
        name: "newsdetail",
        params: { newsId: item.id },
      });
    };

    onMounted(async () => {
      emitter.emit("toggleLoader");
      await getData();
      emitter.emit("toggleLoader");
    });
    return {
      offset,
      rows,
      totalItemsCount,
      items,
      getData,
      showDetail,
      popular,
      weeks,
    };
  },
});
</script>

<style lang="scss" scoped>
.news-content {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media (max-width: 575px) {
  .news-content {
    grid-template-columns: 1fr;
  }
}

.bg-section {
  height: 437px;
  margin-bottom: 100px;
}

.bg-setting-local {
  padding: 200px 0 120px 0;
  background: url("https://images.unsplash.com/photo-1656433031375-5042f5afe894?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
  background-position: 50% 65%;
  background-size: cover;
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

.title-outline {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.title-outline2 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.wrapper-outline {
  .content-outline {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
.news-img {
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
}
.content-block {
  height: 324px;
  overflow: hidden;
  .content-block-img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}
.content-block2 {
  height: 590px;
  overflow: hidden;
}
</style>
