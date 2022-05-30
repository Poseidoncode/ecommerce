<template>
  <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
    <h1 class="mb-6 text-xl font-bold md:text-3xl">
      Frequently Asked Questions
    </h1>
    <h1 class="mb-6 text-xl font-bold md:text-3xl">
      About Orders
    </h1>
    <div class="text-sm border-t border-b border-gray-200 divide-y divide-gray-200">
      <div>
        <button @click="open.q11 = !open.q11"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          How do I place an order?
          <svg :class="{ 'rotate-45': open.q11 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q11">
          It's really easy to place an order with House Of Watches, simply select your item/s and add to basket. You can
          select from checking out using our secure payment site or using PayPal.
        </div>
      </div>
      <div>
        <button @click="open.q12 = !open.q12"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          Can I cancel an order after it has been placed?
          <svg :class="{ 'rotate-45': open.q12 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q12">
          You cannot cancel or change an order after it has been placed. However, if you return the item(s) within 30
          days of purchase, we can offer a full refund.
        </div>
      </div>

      <div>
        <button @click="open.q13 = !open.q13"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          Are the items genuine and will they be received in official brand packaging?
          <svg :class="{ 'rotate-45': open.q13 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q13">
          House of Watches are authorised dealers of all the brands we sell. All watches are brand new and come with
          full manufacturer's warranty, certification and packaging. You can confirm this by finding us on
          manufacturers' websites where we are listed as either House of Watches or T.H.Baker
        </div>
      </div>

      <div>
        <button @click="open.q14 = !open.q14"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          What if there is an item missing from my order?
          <svg :class="{ 'rotate-45': open.q14 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q14">
          If for any reason we are unable to fulfill your original order, the Customer Care team will contact you and
          help you select an alternative item or arrange for a refund.
        </div>
      </div>

      <div>
        <button @click="open.q15 = !open.q15"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          I have seen a watch but it does not appear on your website, can you get it for me?
          <svg :class="{ 'rotate-45': open.q15 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q15">
          Yes, as authorised dealers we will contact the manufacturer and determine availability, and our customer care
          team will keep you informed every step of the way.
        </div>
      </div>
    </div>
    <!-- section-2 -->
    <h1 class="mb-6 text-xl font-bold md:text-3xl">
      About Orders
    </h1>
    <div class="text-sm border-t border-b border-gray-200 divide-y divide-gray-200">
      <div>
        <button @click="open.q11 = !open.q11"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          How do I place an order?
          <svg :class="{ 'rotate-45': open.q11 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q11">
          It's really easy to place an order with House Of Watches, simply select your item/s and add to basket. You can
          select from checking out using our secure payment site or using PayPal.
        </div>
      </div>
      <div>
        <button @click="open.q12 = !open.q12"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          Can I cancel an order after it has been placed?
          <svg :class="{ 'rotate-45': open.q12 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q12">
          You cannot cancel or change an order after it has been placed. However, if you return the item(s) within 30
          days of purchase, we can offer a full refund.
        </div>
      </div>

      <div>
        <button @click="open.q13 = !open.q13"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          Are the items genuine and will they be received in official brand packaging?
          <svg :class="{ 'rotate-45': open.q13 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q13">
          House of Watches are authorised dealers of all the brands we sell. All watches are brand new and come with
          full manufacturer's warranty, certification and packaging. You can confirm this by finding us on
          manufacturers' websites where we are listed as either House of Watches or T.H.Baker
        </div>
      </div>

      <div>
        <button @click="open.q14 = !open.q14"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          What if there is an item missing from my order?
          <svg :class="{ 'rotate-45': open.q14 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q14">
          If for any reason we are unable to fulfill your original order, the Customer Care team will contact you and
          help you select an alternative item or arrange for a refund.
        </div>
      </div>

      <div>
        <button @click="open.q15 = !open.q15"
          class="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
          role="button">
          I have seen a watch but it does not appear on your website, can you get it for me?
          <svg :class="{ 'rotate-45': open.q15 }" class="flex-none w-4 h-4 ml-4 transition transform"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div x-spread="collapse" x-cloak class="pb-5 pr-0 text-gray-700 md:pr-40" v-show="open.q15">
          Yes, as authorised dealers we will contact the manufacturer and determine availability, and our customer care
          team will keep you informed every step of the way.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { inject, ref } from "vue";

export default {
  props: {
    // specColum: {
    //   type: String,
    //   default: "",
    // },
  },
  setup(props, { emit }) {
    const open = ref({
      q11: false,
      q12: false,
      q13: false,
      q14: false,
      q15: false,
      q21: false,
      q22: false,
      q23: false,
      q24: false,
      q25: false,
      q33: false,
      q32: false,
      q33: false,
      q34: false,
      q35: false,
    });
    // emit("update:modelValue", _newValues);
    return { open };
  },
};
</script>

<style lang="scss" scoped>
</style>
