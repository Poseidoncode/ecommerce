<template>
  <div>123</div>
</template>

<script>
import { inject, ref, defineComponent, onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useToast } from "vue-toastification";
import { useStore } from "vuex";

export default defineComponent({
  props: {},
  setup(props, { emit }) {
    const emitter = inject("emitter"); // Inject `emitter`
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();
    const store = useStore();

    return {};
  },
});
</script>

<style lang="scss" scoped></style>
