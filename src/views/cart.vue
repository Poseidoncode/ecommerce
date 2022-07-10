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
              Cart
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
    <!-- component -->
    <div class="card">
      <div class="card-main">
        <Steps :model="stepItems" :readonly="true" />
      </div>
    </div>

    <div class="min-w-screen min-h-screen bg-gray-50 py-5">
      <div
        class="bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800 main-checkout-content"
      >
        <div class="w-full">
          <div class="-mx-3 md:flex justify-center items-start">
            <div class="px-3 md:w-8/12 lg:pr-10">
              <div
                class="product-content"
                v-for="(itemData, i) in items"
                :key="`itemData${i}`"
              >
                <div class="product-content-img">
                  <img :src="itemData.product.imageUrl" alt="" />
                </div>

                <div>
                  <h3 class="text-sm text-gray-600">
                    {{ itemData.product.title || "" }}
                  </h3>
                  <div class="flex items-center mt-2">
                    <!-- {{ itemData.qty }} -->
                    <div class="mr-2">
                      <select
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-model="itemData.qty"
                        @change="putData(itemData)"
                      >
                        <option :value="1">1</option>
                        <option :value="2">2</option>
                        <option :value="3">3</option>
                        <option :value="4">4</option>
                        <option :value="5">5</option>
                        <option :value="6">6</option>
                        <option :value="7">7</option>
                        <option :value="8">8</option>
                        <option :value="9">9</option>
                        <option :value="10">10</option>
                      </select>
                    </div>

                    <button
                      class="text-gray-500 focus:outline-none focus:text-gray-600"
                      v-tooltip.top="'delete'"
                      @click.prevent="deleteData(itemData)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="text-gray-600 product-content-price">
                  ${{ itemData.product.price || "" }}
                </div>
                <hr class="product-content-hr" />
              </div>

              <div class="mb-6 pb-6 border-b border-gray-200">
                <div class="-mx-2 flex items-end justify-end">
                  <div class="flex-grow px-2 lg:max-w-xs">
                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1"
                      >Discount code</label
                    >
                    <div>
                      <input
                        class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="XXXXXX"
                        type="text"
                        v-model="couponCode"
                      />
                    </div>
                  </div>
                  <div class="px-2">
                    <button
                      class="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold"
                      @click="applyCouponCode(couponCode)"
                    >
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                <div class="w-full flex mb-2 items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Total</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold"
                      >${{ itemsTotal ? itemsTotal.toFixed(2) : "" }}</span
                    >
                  </div>
                </div>
                <div class="w-full flex mb-2 items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Discount</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">
                      {{ itemsDiscount }}
                    </span>
                  </div>
                </div>
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Taxes (GST)</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">$00.00</span>
                  </div>
                </div>
              </div>
              <div
                class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl"
              >
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Final Total</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold text-gray-400 text-sm">USD</span>
                    <span class="font-semibold"
                      >${{ itemsFinalTotal ? itemsFinalTotal.toFixed(2) : "" }}</span
                    >
                  </div>
                </div>
              </div>
              <button
                class="text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mb-1 text-sm float-right flex"
                type="button"
                style="background: #0d4a9e"
                @click="redirectPage('checkout')"
              >
                <span>Chechout</span>
                <svg
                  class="h-5 w-5 mx-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref, defineComponent, onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getCustomerCart,
  putCustomerCart,
  deleteCustomerCart,
  postCustomerCoupon,
} from "Service/apis.js";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";

export default defineComponent({
  props: {},
  setup(props, { emit }) {
    const stepItems = ref([
      {
        label: "Cart",
        to: "/cart",
      },
      {
        label: "Checkout",
        to: "/checkout",
      },
      {
        label: "Payment",
        to: "/payment",
      },
    ]);
    const emitter = inject("emitter"); // Inject `emitter`
    const router = useRouter();
    const toast = useToast();
    const store = useStore();

    //data
    const items = ref([]);
    const itemsTotal = ref("");
    const itemsFinalTotal = ref("");
    const itemsDiscount = ref("");
    const getData = async () => {
      try {
        const res = await getCustomerCart();
        items.value = [...res.data?.data?.carts];
        itemsTotal.value = res.data?.data?.total;
        itemsFinalTotal.value = res.data?.data?.final_total;
        itemsDiscount.value = (
          +res.data?.data?.total.toFixed(2) - +res.data?.data?.final_total.toFixed(2)
        ).toFixed(2);

        store.commit("m_setCartData", items.value);
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };

    const deleteData = async (item) => {
      try {
        const res = await deleteCustomerCart(item.id);
        await getData();
        emitter.emit("getCartData");
        toast.info(`DeleteSuccess`, {
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

    const putData = async (item) => {
      try {
        const obj = {
          product_id: item.product_id,
          qty: +item.qty,
        };

        const res = await putCustomerCart({ data: obj }, item.id);
        await getData();
        emitter.emit("getCartData");
        toast.info(`Cart Update Success`, {
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

    const couponCode = ref("");
    const applyCouponCode = async (codeData = null) => {
      try {
        const obj = {
          code: codeData,
        };
        const res = await postCustomerCoupon({ data: obj });
        await getData();
        toast.info(`Coupon Apply successfully`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      } catch (e) {
        console.log("e", e.response, e.message);
        toast.error(`${e?.response.data?.message ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };

    const redirectPage = (place) => {
      window.scrollTo({
        top: 390,
        left: 0,
        behavior: "smooth",
      });

      router.push(`/${place}`);
    };

    onMounted(async () => {
      await getData();
    });

    return {
      redirectPage,
      stepItems,
      items,
      itemsTotal,
      itemsFinalTotal,
      itemsDiscount,
      getData,
      deleteData,
      putData,
      applyCouponCode,
      couponCode,
    };
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
.card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  .card-main {
    width: 90%;
    margin: 0 auto;
  }
}

.main-checkout-content {
  width: 90%;
  margin: 0 auto;
}

::v-deep(.p-disabled) {
  background-color: #ffffff;
}
.product-content-img {
  height: 92px;
  img {
    width: 100%;
    height: 100%;
    // -o-object-fit: contain;
    object-fit: contain;
  }
}
</style>
