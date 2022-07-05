<template>
  <div class="bg-white main-content">
    <section>
      <div class="text-white py-20 bg-setting">
        <div
          class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24"
        >
          <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              Luxury
            </h1>
            <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Watches : The Timeless Infinity
            </h2>
            <p class="text-sm md:text-base text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your talent and
              win exciting prizes.
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
              <p class="mt-2 text-gray-300">
                The ultimate reference in luxury chronograph watches, high-precision
                timing innovations since 1960.
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
        <div class="md:flex mt-8 md:-mx-4 mb-12">
          <div
            class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
            style="
              background-image: url('https://images.unsplash.com/photo-1600897425543-5369a38bd193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80');
            "
          >
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Luxury</h2>
                <p class="mt-2 text-gray-300">
                  Swiss luxury watch and clock manufacturer founded in 1839, located in
                  Canton of Geneva and the Vallée de Joux.
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
                <p class="mt-2 text-gray-300">
                  Its ability to endure the challenges of time and embraces its simple
                  purpose and aesthetic appeal.
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
        <h1 class="heading-line font-semibold leading-9 text-center dark:text-gray-50">
          <span>FEATURED WATCHES</span>
        </h1>
        <div class="swiper-container mb-12">
          <div class="swiper-arrow arrow-previous">
            <div class="ball">
              <div class="arrow-left">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 11.5C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5V11.5ZM21 12.5C21.2761 12.5 21.5 12.2761 21.5 12C21.5 11.7239 21.2761 11.5 21 11.5V12.5ZM7 12.5H21V11.5H7V12.5Z"
                    fill="#F9F9F9"
                  />
                  <path
                    d="M2.35729 11.7856L5.7884 9.72696C6.32162 9.40703 7 9.79112 7 10.413V13.587C7 14.2089 6.32162 14.593 5.7884 14.273L2.35729 12.2144C2.19545 12.1173 2.19545 11.8827 2.35729 11.7856Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="swiper-arrow arrow-next">
            <div class="ball">
              <div class="arrow-right">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11.5C17.2761 11.5 17.5 11.7239 17.5 12C17.5 12.2761 17.2761 12.5 17 12.5V11.5ZM3 12.5C2.72386 12.5 2.5 12.2761 2.5 12C2.5 11.7239 2.72386 11.5 3 11.5V12.5ZM17 12.5H3V11.5H17V12.5Z"
                    fill="#F9F9F9"
                  />
                  <path
                    d="M21.6427 11.7856L18.2116 9.72696C17.6784 9.40703 17 9.79112 17 10.413V13.587C17 14.2089 17.6784 14.593 18.2116 14.273L21.6427 12.2144C21.8045 12.1173 21.8045 11.8827 21.6427 11.7856Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </div>
            </div>
          </div>

          <swiper
            ref="{swiperRef}"
            :mousewheel="{
              invert: true,
            }"
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            :speed="1200"
            :centeredSlides="isMobile"
            :lazy="true"
            :navigation="{
              nextEl: '.arrow-next',
              prevEl: '.arrow-previous',
            }"
            :initialSlide="3"
            :keyboard="{
              enabled: true,
            }"
            class="product-slide"
            :breakpoints="{
              0: {
                /* when window >=0px - webflow mobile portriat */
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              478: {
                /* when window >= 478px - webflow mobile landscape */
                slidesPerView: 3,
                spaceBetween: 15,
              },
              767: {
                /* when window >= 767px - webflow tablet */ slidesPerView: 2.25,
                spaceBetween: 30,
              },
              988: {
                /* when window >= 988px - webflow desktop */
                slidesPerView: 4.25,
                spaceBetween: 50,
              },
              1920: {
                /* when window >= 988px - webflow desktop */
                slidesPerView: 5.25,
                spaceBetween: 50,
              },
            }"
            :modules="modules2"
            :scrollbar="{
              delay: 3000,
            }"
          >
            <swiper-slide v-for="(itemCat, i) in itemsClassic" :key="`itemCat${i}`">
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  class="h-56 w-full product-background"
                  :style="itemCat.imageUrl ? `background:url(${itemCat.imageUrl})` : ''"
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
                  <div
                    class="itemCat-hover cursor-pointer"
                    @click.prevent="showDetail(itemCat)"
                  >
                    <div class="itemCat-hover-content">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4697 20.5304C19.7626 20.8232 20.2374 20.8232 20.5303 20.5304C20.8232 20.2375 20.8232 19.7626 20.5303 19.4697L19.4697 20.5304ZM7 9.25C6.58579 9.25 6.25 9.58579 6.25 10C6.25 10.4142 6.58579 10.75 7 10.75V9.25ZM13 10.75C13.4142 10.75 13.75 10.4142 13.75 10C13.75 9.58579 13.4142 9.25 13 9.25V10.75ZM10.75 7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7H10.75ZM9.25 13C9.25 13.4142 9.58579 13.75 10 13.75C10.4142 13.75 10.75 13.4142 10.75 13H9.25ZM20.5303 19.4697L15.4801 14.4194L14.4194 15.4801L19.4697 20.5304L20.5303 19.4697ZM10 16.25C6.54822 16.25 3.75 13.4518 3.75 10H2.25C2.25 14.2802 5.71979 17.75 10 17.75V16.25ZM3.75 10C3.75 6.54822 6.54822 3.75 10 3.75V2.25C5.71979 2.25 2.25 5.71979 2.25 10H3.75ZM10 3.75C13.4518 3.75 16.25 6.54822 16.25 10H17.75C17.75 5.71979 14.2802 2.25 10 2.25V3.75ZM16.25 10C16.25 11.7261 15.5513 13.2876 14.4194 14.4194L15.4801 15.4801C16.8817 14.0784 17.75 12.1399 17.75 10H16.25ZM14.4194 14.4194C13.2876 15.5513 11.7261 16.25 10 16.25V17.75C12.1399 17.75 14.0784 16.8818 15.4801 15.4801L14.4194 14.4194ZM7 10.75H13V9.25H7V10.75ZM9.25 7V13H10.75V7H9.25Z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
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
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- coupon -->
      <section class="allcoupons mt-16" @click="copyCoupon">
        <div class="word-one">25% Off on All products at Vigilero Stores</div>
        <p class="word-two mb-8">
          Get an incredible 25% discount on all types of watches at Vigilero Store. Only
          for single use.
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
      <div class="container mx-auto mt-16">
        <h1 class="heading-line font-semibold leading-9 text-center dark:text-gray-50">
          <span>Vigilero Reviews</span>
        </h1>
      </div>

      <section style="background: #fff">
        <div class="px-4 mx-auto sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-4 max-w-[1340px]">
          <div
            class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 gap-y-8 lg:items-center"
          >
            <div class="max-w-xl text-center sm:text-left">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl theme-color-main">
                <!-- Time to be Different -->
                Overview
                <!-- Vigilero Reviews -->
                <br class="hidden sm:block lg:hidden" />
                <!-- Read reviews from our customers -->
              </h2>

              <p class="mt-4 text-gray-500">
                Vigilero has a consumer rating of 4.8 stars from 16 reviews indicating
                that most customers are generally satisfied with their purchases. Vigilero
                ranks 49th among Watch sites.
              </p>

              <div class="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  class="p-3 review-text2 border review rounded-full hover:text-white prev-button"
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
                  class="p-3 review-text2 border review rounded-full hover:text-white next-button"
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
                  <swiper
                    class="mySwiper"
                    ref="{swiperRef}"
                    :loop="true"
                    :slidesPerView="1"
                    :centeredSlides="true"
                    :spaceBetween="30"
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
                  >
                    <swiper-slide>
                      <li class="swiper-slide reviews-swiper">
                        <blockquote
                          class="flex flex-col justify-between h-full p-12 bg-white"
                        >
                          <div>
                            <div class="flex gap-0.5 theme-color8">
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
                              <p class="text-2xl font-bold review-text sm:text-3xl">
                                David Louis
                              </p>

                              <p class="mt-4 leading-relaxed text-gray-500">
                                I really like shopping at your website because I have
                                purchased three SiSU watches and really like two of them
                                but never wear the second one because my wrist is way to
                                small and I even went to a watch place to have them remove
                                a link but it's still too big.
                              </p>
                            </div>
                          </div>

                          <footer
                            class="mt-8 text-sm text-gray-500"
                            style="text-align: end"
                          >
                            &mdash; Posted 3 days ago
                          </footer>
                        </blockquote>
                      </li></swiper-slide
                    >
                    <swiper-slide
                      ><li class="swiper-slide reviews-swiper">
                        <blockquote
                          class="flex flex-col justify-between h-full p-12 bg-white"
                        >
                          <div>
                            <div class="flex gap-0.5 theme-color8">
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
                                fill="none"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="currentColor"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>
                            </div>

                            <div class="mt-4">
                              <p class="text-2xl font-bold review-text sm:text-3xl">
                                Nixon watch
                              </p>

                              <p class="mt-4 leading-relaxed text-gray-500">
                                Best service I received in a long time postal to ireland
                                was super speedy watch was so beautiful as described
                                highly recommend Vigilero will purchase again from this
                                seller thank you for your wonderful service regards eddie
                              </p>
                            </div>
                          </div>

                          <footer
                            class="mt-8 text-sm text-gray-500"
                            style="text-align: end"
                          >
                            &mdash; Posted 4 days ago
                          </footer>
                        </blockquote>
                      </li></swiper-slide
                    >
                    <swiper-slide
                      ><li class="swiper-slide reviews-swiper">
                        <blockquote
                          class="flex flex-col justify-between h-full p-12 bg-white"
                        >
                          <div>
                            <div class="flex gap-0.5 theme-color8">
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
                              <p class="text-2xl font-bold review-text sm:text-3xl">
                                Christian M
                              </p>

                              <p class="mt-4 leading-relaxed text-gray-500">
                                Great selection and prices. These are interesting watches.
                                They aren't the most precise or collectable, but they are
                                the coolest.
                              </p>
                            </div>
                          </div>

                          <footer
                            class="mt-8 text-sm text-gray-500"
                            style="text-align: end"
                          >
                            &mdash; Posted 5 days ago
                          </footer>
                        </blockquote>
                      </li></swiper-slide
                    >
                  </swiper>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex justify-center gap-4 mt-8 lg:hidden">
            <button
              aria-label="Previous slide"
              class="p-4 review-text2 border review rounded-full hover:text-white prev-button"
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
              class="p-4 review-text2 border review rounded-full hover:text-white next-button"
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
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

// import required modules
import { Keyboard, Autoplay, Mousewheel, Pagination, Navigation } from "swiper";
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
        itemsClassic.value = arr.filter(
          (s) => s.category == "Mens" || s.category == "Ceramic"
        );

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
          let productData = store.state.cart.find((s) => s.product_id == item.id);

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

    onMounted(async () => {
      getData();
    });

    const isMobile = computed(() => {
      return +window?.outerWidth < 600;
    });
    return {
      showDetail,
      getData,
      goShop,
      items,
      itemsClassic,
      addToCart,
      copyCoupon,
      modules: [Pagination, Navigation],
      modules2: [Keyboard, Mousewheel, Pagination, Navigation],
      isMobile,
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
  // margin-top: 20px;
  margin-bottom: 20px;
  // background: $coupon-background-color;
  background: #03112e url("/public/assets/bgSwirl.svg") repeat 0 0/52px;
  padding: 42px;
  display: grid;
  justify-content: center;

  .word-one {
    font-size: 30px;
    color: #ffffff;
  }

  .word-two {
    font-size: 18px;
    color: #6d7da0;
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
        color: #6d7da0;
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
.swiper-container {
  position: relative;
  .swiper-arrow {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    z-index: 2;
  }
  .arrow-previous {
    left: 0;

    .ball {
      width: 3.25em;
      height: 3.25em;
      border-radius: 100%;
      background-color: #23314b;
      position: relative;
      transition: all 0.7s;
      cursor: pointer;
      .arrow-left {
        position: absolute;
        top: 50%;
        right: -15px;
        transform: translate(0%, -50%);
        transition: all 0.7s;
      }

      &:hover {
        transform: scale(1.08);
        .arrow-left {
          transform: translate(-15%, -50%);
        }
      }
    }
  }
  .arrow-next {
    right: 0;
    .ball {
      width: 3.25em;
      height: 3.25em;
      border-radius: 100%;
      background-color: #23314b;
      position: relative;
      transition: all 0.7s;
      cursor: pointer;
      .arrow-right {
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translate(0%, -50%);
        transition: all 0.7s;
      }

      &:hover {
        transform: scale(1.08);
        .arrow-right {
          transform: translate(15%, -50%);
        }
      }
    }
  }
  .product-slide {
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
          // background: rgba(0, 0, 0, 0.5);
          background: rgba(22, 22, 22, 0.295);
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
  }
}
.review {
  border-color: #8bc5f0;
  color: #8bc5f0;
}
.review-text {
  color: #8bc5f0;
}
.review-text2 {
  color: #8bc5f0;
  &:hover {
    background-color: #8bc5f0;
    color: #e7e9f0;
  }
}

.swiper-slide.reviews-swiper {
  border: 1px solid #c0c1c2;
  border-radius: 3px;
}
</style>
