<template>
  <!-- scrollToTop -->
  <div
    class="scroll-btn-item"
    :class="scrollIsZero ? 'btn-fade-out' : 'btn-fade-show'"
    @click.stop="scrollToTop"
    variant="primary"
    pill
  ></div>

  <!-- main -->
  <header class="header-content" :class="!scrollIsZero || isMobile ? 'addBg' : ''">
    <div class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="hidden w-full text-gray-600 md:flex md:items-center"></div>
        <div
          class="w-full text-gray-700 md:text-center text-2xl font-semibold flex justify-center"
        >
          <!-- Brand -->
          <img
            class="logo mr-2 logo1 cursor-pointer"
            style="height: 78px"
            src="/assets/brand8.png"
            :class="!scrollIsZero || isMobile ? 'addLogo' : ''"
            @click="$router.push('/')"
          />
          <img
            class="logo mr-2 logo2 cursor-pointer"
            style="height: 78px"
            src="/assets/brand7.png"
            :class="!scrollIsZero || isMobile ? 'addLogo' : ''"
            @click="$router.push('/')"
          />
        </div>

        <div class="flex items-center justify-end w-full">
          <section class="icon-section">
            <button
              @click="$router.push('/login')"
              class="focus:outline-none"
              :class="!scrollIsZero || isMobile ? 'theme-color3' : 'theme-color1'"
            >
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            <button
              @click="redirctPage('favourite')"
              class="focus:outline-none"
              :class="!scrollIsZero || isMobile ? 'theme-color3' : 'theme-color1'"
              v-if="!favoriteTotal"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
              @click="redirctPage('favourite')"
              class="focus:outline-none"
              :class="!scrollIsZero || isMobile ? 'theme-color3' : 'theme-color1'"
              v-badge.warning="`${favoriteTotal}`"
              v-if="!!favoriteTotal"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            <button
              @click="openCart"
              class="focus:outline-none"
              :class="!scrollIsZero || isMobile ? 'theme-color3' : 'theme-color1'"
              v-badge.warning="`${items.length}`"
              v-if="items.length"
            >
              <svg
                class="h-6 w-6"
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
            <button
              @click="openCart"
              class="focus:outline-none"
              :class="!scrollIsZero || isMobile ? 'theme-color3' : 'theme-color1'"
              v-if="!items.length"
            >
              <svg
                class="h-6 w-6"
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
          </section>

          <div class="flex sm:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <nav
        :class="isOpen ? '' : 'hidden'"
        class="sm:flex sm:justify-center sm:items-center mt-4"
      >
        <div class="flex flex-col sm:flex-row">
          <a
            @click.prevent="redirctPage('home')"
            class="mt-3 nav-color hover:underline sm:mx-3 sm:mt-0"
            href="#"
            >Home</a
          >
          <a
            class="mt-3 nav-color hover:underline sm:mx-3 sm:mt-0"
            href="#"
            @click.prevent="redirctPage('productslist')"
            >Shop</a
          >
          <a
            class="mt-3 nav-color hover:underline sm:mx-3 sm:mt-0"
            href="#"
            @click.prevent="redirctPage('contact')"
            >Contact</a
          >
          <a
            class="mt-3 nav-color hover:underline sm:mx-3 sm:mt-0"
            @click.prevent="redirctPage('faq')"
            href="#"
            >FAQ</a
          >
          <a
            class="mt-3 nav-color hover:underline sm:mx-3 sm:mt-0"
            href="#"
            @click.prevent="redirctPage('news')"
            >News</a
          >
          <a
            class="mt-3 nav-color hover:underline sm:mx-3 sm:mt-0"
            href="#"
            @click.prevent="redirctPage('about')"
            >About</a
          >
        </div>
      </nav>
    </div>
  </header>

  <!-- cart -->
  <div
    v-click-outside="outsideEvent"
    :class="cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'"
    class="fixed right-0 top-0 max-w-sm w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300"
    style="z-index: 100"
  >
    <div class="flex items-center justify-between">
      <h3 class="text-md font-medium text-gray-700">
        Shopping bag ({{ items.length }} items)
      </h3>
      <button @click="cartOpen = !cartOpen" class="text-gray-600 focus:outline-none">
        <svg
          class="h-5 w-5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <hr class="my-3" />

    <div class="product-content" v-for="(itemData, i) in items" :key="`itemData${i}`">
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
    <div class="text-right theme-color-main" style="margin-right: 2px">
      Total: ${{ itemsTotal ? itemsTotal.toFixed(2) : "" }}
    </div>
    <!-- <div class="mt-8">
      <form class="flex items-center justify-center">
        <input
          class="form-input w-48"
          type="text"
          placeholder="Add promocode"
        />
        <button
          class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        >
          <span>Apply</span>
        </button>
      </form>
    </div> -->
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
        @click="redirectPage('checkout')"
      >
        checkout<svg
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
      <!-- <div
        class="cursor-pointer flex items-center justify-center px-3 py-2 bg-yellow-400 text-white text-sm uppercase font-medium rounded hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 mt-3"
        @click="redirectPage('cart')"
      >
        <span>Cart</span>
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
      </div>
      <div
        class="cursor-pointer flex items-center justify-center mt-2 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
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
      </div> -->
    </div>
  </div>
</template>
<script>
import { inject, ref, defineComponent, onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getCustomerCart,
  postCustomerCart,
  putCustomerCart,
  deleteCustomerCart,
} from "Service/apis.js";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const emitter = inject("emitter"); // Inject `emitter`
    emitter.on("getCartData", (value) => {
      getData();
    });
    emitter.on("getFavorData", (value) => {
      getFavoriteData();
    });
    const store = useStore();

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    const isOpen = ref(false);
    const cartOpen = ref(false);
    const scrollIsZero = ref(false);
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();

    const handleScroll = () => {
      //垂直位移量 + 可見螢幕高度 ≥ 網頁內文高度

      if (window.scrollY < 50) {
        scrollIsZero.value = true;
      } else {
        scrollIsZero.value = false;
      }
    };

    const redirctPage = (page = "home") => {
      isOpen.value = false;
      window.scrollTo({
        top: 0,
        left: 0,
        // behavior: "smooth",
      });
      const expr = page;
      switch (expr) {
        case "home":
          router.push({ name: "home" });
          break;
        case "productslist":
          router.push({ name: "productslist" });
          break;
        case "faq":
          router.push({ name: "faq" });
          break;
        case "news":
          router.push({ name: "news" });
          break;
        case "contact":
          router.push({ name: "contact" });
          break;
        case "about":
          router.push({ name: "about" });
          break;
        case "about":
          router.push({ name: "about" });
          break;
        case "favourite":
          router.push({ name: "favourite" });
          break;
        default:
          console.log(`Sorry, no data`);
      }
    };
    window.addEventListener("scroll", handleScroll, true);

    //data
    const items = ref([]);
    const itemsTotal = ref("");
    const getData = async () => {
      try {
        const res = await getCustomerCart();
        items.value = [...res.data?.data?.carts];
        itemsTotal.value = res.data?.data?.final_total;

        store.commit("m_setCartData", items.value);
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
    };

    const favoriteTotal = ref("");
    const getFavoriteData = () => {
      favoriteTotal.value = localStorage.getItem("favorData")
        ? JSON.parse(localStorage.getItem("favorData")).length
        : "";
    };

    const deleteData = async (item) => {
      try {
        const res = await deleteCustomerCart(item.id);
        await getData();
        toast.info(`DeleteSuccess`, {
          timeout: 3000,
          hideProgressBar: true,
        });
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 3000,
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

    const openCart = () => {
      setTimeout(() => {
        cartOpen.value = true;
      }, 0);
    };

    const outsideEvent = () => {
      cartOpen.value = false;
    };

    const isMobile = computed(() => {
      return +window?.outerWidth < 600;
    });

    const redirectPage = (place) => {
      window.scrollTo({
        top: 390,
        left: 0,
        behavior: "smooth",
      });
      cartOpen.value = false;
      router.push(`/${place}`);
    };

    onMounted(async () => {
      if (window.scrollY < 50) {
        scrollIsZero.value = true;
      } else {
        scrollIsZero.value = false;
      }

      await getData();
      getFavoriteData();
    });

    return {
      isMobile,
      isOpen,
      cartOpen,
      openCart,
      handleScroll,
      scrollIsZero,
      redirctPage,
      scrollToTop,

      items,
      itemsTotal,
      getData,
      deleteData,
      putData,

      outsideEvent,

      favoriteTotal,
      getFavoriteData,
      redirectPage,
    };
  },
});
</script>
<style scoped lang="scss"></style>
<style lang="scss">
.header-content {
  position: fixed;
  top: 0;
  width: 100%;
  transition: all 0.6s;
  z-index: 2;
}

.logo {
  transition: all 0.6s;
}

.logo2 {
  display: none;
}

.logo1.addLogo {
  display: none;
}

.logo2.addLogo {
  display: block;
}

.addBg {
  background-color: rgb(255 255 255 / 98%);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  // border-bottom: 1px solid #2d3858;
  box-shadow: 0 0 10px rgb(4 7 14 / 80%);
  z-index: 99;
  opacity: 0.96;

  > div.container {
    > nav {
      a {
        // color: #4b5562 !important;
        color: #07193f !important;
        font-weight: 600;
      }
    }
  }
}

.nav-color {
  color: #e7e9f0;
}

.scroll-btn-item {
  position: fixed;
  // bottom: 150px;
  // right: 50px;
  bottom: 10vh;
  right: 4.5vw;
  border-bottom: 0.25rem solid;
  border-right: 0.25rem solid;
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  color: #09235f;
  transform: rotate(-135deg);
  cursor: pointer;
  z-index: 99999;
}

.btn-fade-out {
  opacity: 0;
}

.btn-fade-show {
  transition: all 0.4s ease-in-out;
  opacity: 1;
}

.product-content {
  display: grid;
  grid-template-columns: 75px 1fr 60px;
  grid-column-gap: 3px;
  .product-content-img {
    height: 92px;
    // border: 1px solid gray;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .product-content-price {
    text-align: end;
    margin-right: 2px;
  }
  .product-content-hr {
    grid-column: 1 / -1;
    margin: 16px 0 16px;
  }
}

.icon-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 17px;

  margin-right: 17px;
}
</style>
