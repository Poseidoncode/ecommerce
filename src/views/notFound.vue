<template>
  <!-- component -->
  <!-- <div
    class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative"
  >
    <div
      class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left"
    >
      <div class="w-full md:w-1/2">
        <div class="mb-10 lg:mb-20">
          <img src="https://flipstore.withun.link/identity/Group%201.svg" />
        </div>
        <div class="mb-10 md:mb-20 text-gray-600 font-light">
          <h1 class="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">
            404<br />Not Found
          </h1>
          <p>Sorry we couldn't find this page.</p>
          <p>But dont worry, you can find plenty of other things on our homepage.</p>
        </div>
        <div class="mb-20 md:mb-0">
          <button
            class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600"
          >
            back to homepage
          </button>
        </div>
      </div>
      <div class="w-full md:w-1/2 text-center">
        <img
          src="https://images.unsplash.com/photo-1575796398382-4e28b372a274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          class="w-64 h-64"
        />
      </div>
    </div>
    <div
      class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"
    ></div>
    <div
      class="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"
    ></div>
  </div> -->
  <main
    class="h-screen font-sans bg-cover"
    style="
      background-image: url(https://images.unsplash.com/photo-1612771409641-b0478cab8b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
    "
  >
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <div class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
            <p class="text-gray-800 text-center text-xl font-bold mb-5">
              404 - Not Found
            </p>
            <button
              class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded ml-24"
              @click="$router.push('/')"
            >
              Take Me Back To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
