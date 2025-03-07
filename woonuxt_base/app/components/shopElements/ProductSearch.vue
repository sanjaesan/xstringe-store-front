<script setup>
const { getSearchQuery, setSearchQuery, clearSearchQuery } = useSearching();
const searchQuery = ref(getSearchQuery());

const reset = () => {
  clearSearchQuery();
  searchQuery.value = '';
};

watch(getSearchQuery, (value) => {
  if (!value) reset();
});
</script>

<template>
  <form class="relative items-center flex-1 -space-x-px rounded-md shadow-sm" @submit.prevent="setSearchQuery(searchQuery)">
    <Icon name="ion:search-outline" size="20" class="absolute z-10 opacity-100 pointer-events-none left-2" />
    <input
      id="product-search-input"
      v-model="searchQuery"
      type="text"
      :placeholder="$t('messages.shop.searchProducts')"
      class="z-0 inline-flex items-center w-full p-2 pl-10 text-sm text-black-500 border border-black-300 rounded-md shadow-inner outline-none bg-black-50 shadow-black-200" />
    <span
      v-if="searchQuery"
      class="absolute z-10 flex items-center gap-1 px-2 py-1 text-xs rounded cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-100 text-white right-2"
      @click="reset">
      <span>{{ $t('messages.general.clear') }}</span>
      <Icon name="ion:close-outline" size="18" />
    </span>
  </form>
</template>
