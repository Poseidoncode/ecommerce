<template>
  <headercontent v-if="$route.meta.needNav"></headercontent>
  <div>
    <router-view />
  </div>
  <footercontent v-if="$route.meta.needFooter"></footercontent>
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
</style>
