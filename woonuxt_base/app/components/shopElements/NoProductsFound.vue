<script setup lang="ts">
const { allProducts } = useProducts();
const { clearSearchQuery } = useSearching();
const { resetFilter } = useFiltering();

const clearAll = () => {
  resetFilter();
  clearSearchQuery();
};
</script>

<template>
  <div class="w-full my-16 no-products lg:my-24">
    <div class="flex flex-col items-center justify-center w-full text-center text-pretty">
      <Icon name="ion:sad-outline" size="156" class="opacity-25 mb-10" />
      <h2 class="text-2xl font-bold text-gray-500">{{ $t('messages.shop.noProductsFound.title') }}</h2>
      <p class="mt-4 max-w-md text-gray-400">
        <slot>{{ $t('messages.shop.noProductsFound.subText') }}</slot>
      </p>
      <div>
        <button
          v-if="allProducts.length"
          class="bg-crimson rounded-lg font-normal mt-8 text-center text-white text-sm w-full py-3 px-6 inline-block hover:bg-primary-dark"
          :title="$t('messages.shop.noProductsFound.clearFiltersAndSearch')"
          aria-label="Clear all filters and search"
          @click="clearAll">
          {{ $t('messages.shop.noProductsFound.clearFiltersAndSearch') }}
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.no-products .iconify  {
    color: #6b7280;
  }
</style>