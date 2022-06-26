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
              Payment
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
          <div class="-mx-3 md:flex items-start">
            <div class="px-3 md:w-7/12 lg:pr-10">
              <div
                class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6"
              >
                <div class="w-full flex items-center">
                  <div
                    class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                      alt=""
                    />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-semibold uppercase text-gray-600">
                      Ray Ban Sunglasses.
                    </h6>
                    <p class="text-gray-400">x 1</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-600 text-xl">$210</span
                    ><span class="font-semibold text-gray-600 text-sm"
                      >.00</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-6 pb-6 border-b border-gray-200">
                <div class="-mx-2 flex items-end justify-end">
                  <div class="flex-grow px-2 lg:max-w-xs">
                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1"
                      >Discount code</label
                    >
                    <div>
                      <input
                        class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="XXXXXX"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="px-2">
                    <button
                      class="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold"
                    >
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                <div class="w-full flex mb-3 items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Subtotal</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">$190.91</span>
                  </div>
                </div>
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Taxes (GST)</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">$19.09</span>
                  </div>
                </div>
              </div>
              <div
                class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl"
              >
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Total</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold text-gray-400 text-sm">AUD</span>
                    <span class="font-semibold">$210.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 md:w-5/12">
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex mb-3 items-center">
                  <div class="w-32">
                    <span class="text-gray-600 font-semibold">Contact</span>
                  </div>
                  <div class="flex-grow pl-3">
                    <span>Scott Windon</span>
                  </div>
                </div>
                <div class="w-full flex items-center">
                  <div class="w-32">
                    <span class="text-gray-600 font-semibold"
                      >Billing Address</span
                    >
                  </div>
                  <div class="flex-grow pl-3">
                    <span>123 George Street, Sydney, NSW 2000 Australia</span>
                  </div>
                </div>
              </div>
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6"
              >
                <div class="w-full p-3 border-b border-gray-200">
                  <div class="mb-5">
                    <label for="type1" class="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-indigo-500"
                        name="type"
                        id="type1"
                        checked
                      />
                      <img
                        src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                        class="h-6 ml-3"
                      />
                    </label>
                  </div>
                  <div>
                    <div class="mb-3">
                      <label
                        class="text-gray-600 font-semibold text-sm mb-2 ml-1"
                        >Name on card</label
                      >
                      <div>
                        <input
                          class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="John Smith"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label
                        class="text-gray-600 font-semibold text-sm mb-2 ml-1"
                        >Card number</label
                      >
                      <div>
                        <input
                          class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="mb-3 -mx-2 flex items-end">
                      <div class="px-2 w-1/4">
                        <label
                          class="text-gray-600 font-semibold text-sm mb-2 ml-1"
                          >Expiration date</label
                        >
                        <div>
                          <select
                            class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                          >
                            <option value="01">01 - January</option>
                            <option value="02">02 - February</option>
                            <option value="03">03 - March</option>
                            <option value="04">04 - April</option>
                            <option value="05">05 - May</option>
                            <option value="06">06 - June</option>
                            <option value="07">07 - July</option>
                            <option value="08">08 - August</option>
                            <option value="09">09 - September</option>
                            <option value="10">10 - October</option>
                            <option value="11">11 - November</option>
                            <option value="12">12 - December</option>
                          </select>
                        </div>
                      </div>
                      <div class="px-2 w-1/4">
                        <select
                          class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                        >
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                        </select>
                      </div>
                      <div class="px-2 w-1/4">
                        <label
                          class="text-gray-600 font-semibold text-sm mb-2 ml-1"
                          >Security code</label
                        >
                        <div>
                          <input
                            class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="000"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-3">
                  <label for="type2" class="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-indigo-500"
                      name="type"
                      id="type2"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                      width="80"
                      class="ml-3"
                    />
                  </label>
                </div>
              </div>
              <div>
                <button
                  class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"
                >
                  <i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
                </button>
              </div>
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
  postCustomerOrder,
  getCustomerSingleOrder,
} from "Service/apis.js";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";

export default defineComponent({
  props: {},
  setup(props, { emit }) {
    // emit("update:modelValue", _newValues);
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
    const route = useRoute();
    const toast = useToast();
    const store = useStore();

    //data
    const order = ref({});
    const itemsTotal = ref("");
    const itemsFinalTotal = ref("");
    const itemsDiscount = ref("");

    const getData = async () => {
      try {
        const dataKeyData = sessionStorage.getItem("ordnow");
        const orderId = route?.params?.datakey || dataKeyData;
        // if (!route?.params?.datakey && !dataKeyData) {
        //   toast.error(`There's no order!`, {
        //     timeout: 2000,
        //     hideProgressBar: true,
        //   });
        //   router.push("/");
        //   return;
        // }
        const res = await getCustomerSingleOrder(orderId);
        order.value = { ...res.data?.order };

        console.log("order", order.value, res.data.order);
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };

    onMounted(async () => {
      await getData();
    });

    return {
      stepItems,
      order,
      itemsTotal,
      itemsFinalTotal,
      itemsDiscount,
      getData,
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
</style>
