<template>
  <!-- component -->
  <main class="font-mono bg-gray-400 main-section-thanks">
    <!-- Container -->
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex flex-wrap">
          <!-- Col -->
          <div
            class="w-full h-60 lg:h-auto bg-gray-400 lg:w-1/2 bg-cover rounded-l-lg"
            style="
              background-image: url('https://images.unsplash.com/photo-1565718253569-3156836e2ec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');
              background-position: 0% 11%;
            "
          ></div>
          <!-- Col -->
          <div
            class="w-full mx-auto border border-gray-200 text-gray-800 font-light lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none"
            style="height: 360px"
            v-if="hasData"
          >
            <div class="w-full flex mb-3 items-center">
              <div class="w-full">
                <span class="text-gray-600 font-semibold text-2xl">Your Receipt</span>
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
          <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none" v-else>
            <div class="px-8 mb-4 text-center">
              <h3 class="pt-4 mb-2 text-2xl">Forgot Your Order?</h3>
              <p class="mb-4 text-sm text-gray-700">
                We get it, stuff happens. Just enter your email address below and we'll
                send you a link to tell you!
              </p>
            </div>
            <form class="px-8 pt-6 pb-2 mb-2 bg-white rounded">
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter Email Address..."
                />
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="otherplace">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  @click="redirectPage('')"
                >
                  Home
                </button>
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  @click="redirectPage('productslist')"
                >
                  Shop
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
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
    const hasData = ref(false);

    const getData = async () => {
      try {
        const orderId = route?.params?.datakey || "";

        if (!orderId) {
          hasData.value = false;
          return;
        }
        emitter.emit("toggleLoader");
        const res = await getCustomerSingleOrder(orderId);
        emitter.emit("toggleLoader");
        hasData.value = true;
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

    const redirectPage = (place) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      router.push(`/${place}`);
    };

    onMounted(async () => {
      hasData.value = false;
      await getData();
    });

    return {
      hasData,

      order,
      itemsTotal,
      itemsFinalTotal,
      itemsDiscount,
      getData,
      user,

      myForm,
      redirectPage,
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

::v-deep(.p-disabled) {
  background-color: #ffffff;
}
.cart-content {
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 7px;
}

.main-section-thanks {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
}

.otherplace {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
}
</style>
