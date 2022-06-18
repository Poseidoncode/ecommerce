<template>
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
              Favourite
            </h1>
            <h2
              class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2"
            >
              More time, Great Time
            </h2>
          </div>
          <div
            class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center"
          ></div>
        </div>
      </div>
    </section>

    <div class="flex justify-center" style="width: 99vw">
      <DataTable :value="items" responsiveLayout="scroll">
        <Column field="title" header="Name" style="color: #0a0d15"></Column>
        <Column field="category" header="Category"></Column>
        <Column header="Image">
          <template #body="slotProps">
            <div style="height: 120px">
              <img
                :src="slotProps.data.imageUrl"
                :alt="slotProps.data.imageUrl"
                class="product-image"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </div>
          </template>
        </Column>
        <Column field="price" header="Price">
          <template #body="slotProps"> ${{ slotProps.data.price }} </template>
        </Column>
        <Column header="Add To Cart">
          <template #body="slotProps">
            <div class="flex justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
                  stroke="#07245E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </template>
        </Column>

        <template #footer>
          In total there are {{ items ? items.length : 0 }} products.
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import { inject, ref, defineComponent, onMounted } from "vue";
import { getCustomerProductAll } from "Service/apis.js";
import { useToast } from "vue-toastification";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    // specColum: {
    //   type: String,
    //   default: "",
    // },
  },
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();
    const items = ref([]);
    // emit("update:modelValue", _newValues);
    const getData = async () => {
      let arr = [];

      if (sessionStorage.getItem("needs")) {
        arr = JSON.parse(sessionStorage.getItem("needs"));
      } else {
        try {
          const res = await getCustomerProductAll(``);
          arr = [...res.data?.products];
        } catch (e) {
          toast.error(`${e.response ? e.response.data : e}`, {
            timeout: 2000,
            hideProgressBar: true,
          });
        }
      }
      const favorArr = localStorage.getItem("favorData")
        ? JSON.parse(localStorage.getItem("favorData"))
        : [];

      arr = arr.filter((s) => s.title != "測試的產品s");
      arr = arr.filter((s) => favorArr.find((k) => k == s.id));

      items.value = [...arr];
    };

    onMounted(async () => {
      await getData();
    });
    return { items };
  },
});
</script>

<style lang="scss" scoped>
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
</style>
