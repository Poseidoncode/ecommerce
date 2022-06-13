<template>
  <div>
    <section></section>
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
    <div
      class="flex flex-col sm:flex-row sm:h-20 px-6 border-b border-gray-300 bg-white relative z-50"
    >
      <div
        class="w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex"
      >
        <div class="p-inputgroup">
          <InputText placeholder="Keyword" />
          <Button icon="pi pi-search" class="p-button-warning" />
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col lg:flex-row lg:px-6">
      <div class="w-full lg:w-56 relative">
        <div
          class="py-3 bg-white w-full flex items-center justify-center lg:hidden cursor-pointer font-bold"
        >
          Change Filters
          <svg
            class="h-8 w-8 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
        </div>

        <div class="lg:sticky lg:top-96">
          <details open class="overflow-hidden border border-gray-200 rounded">
            <summary
              class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"
            >
              <span class="text-sm font-medium"> Toggle Filters </span>

              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>

            <aside class="border-t border-gray-200 lg:border-t-0">
              <fieldset>
                <legend
                  class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
                >
                  Type
                </legend>

                <div class="px-5 py-6 space-y-2">
                  <div class="flex items-center">
                    <input
                      id="toy"
                      type="checkbox"
                      name="type[toy]"
                      class="w-5 h-5 border-gray-300 rounded"
                    />

                    <label for="toy" class="ml-3 text-sm font-medium">
                      Toy
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input
                      id="game"
                      type="checkbox"
                      name="type[game]"
                      class="w-5 h-5 border-gray-300 rounded"
                    />

                    <label for="game" class="ml-3 text-sm font-medium">
                      Game
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input
                      id="outdoor"
                      type="checkbox"
                      name="type[outdoor]"
                      class="w-5 h-5 border-gray-300 rounded"
                    />

                    <label for="outdoor" class="ml-3 text-sm font-medium">
                      Outdoor
                    </label>
                  </div>

                  <div class="pt-2">
                    <button
                      type="button"
                      class="text-xs text-gray-500 underline"
                    >
                      Reset Type
                    </button>
                  </div>
                </div>
              </fieldset>

              <div>
                <fieldset>
                  <legend
                    class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
                  >
                    Age
                  </legend>

                  <div class="px-5 py-6 space-y-2">
                    <div class="flex items-center">
                      <input
                        id="3+"
                        type="checkbox"
                        name="age[3+]"
                        class="w-5 h-5 border-gray-300 rounded"
                      />

                      <label for="3+" class="ml-3 text-sm font-medium">
                        3+
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="8+"
                        type="checkbox"
                        name="age[8+]"
                        class="w-5 h-5 border-gray-300 rounded"
                      />

                      <label for="8+" class="ml-3 text-sm font-medium">
                        8+
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="12+"
                        type="checkbox"
                        name="age[12+]"
                        class="w-5 h-5 border-gray-300 rounded"
                      />

                      <label for="12+" class="ml-3 text-sm font-medium">
                        12+
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="16+"
                        type="checkbox"
                        name="age[16+]"
                        class="w-5 h-5 border-gray-300 rounded"
                      />

                      <label for="16+" class="ml-3 text-sm font-medium">
                        16+
                      </label>
                    </div>

                    <div class="pt-2">
                      <button
                        type="button"
                        class="text-xs text-gray-500 underline"
                      >
                        Reset Age
                      </button>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div
                class="flex justify-between px-5 py-3 border-t border-gray-200"
              >
                <button
                  name="reset"
                  type="button"
                  class="text-xs font-medium text-gray-600 underline rounded"
                >
                  Reset All
                </button>

                <button
                  name="commit"
                  type="button"
                  class="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
                >
                  Apply Filters
                </button>
              </div>
            </aside>
          </details>
        </div>
      </div>
      <div class="flex-1 lg:pl-12 py-6 px-6 lg:px-0">
        <div class="mt-12">
          <h1 class="text-3xl font-bold">Recommended For You</h1>
          <div
            class="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"
          >
            <a
              href="#"
              v-for="(item, idx) in items"
              :key="`content${idx}`"
              @click.prevent="showDetail(item)"
              class="product-item"
            >
              <div
                class="mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease w-72 max-w-full rounded-sm bg-white product-item-main"
              >
                <!-- <div class="w-full h-48 flex justify-center mt-2 picture-section">
                  <img :src="`${item.imageUrl}`" />
                  <div class="image-word">123</div>
                </div> -->
                <div
                  class="h-56 w-full product-background"
                  :style="
                    item.imageUrl ? `background:url(${item.imageUrl})` : ''
                  "
                >
                  <button
                    class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn"
                    @click.stop.prevent="addToCart(item)"
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
                  <div class="item-hover">
                    <div class="item-hover-content">More</div>
                  </div>
                </div>
                <div class="p-6 pt-1">
                  <div class="text-sm">
                    <h4 class="font-bold text-base text-center">
                      {{ item.category || "" }}
                    </h4>
                    <h3 class="font-bold text-base text-center">
                      {{ item.title || "" }}
                    </h3>

                    <p class="font-bold text-base text-center">
                      <span class="theme-color8 mr-2"
                        >${{ item.origin_price }}
                      </span>
                      <span class="theme-color9 line-through">
                        ${{ item.price }}</span
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div class="product-item-hover">123</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch, inject } from "vue";
import {
  getCustomerProductAll,
  postCustomerCart,
  putCustomerCart,
} from "Service/apis.js";
import { useToast } from "vue-toastification";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  props: {},
  setup(props, { emit }) {
    // emit("update:modelValue", _newValues);
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();
    const items = ref([]);
    const emitter = inject("emitter");

    const getData = async () => {
      try {
        if (sessionStorage.getItem("needs")) {
          items.value = JSON.parse(sessionStorage.getItem("needs"));

          return;
        }

        const res = await getCustomerProductAll(``);
        let arr = [...res.data?.products];
        arr = arr.filter((s) => s.title != "測試的產品s");

        items.value = [...arr];
        sessionStorage.setItem("needs", JSON.stringify(arr));
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
        name: "productdetail",
        params: { productId: item.id },
      });
    };

    const addToCart = async (item) => {
      try {
        let obj = {};
        const isExist = store.state.cart.find((s) => s.product_id == item.id)
          ? true
          : false;

        if (isExist) {
          let productData = store.state.cart.find(
            (s) => s.product_id == item.id
          );

          obj = {
            product_id: productData.product_id,
            qty: +productData.qty + 1,
          };
          const res = await putCustomerCart({ data: obj }, productData.id);

          emitter.emit("getCartData");
        } else {
          obj = {
            product_id: item.id,
            qty: 1,
          };
          const res = await postCustomerCart({ data: obj });

          emitter.emit("getCartData");
        }

        toast.info(`商品加入購物車成功`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      } catch (e) {
        toast.error(`${e.response ? e.response.data : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };

    onMounted(async () => {
      await getData();
    });
    return { items, getData, showDetail, addToCart };
  },
});
</script>

<style lang="scss" scoped>
.product-item {
  .product-item-main {
    .picture-section {
      .image-word {
        display: none;
      }

      &:hover {
        position: relative;
        filter: brightness(70%);
        // transform: scale(1.2);

        .image-word {
          display: block;
          left: 50%;
          top: 70%;
          opacity: 1;
          transition: all 0.3s ease-out;
        }
      }
    }
  }

  .product-item-hover {
    display: none;
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
  .item-hover {
    .item-hover-content {
      opacity: 0;
    }
  }

  &:hover {
    background-size: 110%;
    .item-hover {
      display: block;
      width: 100% !important;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      position: relative;

      .item-hover-content {
        position: absolute;
        color: #fff;
        top: 50%;
        left: 50%;
        text-decoration: underline;
        transform: translate(-50%, -50%);
        font-size: 26px;
        opacity: 1;
      }
    }
  }
}
</style>
