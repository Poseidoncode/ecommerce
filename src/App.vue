<template>
  <!-- <Layout> -->
  <headercart></headercart>
  <router-view />
  <!-- </Layout> -->
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
