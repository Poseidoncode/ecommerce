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
    <div class="news-content container mx-auto px-4">
      <div class="main-content" v-for="(item, i) in items" :key="`news${i}`">
        <div
          class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 mx-3"
        >
          <div class="news-img">
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
    <footer class="grid grid-flow-col auto-cols-max justify-center">
      <Paginator
        v-model:first="offset"
        v-model:rows="rows"
        :totalRecords="totalItemsCount"
      ></Paginator>
    </footer>
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
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();
    const offset = ref(0);
    const rows = ref(10);
    const totalItemsCount = ref(1);
    const items = ref([]);
    const getData = async () => {
      try {
        const page = +offset.value / +rows.value + +1;
        const skip = (page - 1) * rows.value;
        const top = rows.value;
        const res = await getCustomerArticle(`?page=${page}`);

        let arr = [...res.data?.articles];
        arr = arr.map((s) => {
          s.timeforshow = dayjs(new Date(+s.create_at)).format("YYYY/MM/DD HH:mm:ss");
          return s;
        });
        items.value = [...arr];
        totalItemsCount.value = +res.data?.pagination?.total_pages * 10;
      } catch (e) {
        toast.error(`${e.response ? e.response.data : e}`, {
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
      await getData();
    });
    return {
      offset,
      rows,
      totalItemsCount,
      items,
      getData,
      showDetail,
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
  background: url("https://images.unsplash.com/photo-1617317376997-8748e6862c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
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
</style>
