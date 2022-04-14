<template>
  <headercontent v-if="$route.meta.needNav"></headercontent>
  <div :class="$route.meta.needNav && $route.name != 'home' ? 'content' : ''">
    <router-view />
  </div>
  <footercontent></footercontent>
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
.content {
  margin-top: 160px;
}
</style>
