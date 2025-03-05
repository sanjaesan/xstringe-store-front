<script setup lang="ts">
interface ProductPriceProps {
  regularPrice?: string | null;
  salePrice?: string | null;
}

const { regularPrice, salePrice } = defineProps<ProductPriceProps>();
</script>

<template>
  <div v-if="regularPrice" class="flex font-semibold">
    <span class="" :class="[salePrice ? 'text-crimson line-through font-normal': 'text-gray-300' ]" v-html="regularPrice" />
    <span v-if="salePrice" class="ml-2 text-gray-400" v-html="salePrice" />
  </div>
</template>
