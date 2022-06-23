<template>
  <div class="loader-body">
    <div class="loader">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import _ from "lodash";
</script>

<style lang="scss">
// html,
// body {
//   height: 100%;
// }

.loader-body {
  align-items: center;
  //   background: #d65b9e;
  //   background: linear-gradient(
  //     45deg,
  //     #d65b9e 1%,
  //     #f699cb 22%,
  //     #ffacd9 51%,
  //     #f699cb 83%,
  //     #d65b9e 100%
  //   );
  //   display: flex;
  //   justify-content: center;
  //   position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgba(#000, 0.7);
  //   background: rgba(rgba(29, 28, 28, 0.425), 0.7);

  display: grid;
  place-items: center;
  color: white;
  z-index: 999;
}

$dot-count: 26;
$dot-size: 10px;
$dot-space: 15px;
// $dot-start: ((calc($dot-count / 2) + 1) * ($dot-size + $dot-space)) / 2;
$dot-start: calc(((calc($dot-count / 2) + 1) * ($dot-size + $dot-space)) / 2);

$animation-time: 2s;
$animation-distance: 25px;

.loader {
  position: relative;
  top: 0%;
  left: 0%;

  .dot {
    animation-name: movement;
    animation-duration: $animation-time;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    height: $dot-size;
    position: absolute;
    top: -#{$dot-size};
    transform: translate3d(0, -#{$animation-distance}, 0) scale(1);
    width: $dot-size;

    @for $i from 1 through $dot-count {
      $dot-move: ceil(calc($i / 2));
      $dot-pos: $dot-start - (($dot-size + $dot-space) * $dot-move);

      $animation-delay: -#{$i * 0.1}s;
      @if $i % 2 == 0 {
        $animation-delay: -#{($i * 0.1) + calc($animation-time / 2)};
      }

      &:nth-of-type(#{$i}) {
        animation-delay: $animation-delay;
        left: $dot-pos;

        &::before {
          animation-delay: $animation-delay;
        }
      }
    }

    &::before {
      animation-name: size-opacity;
      animation-duration: $animation-time;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
      background: white;
      border-radius: 50%;
      content: "";
      display: block;
      height: 100%;
      width: 100%;
    }

    &:nth-of-type(even)::before {
      //   background-color: #ff47aa;
      //   box-shadow: inset 0 0 4px darken(#ff47aa, 10%);
      background-color: #86aad1;
      box-shadow: inset 0 0 4px darken(#86aad1, 10%);
      //   background-color: #70a4db;
      //   box-shadow: inset 0 0 4px darken(#70a4db, 10%);
      //   background-color: #7da8d6;
      //   box-shadow: inset 0 0 4px darken(#7da8d6, 10%);
    }
  }
}

@keyframes movement {
  0% {
    transform: translate3d(0, -#{$animation-distance}, 0);
    z-index: 0;
  }
  50% {
    transform: translate3d(0, #{$animation-distance}, 0);
    z-index: 10;
  }
  100% {
    transform: translate3d(0, -#{$animation-distance}, 0);
    z-index: -5;
  }
}

@keyframes size-opacity {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  25% {
    transform: scale(1.5);
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.35;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
