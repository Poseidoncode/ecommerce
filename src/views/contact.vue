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
              Contact
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

    <div class="text-gray-600 body-font container px-5 py-2 mx-auto">
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center"
        >
          Contact Us
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-center mb-4">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
        </p>

        <v-form
          class="contact-form-section"
          v-slot="{ errors, values, validate }"
          @submit="onSubmit"
        >
          <div>
            <label class="form-label"
              >Name
              <v-field
                name="name"
                type="name"
                class="form-control w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                :class="{
                  'is-invalid': errors['name'],
                  'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                    'name'
                  ],
                }"
                placeholder="請輸入 Name"
                rules="required"
                v-model="user.name"
              ></v-field>
            </label>
            <error-message name="name" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label class="form-label"
              >Email
              <v-field
                name="email"
                type="email"
                class="form-control w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                :class="{
                  'is-invalid': errors['email'],
                  'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                    'email'
                  ],
                }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="user.email"
              >
              </v-field>
            </label>

            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3" style="grid-column: 1 / -1">
            <label class="form-label"
              >Message
              <v-field
                name="message"
                type="message"
                class="form-control w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                :class="{
                  'is-invalid': errors['message'],
                  'focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ': !errors[
                    'message'
                  ],
                }"
                placeholder="請輸入 Message"
                rules="required"
                v-model="user.message"
                as="textarea"
                rows="10"
              >
              </v-field>
            </label>

            <error-message name="message" class="invalid-feedback"></error-message>
          </div>

          <!-- <button class="btn me-2 btn-outline-primary" type="button" @click="validate">
            驗證
          </button> -->

          <!-- <button class="btn btn-primary" type="submit">Submit</button> -->
        </v-form>

        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-full">
            <button
              class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Button
            </button>
          </div>
          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a class="text-blue-500">example@email.com</a>
            <p class="leading-normal my-5">49 Smith St. <br />Saint Cloud, MN 56301</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-col text-center w-full mb-12"></div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { inject, ref, defineComponent } from "vue";

export default defineComponent({
  props: {
    // specColum: {
    //   type: String,
    //   default: "",
    // },
  },
  setup(props, { emit }) {
    // emit("update:modelValue", _newValues);
    const user = ref({});
    const onSubmit = () => {
      console.log(user.value);
    };
    return { user, onSubmit };
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
.contact-form-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
}
</style>
