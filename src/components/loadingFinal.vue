<template>
  <div class="loader-body" v-if="isShowLoading">
    <!-- <div class="loader-body" v-if="true"> -->
    <figure>
      <svg
        version="1.1"
        id="L2"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 100 100"
        xml:space="preserve"
      >
        <circle
          fill="none"
          stroke="#fff"
          stroke-width="4"
          stroke-miterlimit="10"
          cx="50"
          cy="50"
          r="48"
        />
        <line
          fill="none"
          stroke-linecap="round"
          stroke="#fff"
          stroke-width="4"
          stroke-miterlimit="10"
          x1="50"
          y1="50"
          x2="85"
          y2="50.5"
        >
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </line>
        <line
          fill="none"
          stroke-linecap="round"
          stroke="#fff"
          stroke-width="4"
          stroke-miterlimit="10"
          x1="50"
          y1="50"
          x2="49.5"
          y2="74"
        >
          <animateTransform
            attributeName="transform"
            dur="15s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </figure>
  </div>
</template>

<script>
import { watch, inject, ref } from "vue";
export default {
  setup() {
    const emitter = inject("emitter");
    const isShowLoading = ref(false);
    const toggleLoading = () => {
      isShowLoading.value = !isShowLoading.value;
    };
    emitter.on("toggleLoader", (value) => {
      toggleLoading();
    });
    return { isShowLoading, toggleLoading };
  },
};
</script>

<style lang="scss">
.loader-body {
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  // background: rgba(#000, 0.7);
  background: #050b1f;
  display: grid;
  place-items: center;
  color: white;
  z-index: 999;
  figure {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 8em;
    height: 8em;
  }
}
</style>
