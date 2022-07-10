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
            <div class="px-3 md:w-8/12">
              <div
                class="w-full mx-auto rounded-lg bg-white p-3 text-gray-800 font-light mb-3"
              >
                <div class="w-full flex items-center">
                  <div>
                    <span class="text-gray-600 font-semibold text-2xl"
                      >Payment Details</span
                    >
                  </div>
                </div>
              </div>

              <v-form
                class="contact-form-section w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light p-3 rounded-b-none"
                v-slot="{ errors, values, validate }"
                @submit="onSubmit(errors)"
              >
                <div class="mb-5">
                  <label for="type1" class="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-blue-500"
                      name="type"
                      id="type1"
                      value="visa"
                      v-model="payType"
                    />
                    <img src="/assets/visapicture.png" class="h-6 ml-3" />
                  </label>
                </div>
                <main v-if="payType == 'visa'">
                  <div>
                    <label
                      class="form-label text-gray-600 font-semibold text-sm mb-2 ml-1"
                      >Name on card
                      <v-field
                        name="Name"
                        type="name"
                        class="form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                        :class="{
                          'is-invalid': errors['Name'],
                          'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                            'Name'
                          ],
                        }"
                        placeholder="Please enter Name"
                        rules="required"
                        v-model="user.name"
                      ></v-field>
                    </label>
                    <error-message name="Name" class="invalid-feedback"></error-message>
                  </div>

                  <div>
                    <label
                      class="form-label text-gray-600 font-semibold text-sm mb-2 ml-1"
                      >Card number
                      <v-field
                        name="Card number"
                        type="name"
                        class="form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                        :class="{
                          'is-invalid': errors['Card number'],
                          'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                            'Card number'
                          ],
                        }"
                        placeholder="0000 0000 0000 0000"
                        rules="numeric|min:16|max:16|required"
                        v-model="user.cardnumber"
                      ></v-field>
                    </label>
                    <error-message
                      name="Card number"
                      class="invalid-feedback"
                    ></error-message>
                  </div>

                  <div class="mb-3 -mx-2 flex items-end">
                    <div class="px-2 w-1/4">
                      <label class="text-gray-600 font-semibold text-sm mb-2 ml-1"
                        >Expiration date</label
                      >
                      <div>
                        <select
                          class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
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
                        class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                      >
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                      </select>
                    </div>
                    <div class="px-2 w-1/4">
                      <label class="text-gray-600 font-semibold text-sm mb-2 ml-1"
                        >Security code</label
                      >
                      <div class="code-field">
                        <v-field
                          name="code"
                          type="name"
                          class="form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                          :class="{
                            'is-invalid': errors['code'],
                            'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                              'code'
                            ],
                          }"
                          placeholder="CVC"
                          rules="numeric|min:3|max:3|required"
                          v-model="user.securityCode"
                        ></v-field>
                        <error-message
                          name="code"
                          class="invalid-feedback spec-error"
                        ></error-message>
                      </div>
                    </div>
                  </div>
                </main>

                <button id="v-form-button" hidden>Submit</button>
              </v-form>

              <div
                class="w-full p-3 contact-form-section mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light border-t-0 rounded-t-none"
              >
                <label for="type2" class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    class="form-radio h-5 w-5 text-blue-500"
                    name="type"
                    id="type2"
                    value="paypal"
                    v-model="payType"
                  />
                  <img src="/assets/PayPal.svg" width="80" class="ml-3" />
                </label>
              </div>
            </div>
            <div class="px-3 md:w-4/12">
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex mb-3 items-center">
                  <div class="w-full">
                    <span class="text-gray-600 font-semibold text-2xl">Your Billing</span>
                  </div>
                </div>
                <div class="w-full cart-content">
                  <div>
                    <span class="text-gray-600 font-semibold">Contact</span>
                  </div>
                  <div class="flex-grow pl-3 text-gray-800">
                    <span>{{ order.user?.name }}</span>
                  </div>
                  <div>
                    <span class="text-gray-600 font-semibold">Phone</span>
                  </div>
                  <div class="flex-grow pl-3 text-gray-800">
                    <span>{{ order.user?.tel }}</span>
                  </div>
                  <div>
                    <span class="text-gray-600 font-semibold">Email</span>
                  </div>
                  <div class="flex-grow pl-3 text-gray-800">
                    <span>{{ order.user?.email }}</span>
                  </div>
                  <div>
                    <span class="text-gray-600 font-semibold">Billing Address</span>
                  </div>
                  <div class="flex-grow pl-3 text-gray-800">
                    <span>{{ order.user?.address }}</span>
                  </div>
                </div>
                <hr class="col-span-full my-3" />
                <div class="w-full cart-content">
                  <div>
                    <span class="text-gray-600 font-semibold">Final Total</span>
                  </div>
                  <div class="flex-grow pl-3 text-gray-800">
                    <span>${{ order?.total ? order?.total.toFixed(2) : "" }}</span>
                  </div>
                </div>
              </div>
              <div class="flex mt-3 justify-end">
                <button
                  class="font-bold uppercase text-base px-6 py-2 shadow outline-none focus:outline-none custom-search flex items-center mr-4"
                  type="button"
                  :style="`background: #001F60;color:#FFFFFF;border: 2px solid white;`"
                  @click="
                    cartOpen = false;
                    $router.push('/cart');
                  "
                >
                  Cancel Order
                </button>
                <button
                  class="font-bold uppercase text-base px-6 py-2 shadow outline-none focus:outline-none custom-search flex items-center"
                  type="button"
                  :style="`background: #f1b82b;color:#FFFFFF;border: 2px solid white;`"
                  @click="onSubmitClick"
                >
                  Pay<svg
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

              <!-- <div>
                <button
                  class="text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mb-1 text-sm float-right flex"
                  type="button"
                  style="background: #0d4a9e"
                  @click="onSubmitClick"
                >
                  <span>Pay</span>
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
                <button
                  class="text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mb-1 text-sm float-right flex mr-3"
                  type="button"
                  style="background: #f1b82b"
                  @click="
                    cartOpen = false;
                    $router.push('/cart');
                  "
                >
                

                  <span>Cancel Order</span>
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dialog
    class="custom-modal"
    v-model:visible="showConfirmMessage"
    style="width: 500px"
    :modal="true"
    :draggable="false"
  >
    <template #header>
      <h3>System Message</h3>
    </template>
    <div class="font-bold" style="font-size: 25px">
      You have not completed the payment, are you sure you want to leave this page?
    </div>
    <template #footer>
      <Button
        label="Confirm"
        @click="
          $router.push({
            name: wantToGo,
          })
        "
      />
      <Button
        label="Cancel"
        class="p-button-success"
        @click="
          showConfirmMessage = false;
          wantToGo = '';
        "
      />
    </template>
  </Dialog>
</template>

<script>
import { inject, ref, defineComponent, onMounted, watch, computed } from "vue";
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
import {
  getCustomerCart,
  putCustomerCart,
  deleteCustomerCart,
  postCustomerCoupon,
  postCustomerOrder,
  getCustomerSingleOrder,
  postCustomerPay,
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
        if (!route?.params?.datakey && !dataKeyData) {
          toast.error(`There's no order!`, {
            timeout: 2000,
            hideProgressBar: true,
          });
          router.push("/");
          return;
        }
        const res = await getCustomerSingleOrder(orderId);
        order.value = { ...res.data?.order };
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };

    const user = ref({});

    const myForm = ref(null);
    const onSubmitClick = () => {
      document.getElementById("v-form-button").click();
    };

    const onSubmit = async () => {
      try {
        const dataKeyData = sessionStorage.getItem("ordnow");
        const orderId = route?.params?.datakey || dataKeyData;
        // const res = await postCustomerPay(orderId);

        router.push({
          name: "thanksEnd",
          params: { datakey: `${orderId}` },
        });

        toast.info(`Payment Update Success`, {
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
    const wantToGo = ref("");
    const showConfirmMessage = ref(false);

    onBeforeRouteLeave(async (to, from, next) => {
      if (to.name == "thanksEnd") {
        sessionStorage.clear();
        next();
      } else if (!!wantToGo.value) {
        next();
      } else {
        wantToGo.value = to.name;
        showConfirmMessage.value = true;
        next(false);
      }
    });

    const payType = ref("visa");

    onMounted(async () => {
      await getData();
    });

    return {
      wantToGo,
      showConfirmMessage,

      stepItems,
      order,
      itemsTotal,
      itemsFinalTotal,
      itemsDiscount,
      getData,
      user,

      myForm,
      onSubmit,
      onSubmitClick,
      payType,
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
.cart-content {
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 7px;
}

.code-field {
  position: relative;
  .spec-error {
    position: absolute;
    left: 0;
    bottom: -22px;
    width: 360px;
  }
}
</style>
