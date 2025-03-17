<script setup>
const { cart } = useCart();
const props = defineProps({
  disabled: { type: Boolean, default: false },
});
const isLoading = ref(false);
const { t } = useI18n();
const addToCartButtonText = computed(() => (isLoading.value ? t('messages.shop.adding') : t('messages.shop.addToCart')));

// stop loading when cart is updated
watch(cart, (val) => {
  isLoading.value = false;
});
</script>

<template>
  <button
    type="submit"
    class="bg-black flex rounded-lg font-semibold bg-gray-800 hover:bg-gray-600 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus: focus:outline-none"
    :class="{ disabled: disabled }"
    :disabled="disabled"
    @click="isLoading = true"
  >
    <LoadingIcon v-if="isLoading" stroke="4" size="20" color="#fff" />
    <template v-else>
      <Icon name="ion:cart-outline" size="20" class="transition-transform transform transform-origin-center" />
      <span>{{ addToCartButtonText }}</span>
    </template>
  </button>
</template>

<style lang="postcss" scoped>
button {
  outline: none !important;
  transition: all 150ms ease-in;
}

button.disabled {
  @apply cursor-not-allowed bg-gray-400;
}
</style>
