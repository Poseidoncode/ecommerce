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
              About
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

    <section class="text-gray-600 body-font">
      <div class="container pt-16 mx-auto flex px-5 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            We’re Listening
          </h1>
          <p class="mb-8 leading-relaxed">
            We’re here to help you find and buy the perfect luxury watch that you’ve been
            looking for. We do our part by purchasing luxury watches directly from all
            around the world to provide you with the lowest cost, but still best quality
            of watches for all of our customers.
          </p>
        </div>
      </div>
    </section>

    <div class="py-16 bg-white">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
            <!-- <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            /> -->
            <img
              class="rounded-lg"
              src="https://images.unsplash.com/photo-1519153017650-55aad829d4e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              Finest Authentic Products
            </h2>
            <p class="mt-6 text-gray-600">
              Vigilero are authorised dealers of every single product on all of our sites,
              which means you can be assured that every item is a genuine, authentic
              product direct from the manufacturer, and will be sold with the same
              relevant warranties, booklets and packaging as if purchasing from the high
              street.
            </p>
            <p class="mt-4 text-gray-600">
              All of our watch ranges have been carefully selected from our experienced
              buying team, meaning that every category has the most beautiful, relevant
              and respected timepieces available in the world.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div
            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Man using a computer"
            />
          </div>

          <div class="lg:py-24">
            <h2 class="text-3xl font-bold sm:text-4xl">Premier Customer Service</h2>

            <p class="mt-4 text-gray-600">
              One of the points that make Vigilero unique in the world of on-line trading
              is our commitment to providing the best shopping experience, combined with a
              level of customer service and support that is unrivalled.Unlike many other
              online companies, our customer service department is employed directly by T
              H Baker, and not outsourced.
            </p>

            <div
              class="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-blue-600 active:text-blue-500 focus:outline-none focus:ring cursor-pointer"
              @click.prevent="showDetail"
            >
              <span class="text-sm font-medium"> Shop </span>

              <svg
                class="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26"
    >
      <div class="relative">
        <div
          class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
            <h4
              class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9"
            >
              THE Vigilero Story
            </h4>
            <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
              In the early 1960s, Vigilero purchased a watch assembly factory. Here, in
              the heart of the Swiss Jura mountains, high-quality timepieces were produced
              for several name brands of watches, which carried their private label
              signatures on dial, case, and movement.
            </p>
            <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
              In just seven years the company has already had a massive impact on the
              high-end watch market..
            </p>
            <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span
                    class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 dark:text-blue-500 drark:bg-transparent"
                  >
                    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span
                    class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"
                  >
                    High Precision
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span
                    class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 dark:text-blue-500 drark:bg-transparent"
                  >
                    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span
                    class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"
                  >
                    Aesthetic
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span
                    class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 dark:text-blue-500 drark:bg-transparent"
                  >
                    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span
                    class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"
                  >
                    24/24 support
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span
                    class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 dark:text-blue-500 drark:bg-transparent"
                  >
                    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span
                    class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200"
                  >
                    Luxury
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
            <div class="relative space-y-4">
              <div class="flex items-end justify-center lg:justify-start space-x-4">
                <img
                  class="rounded-lg shadow-lg w-32 md:w-56"
                  width="200"
                  src="https://images.unsplash.com/photo-1596574556890-40f0563f2bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80"
                  alt="1"
                />
                <img
                  class="rounded-lg shadow-lg w-40 md:w-64"
                  width="260"
                  src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                  alt="2"
                />
              </div>
              <div
                class="flex items-start justify-center lg:justify-start space-x-4 ml-12"
              >
                <img
                  class="rounded-lg shadow-lg w-24 md:w-40"
                  width="170"
                  src="https://images.unsplash.com/photo-1629581678313-36cf745a9af9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                  alt="3"
                />
                <img
                  class="rounded-lg shadow-lg w-32 md:w-56"
                  width="200"
                  src="https://images.unsplash.com/photo-1603394151492-5e9b974b090b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { inject, ref, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  props: {
    // specColum: {
    //   type: String,
    //   default: "",
    // },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const showDetail = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        // behavior: "smooth",
      });
      router.push({
        name: "productslist",
      });
    };
    return { showDetail };
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
