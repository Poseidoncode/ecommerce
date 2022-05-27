<template>
  <section>123</section>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue';
import { getCustomerSingleProduct } from 'Service/apis.js';
import { useToast } from 'vue-toastification';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  props: {},
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();

    const toast = useToast();
    const product = ref([]);

    return {};
  },
});
</script>

<style lang="scss" scoped></style>
