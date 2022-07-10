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
              Checkout
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
                      >Billing Details</span
                    >
                  </div>
                </div>
              </div>

              <v-form
                class="contact-form-section w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6 p-3"
                v-slot="{ errors, values, validate }"
                @submit="onSubmit(errors)"
              >
                <div>
                  <label class="form-label text-gray-600 font-semibold text-sm mb-2 ml-1"
                    >Name
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

                <div class="mb-3">
                  <label class="form-label text-gray-600 font-semibold text-sm mb-2 ml-1"
                    >Email
                    <v-field
                      name="Email"
                      type="email"
                      class="form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                      :class="{
                        'is-invalid': errors['Email'],
                        'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                          'Email'
                        ],
                      }"
                      placeholder="Please enter  Email"
                      rules="email|required"
                      v-model="user.email"
                    >
                    </v-field>
                  </label>

                  <error-message name="Email" class="invalid-feedback"></error-message>
                </div>

                <div>
                  <label class="form-label text-gray-600 font-semibold text-sm mb-2 ml-1"
                    >Phone
                    <v-field
                      name="Phone"
                      type="phone"
                      class="form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                      :class="{
                        'is-invalid': errors['Phone'],
                        'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                          'Phone'
                        ],
                      }"
                      placeholder="Please enter  Phone"
                      rules="numeric|required"
                      v-model="user.phone"
                    ></v-field>
                  </label>
                  <error-message name="Phone" class="invalid-feedback"></error-message>
                </div>

                <div>
                  <label class="form-label text-gray-600 font-semibold text-sm mb-2 ml-1"
                    >Address
                    <v-field
                      name="Address"
                      type="Address"
                      class="form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                      :class="{
                        'is-invalid': errors['Address'],
                        'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                          'Address'
                        ],
                      }"
                      placeholder="Please enter Address"
                      rules="required"
                      v-model="user.address"
                    ></v-field>
                  </label>
                  <error-message name="Address" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-3" style="grid-column: 1 / -1">
                  <label class="form-label text-gray-600 font-semibold text-sm mb-2 ml-1"
                    >Message
                    <v-field
                      name="Message"
                      type="message"
                      class="form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                      :class="{
                        'is-invalid': errors['Message'],
                        'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                          'Message'
                        ],
                      }"
                      placeholder="Please enter  Message"
                      rules="required"
                      v-model="user.message"
                      as="textarea"
                      rows="10"
                    >
                    </v-field>
                  </label>

                  <error-message name="Message" class="invalid-feedback"></error-message>
                </div>

                <button id="v-form-button" hidden>Submit</button>
              </v-form>
            </div>
            <div class="px-3 md:w-4/12">
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex mb-3 items-center">
                  <div class="w-full">
                    <span class="text-gray-600 font-semibold text-2xl">Your Order</span>
                  </div>
                </div>
                <div class="w-full cart-content">
                  <div>
                    <span class="text-gray-600 font-semibold">ITEM</span>
                  </div>
                  <div>
                    <span class="text-gray-600 font-semibold">PRICE</span>
                  </div>
                </div>
                <div
                  class="w-full cart-content theme-color9"
                  v-for="(itemData, i) in items"
                  :key="`itemData${i}`"
                >
                  <div>
                    {{ itemData.product.title || "" }} x
                    {{ itemData.qty || "" }}
                  </div>
                  <div>${{ itemData.total ? itemData.total.toFixed(2) : "" }}</div>
                  <hr class="col-span-full my-3" />
                </div>
                <div class="w-full mb-2 cart-content">
                  <div>
                    <span class="text-gray-600">Total</span>
                  </div>
                  <div>
                    <span class="font-semibold"
                      >${{ itemsTotal ? itemsTotal.toFixed(2) : "" }}</span
                    >
                  </div>
                </div>
                <div class="w-full mb-2 cart-content">
                  <div>
                    <span class="text-gray-600">Discount</span>
                  </div>
                  <div>
                    <span class="font-semibold"> ${{ itemsDiscount }} </span>
                  </div>
                </div>
                <div class="w-full cart-content">
                  <div>
                    <span class="text-gray-600">Taxes (GST)</span>
                  </div>
                  <div>
                    <span class="font-semibold">$00.00</span>
                  </div>
                </div>
                <hr class="col-span-full my-3" />
                <div class="w-full cart-content">
                  <div>
                    <span class="text-gray-600">Final Total</span>
                  </div>
                  <div>
                    <span class="font-semibold"
                      >${{ itemsFinalTotal ? itemsFinalTotal.toFixed(2) : "" }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="flex mt-3 justify-end">
                <button
                  class="font-bold uppercase text-base px-6 py-2 shadow outline-none focus:outline-none custom-search flex items-center mr-4"
                  type="button"
                  :style="`background: #001F60;color:#FFFFFF;border: 2px solid white;`"
                  @click="redirectPage('cart')"
                >
                  Cart<svg
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
                  class="font-bold uppercase text-base px-6 py-2 shadow outline-none focus:outline-none custom-search flex items-center"
                  type="button"
                  :style="`background: #f1b82b;color:#FFFFFF;border: 2px solid white;`"
                  @click="onSubmitClick"
                >
                  Pay Now<svg
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
                  <span>Pay Now</span>
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
                  @click="redirectPage('cart')"
                >
                  <span style="transform: scaleX(-1)">
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
                  </span>

                  <span>Cart</span>
                </button>
              </div> -->
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

    const user = ref({});

    const myForm = ref(null);
    const onSubmitClick = () => {
      document.getElementById("v-form-button").click();
    };

    const onSubmit = async () => {
      try {
        const obj = {
          user: {
            name: user.value?.name,
            email: user.value?.email,
            tel: user.value?.phone,
            address: user.value?.address,
          },
          message: user.value?.message,
        };
        emitter.emit("toggleLoader");
        const res = await postCustomerOrder({ data: obj });
        emitter.emit("toggleLoader");

        emitter.emit("getCartData");
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        router.push({
          name: "payment",
          params: { datakey: `${res.data.orderId}` },
        });

        sessionStorage.setItem("ordnow", `${res.data.orderId}`);

        toast.info(`Order Update Success`, {
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
      user,

      myForm,
      onSubmit,
      onSubmitClick,
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
  grid-template-columns: 1fr 100px;
  grid-column-gap: 10px;
}
</style>
