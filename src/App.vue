<template>
  <headercart v-if="$route.meta.needNav"></headercart>
  <div :class="$route.meta.needNav && $route.name != 'home' ? 'content' : ''">
    <router-view />
  </div>
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
.content {
  margin-top: 160px;
}
</style>
