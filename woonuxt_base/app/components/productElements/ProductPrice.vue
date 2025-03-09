<script setup lang="ts">
interface ProductPriceProps {
  regularPrice?: string | null;
  salePrice?: string | null;
}

const { regularPrice, salePrice } = defineProps<ProductPriceProps>();
</script>

<template>
  <div v-if="regularPrice" class="flex font-semibold">
    <span :class="[salePrice ? 'text-crimson line-through font-normal' : 'dark:text-gray-300']" v-html="regularPrice" />
    <span v-if="salePrice" class="ml-2 dark:text-gray-300" v-html="salePrice" />

    <!-- <span class="" :class="[salePrice ? 'text-crimson line-through font-normal': 'text-black-400 dark:text-gray-300' ]" v-html="regularPrice" />
    <span v-if="salePrice" class="ml-2 text-black-500 dark:text-gray-400" v-html="salePrice" /> -->
  </div>
</template>
