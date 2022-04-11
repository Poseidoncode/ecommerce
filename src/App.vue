<template>
  <headercart v-if="$route.meta.needNav"></headercart>

  <router-view />
  <div>123 {{ $route.meta.needNav }}</div>
</template>

<script>
import headercart from "@/components/cartHeader.vue";

export default {
  components: { headercart },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
