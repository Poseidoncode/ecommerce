<template>
  <section class="main mx-5 my-5">
    <input type="text" class="input-section" placeholder="Text input area..." />
    <div class="line line-kind-one line1"></div>
    <div class="line line-kind-two line2"></div>
    <div class="line line-kind-two line3"></div>
    <div class="line line-kind-one line4"></div>
    <div class="line line-kind-one line5"></div>
    <div class="line line-kind-two line6"></div>
    <div class="line line-kind-two line7"></div>
    <div class="line line-kind-one line8"></div>
  </section>
</template>

<script>
import { inject, ref } from "vue";

export default {
  components: {},
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 180px;
  height: 40px;
  .input-section {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    font-size: 12px;
    padding-left: 5px;
  }
  input::placeholder {
    color: red;
    font-size: 1em;
  }
  input:focus-visible {
    outline: 1px solid crimson;
    border-radius: 3px;
  }

  .line {
    border-radius: 3px;
    border: 1.2px solid red;
  }
  .line-kind-one {
    width: 10px;
  }

  .line-kind-two {
    height: 10px;
  }

  .line1 {
    position: absolute;
    top: -1px;
    right: -1px;
  }
  .line2 {
    position: absolute;
    top: -1px;
    right: -1px;
  }
  .line3 {
    position: absolute;
    bottom: -1px;
    right: -1px;
  }
  .line4 {
    position: absolute;
    bottom: -1px;
    right: -1px;
  }
  .line5 {
    position: absolute;
    top: -1px;
    left: -1px;
  }
  .line6 {
    position: absolute;
    top: -1px;
    left: -1px;
  }
  .line7 {
    position: absolute;
    bottom: -1px;
    left: -1px;
  }
  .line8 {
    position: absolute;
    bottom: -1px;
    left: -1px;
  }
}
</style>
