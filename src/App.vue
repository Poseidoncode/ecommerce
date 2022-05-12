<template>
  <header-content v-if="$route.meta.needNav"></header-content>
  <div
    :class="
      $route.meta.needNav && $route.name != 'home' ? 'content-section' : ''
    "
  >
    <router-view />
  </div>
  <footer-content v-if="$route.meta.needFooter"></footer-content>
</template>

<script>
import headercontent from "@/components/cartHeader.vue";
import footercontent from "@/components/footer.vue";

export default {
  components: { headercontent, footercontent },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.content-section {
  margin-top: 160px;
}
</style>
