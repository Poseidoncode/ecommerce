<template>
  <!-- <div class="loader-body" v-if="isShowLoading"> -->
  <div class="loader-body" v-if="true">
    <div class="Loader"></div>
  </div>
</template>

<script>
// import { watch, inject, ref } from "vue";
// export default {
//   setup() {
//     const emitter = inject("emitter");
//     const isShowLoading = ref(false);
//     const toggleLoading = () => {
//       isShowLoading.value = !isShowLoading.value;
//     };

//     emitter.on("toggleLoader", (value) => {
//       toggleLoading();
//     });
//     return { isShowLoading, toggleLoading };
//   },
// };
</script>

<style lang="scss">
$Loader-color: #fff;
$Loader-size: 14.6rem;
$Loader-offset: 1.7rem;
$Loader-timing: ease-in-out;
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
  .Loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: $Loader-size;
    margin-top: calc($Loader-size / 2);
    margin-bottom: calc($Loader-size / 2);
    &:before,
    &:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      animation-duration: 1.8s;
      animation-iteration-count: infinite;
      animation-timing-function: $Loader-timing;
      filter: drop-shadow(0 0 calc($Loader-offset / 2.25) rgba($Loader-color, 0.75));
    }
    &:before {
      width: 100%;
      padding-bottom: 100%;
      box-shadow: inset 0 0 0 $Loader-offset $Loader-color;
      animation-name: pulsA;
    }
    &:after {
      width: calc(100% - #{$Loader-offset}* 2);
      padding-bottom: calc(100% - #{$Loader-offset}* 2);
      box-shadow: 0 0 0 0 $Loader-color;
      animation-name: pulsB;
    }
  }
}

@keyframes pulsA {
  0% {
    box-shadow: inset 0 0 0 $Loader-offset $Loader-color;
    opacity: 1;
  }
  50%,
  100% {
    box-shadow: inset 0 0 0 0 $Loader-color;
    opacity: 0;
  }
}

@keyframes pulsB {
  0%,
  50% {
    box-shadow: 0 0 0 0 $Loader-color;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 $Loader-offset $Loader-color;
    opacity: 1;
  }
}
</style>
