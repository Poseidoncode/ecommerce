<template>
  <div class="bg-white main-content">
    <section>
      <div class="text-white py-20 bg-setting">
        <div
          class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24"
        >
          <div
            class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8"
          >
            <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              Luxury
            </h1>
            <h2
              class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2"
            >
              Watches : The Timeless Infinity
            </h2>
            <p class="text-sm md:text-base text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your
              talent and win exciting prizes.
            </p>
            <a
              href="#"
              class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now</a
            >
          </div>
          <div
            class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center"
          ></div>
        </div>
      </div>
    </section>

    <main class="mb-8">
      <div class="container mx-auto px-6">
        <!-- featrue-word -->
        <div class="mb-6 featrue-word">
          <div class="featrue-word-content">
            <div>DISCOVER ALL BRANDS</div>
          </div>
          <div class="featrue-word-content">
            <div>CERTIFIED PRE-OWNED</div>
          </div>
          <div class="featrue-word-content">
            <div>SELL YOUR WATCH</div>
          </div>
          <div class="featrue-word-content">
            <div>CUSTOMER SERVICE</div>
          </div>
        </div>
        <div
          class="h-64 rounded-md overflow-hidden bg-cover bg-center"
          style="
            background-image: url('https://images.unsplash.com/photo-1641471979402-0d40f068e06f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80');
          "
        >
          <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-10 max-w-xl">
              <h2 class="text-2xl text-white font-semibold">High Precision</h2>
              <p class="mt-2 text-gray-400">
                The ultimate reference in luxury chronograph watches,
                high-precision timing innovations since 1860.
              </p>
              <button
                class="flex items-center mt-4 px-3 py-2 bg-blue-800 text-white text-sm uppercase font-medium rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                @click="goShop"
              >
                <span>Shop Now</span>
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
        <div class="md:flex mt-8 md:-mx-4">
          <div
            class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
            style="
              background-image: url('https://images.unsplash.com/photo-1600897425543-5369a38bd193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80');
            "
          >
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Luxury</h2>
                <p class="mt-2 text-gray-400">
                  Swiss luxury watch and clock manufacturer founded in 1839,
                  located in Canton of Geneva and the Vallée de Joux.
                </p>
                <button
                  class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                  @click="goShop"
                >
                  <span>Shop Now</span>
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
          <div
            class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
            style="
              background-image: url('https://images.unsplash.com/photo-1579172260981-30de4eabb80c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
            "
          >
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Aesthetic</h2>
                <p class="mt-2 text-gray-400">
                  Its ability to endure the challenges of time and embraces its
                  simple purpose and aesthetic appeal.
                </p>
                <button
                  class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                  @click="goShop"
                >
                  <span>Shop Now</span>
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
        <div class="mt-16">
          <h3 class="text-2xl font-medium text-center theme-color-main">
            Classic
          </h3>
          <div
            class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
          >
            <div
              class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              v-for="(itemCat, i) in itemsClassic.slice(0, 4)"
              :key="`itemCat${i}`"
            >
              <div
                class="h-56 w-full product-background"
                :style="
                  itemCat.imageUrl ? `background:url(${itemCat.imageUrl})` : ''
                "
              >
                <button
                  class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn"
                  @click.prevent="addToCart(itemCat)"
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
                <div class="itemCat-hover">
                  <div class="itemCat-hover-content">More</div>
                </div>
              </div>
              <div class="px-5 py-3 mt-2">
                <h3 class="uppercase text-center theme-color7">
                  {{ itemCat.title || "" }}
                </h3>
                <h4 class="text-black-500 mt-2 text-center theme-color7">
                  ${{ itemCat.price }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- coupon -->
      <section class="allcoupons" @click="copyCoupon">
        <div class="word-one">25% Off on All products at Vigilero Stores</div>
        <p class="word-two mb-8">
          Get an incredible 25% discount on all types of watches at Vigilero
          Store. Only for single use.
        </p>

        <div className="coupon-item">
          <div className="coupon-intro">
            <h4>Campaign: Super Month</h4>
            <ul>
              <li>Coupon Codes: SuperCampain</li>
              <li>Expires: 2022/12/25</li>
            </ul>
          </div>
          <div className="allcoupon-value">25% Off</div>
        </div>
      </section>

      <!-- <section class="text-gray-600 body-font">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path
              d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
            ></path>
          </svg>
          <p class="leading-relaxed text-lg">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware. Man bun next level coloring book skateboard
            four loko knausgaard. Kitsch keffiyeh master cleanse direct trade
            indigo juice before they sold out gentrify plaid gastropub normcore
            XOXO 90's pickled cindigo jean shorts. Slow-carb next level
            shoindigoitch ethical authentic, yr scenester sriracha forage
            franzen organic drinking vinegar.
          </p>
          <span
            class="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"
          ></span>
          <h2
            class="text-gray-900 font-medium title-font tracking-wider text-sm"
          >
            HOLDEN CAULFIELD
          </h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </section> -->
      <section class="bg-gray-100">
        <div
          class="px-4 py-16 mx-auto sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-24 max-w-[1340px]"
        >
          <div
            class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 gap-y-8 lg:items-center"
          >
            <div class="max-w-xl text-center sm:text-left">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                Don't just take our word for it...
                <br class="hidden sm:block lg:hidden" />
                Read reviews from our customers
              </h2>

              <p class="mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas veritatis illo placeat harum porro optio fugit a culpa
                sunt id!
              </p>

              <div class="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  class="p-3 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white prev-button"
                >
                  <svg
                    class="w-5 h-5 transform -rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  class="p-3 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white next-button"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="-mx-6 lg:col-span-2 lg:mx-0">
              <div class="swiper-container">
                <ul class="swiper-wrapper">
                  <li class="swiper-slide">
                    <blockquote
                      class="flex flex-col justify-between h-full p-12 bg-white"
                    >
                      <div>
                        <div class="flex gap-0.5 text-green-500">
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </div>

                        <div class="mt-4">
                          <p
                            class="text-2xl font-bold text-pink-600 sm:text-3xl"
                          >
                            Stayin' Alive
                          </p>

                          <p class="mt-4 leading-relaxed text-gray-500">
                            No, Rose, they are not breathing. And they have no
                            arms or legs … Where are they? You know what? If we
                            come across somebody with no arms or legs, do we
                            bother resuscitating them? I mean, what quality of
                            life do we have there?
                          </p>
                        </div>
                      </div>

                      <footer class="mt-8 text-sm text-gray-500">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </li>

                  <li class="swiper-slide">
                    <blockquote
                      class="flex flex-col justify-between h-full p-12 bg-white"
                    >
                      <div>
                        <div class="flex gap-0.5 text-green-500">
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </div>

                        <div class="mt-4">
                          <p
                            class="text-2xl font-bold text-pink-600 sm:text-3xl"
                          >
                            Stayin' Alive
                          </p>

                          <p class="mt-4 leading-relaxed text-gray-500">
                            No, Rose, they are not breathing. And they have no
                            arms or legs … Where are they? You know what? If we
                            come across somebody with no arms or legs, do we
                            bother resuscitating them? I mean, what quality of
                            life do we have there?
                          </p>
                        </div>
                      </div>

                      <footer class="mt-8 text-sm text-gray-500">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </li>

                  <li class="swiper-slide">
                    <blockquote
                      class="flex flex-col justify-between h-full p-12 bg-white"
                    >
                      <div>
                        <div class="flex gap-0.5 text-green-500">
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>

                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </div>

                        <div class="mt-4">
                          <p
                            class="text-2xl font-bold text-pink-600 sm:text-3xl"
                          >
                            Stayin' Alive
                          </p>

                          <p class="mt-4 leading-relaxed text-gray-500">
                            No, Rose, they are not breathing. And they have no
                            arms or legs … Where are they? You know what? If we
                            come across somebody with no arms or legs, do we
                            bother resuscitating them? I mean, what quality of
                            life do we have there?
                          </p>
                        </div>
                      </div>

                      <footer class="mt-8 text-sm text-gray-500">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex justify-center gap-4 mt-8 lg:hidden">
            <button
              aria-label="Previous slide"
              class="p-4 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white prev-button"
            >
              <svg
                class="w-5 h-5 transform -rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              class="p-4 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white next-button"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <swiper
        ref="{swiperRef}"
        :loop="true"
        :slidesPerView="1"
        :centeredSlides="true"
        :spaceBetween="30"
        :pagination="{
          type: 'fraction',
        }"
        :autoplay="{
          delay: 8000,
        }"
        :breakpoints="{
          640: {
            centeredSlides: true,
            slidesPerView: 1.25,
          },
          1024: {
            centeredSlides: false,
            slidesPerView: 1.5,
          },
        }"
        :navigation="{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
      </swiper>

      <p class="append-buttons"></p>
    </main>
  </div>
</template>

<script>
import { inject, ref, computed, onMounted } from "vue";
import { useToast } from "vue-toastification";
import { useRoute, useRouter } from "vue-router";
import {
  getCustomerProductAll,
  postCustomerCart,
  putCustomerCart,
} from "Service/apis.js";
import { useClipboard } from "@vueuse/core";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { copy } = useClipboard();
    const store = useStore();
    const router = useRouter();
    const emitter = inject("emitter"); // Inject `emitter`

    const toast = useToast();
    const items = ref([]);
    const itemsClassic = ref([]);

    const getData = async () => {
      try {
        if (sessionStorage.getItem("needs")) {
          let arr = JSON.parse(sessionStorage.getItem("needs"));

          items.value = [...arr];
          itemsClassic.value = arr.filter((s) => s.category == "Mens");
          return;
        }

        const res = await getCustomerProductAll(``);
        let arr = [...res.data?.products];
        arr = arr.filter((s) => s.title != "測試的產品s");

        items.value = [...arr];
        itemsClassic.value = arr.filter((s) => s.category == "Mens");

        sessionStorage.setItem("needs", JSON.stringify(arr));
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e}`, {
          timeout: 2000,
          hideProgressBar: true,
        });
      }
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

        toast.info(`The Item has already been added to cart.`, {
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

    const goShop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      router.push("/productslist");
    };

    const copyCoupon = () => {
      copy("SuperCampain");
      toast.info(`Successfully Copy Coupon Code : SuperCampain!`, {
        timeout: 2000,
        hideProgressBar: true,
      });
    };

    onMounted(async () => {
      getData();
    });
    return {
      getData,
      goShop,
      items,
      itemsClassic,
      addToCart,
      copyCoupon,
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  // background: #f0efed;
  // background: #e7e9f0;
}

.featrue-word {
  // color: rgb(12, 12, 12);
  color: #07245e;
  font-weight: 700;
  display: flex;
  justify-content: center;

  .featrue-word-content {
    font-size: 14px;
    line-height: 30px;
    margin: 35px 0 35px;
    display: flex;
    justify-content: center;
    width: 250px;
    border-right: 1px solid rgb(12, 12, 12);
  }

  .featrue-word-content:last-child {
    border-right: 0px;
  }
}

//coupon
$coupon-background-color: #011a45;
$coupon-radius-size: 12px;

.allcoupons {
  margin-top: 20px;
  margin-bottom: 20px;
  background: $coupon-background-color;
  padding: 20px;
  display: grid;
  justify-content: center;

  .word-one {
    font-size: 30px;
    color: #ffffff;
  }

  .word-two {
    font-size: 18px;
    color: #aaa;
  }

  .coupon-item {
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
    transition-duration: 0.3s;

    > div {
      padding: 10px 20px;
      border-radius: $coupon-radius-size;
    }

    .coupon-intro {
      position: relative;
      background: #fff;
      flex: 3;

      > h4 {
        padding-left: 20px;
        font-weight: 600;
      }

      ul {
        color: #aaa;
        padding-left: 20px;
      }

      &:after {
        content: " ";
        border: 2px dashed $coupon-background-color;
        height: 100%;
        position: absolute;
        top: 0;
        right: -2px;
        z-index: 2;
      }
    }

    .allcoupon-value {
      display: flex;
      flex: 1;
      position: relative;
      background: #46a3e4;
      color: #fff;
      font-size: 38px;
      align-items: center;
      justify-content: center;

      &:before {
        content: " ";
        width: $coupon-radius-size * 2;
        height: $coupon-radius-size * 2;
        position: absolute;
        top: -$coupon-radius-size;
        left: -$coupon-radius-size;
        border-radius: 100%;
        background: $coupon-background-color;
      }

      &:after {
        content: " ";
        width: $coupon-radius-size * 2;
        height: $coupon-radius-size * 2;
        position: absolute;
        bottom: -$coupon-radius-size;
        left: -$coupon-radius-size;
        border-radius: 100%;
        background: $coupon-background-color;
      }
    }
  }

  .coupon-item:hover {
    // box-shadow: 10px 10px 14px -3px rgba(209, 202, 209, 1);
    transform: scale(1.05);
  }
}

@media only screen and (max-width: 599px) {
  .allcoupons {
    .coupon-item {
      width: 100%;
    }
  }
}

.itemCat-hover {
  display: none;
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

  &:hover {
    .itemCat-hover {
      display: block;
      width: 100% !important;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      position: relative;

      .itemCat-hover-content {
        position: absolute;
        color: #fff;
        top: 50%;
        left: 50%;
        text-decoration: underline;
        transform: translate(-50%, -50%);
        font-size: 26px;
      }
    }
  }
}
</style>
