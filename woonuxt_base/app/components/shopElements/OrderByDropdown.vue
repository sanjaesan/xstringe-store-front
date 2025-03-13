<script setup>
const { getOrderQuery, setOrderQuery } = await useSorting();
const { storeSettings } = useAppConfig();
const selectedOrder = ref(getOrderQuery());
const orderby = ref(selectedOrder.value.orderBy || 'date');
const order = ref(selectedOrder.value.order);

const optionClass = 'dark:bg-night-shade dark:text-white'

// Update the URL when the checkbox is changed
watch([orderby, order], () => {
  setOrderQuery(orderby.value, order.value);
});
</script>

<template>
  <div class="inline-flex ml-auto -space-x-px shadow-sm rounded-m isolate">
    <button
      class="relative inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white dark:bg-night-shade border dark:border-0 border-gray-300 rounded-l-md focus:z-20"
      aria-label="Sort"
      @click="order = order === 'ASC' ? 'DESC' : 'ASC'">
      <Icon name="ion:filter-outline" size="18" :class="order === 'ASC' ? 'rotate-180' : ''" class="transition-transform transform transform-origin-center dark:text-white" />
    </button>
    <select id="orderby-dropdown" v-model="orderby" class="bg-white dark:bg-night-shade dark:hover:bg-night-shade dark:text-white font-normal rounded-l-none border dark:border-0 border-gray-300 rounded-r-md focus-none outline-none" aria-label="Order by">
      <option :class="optionClass" value="date">{{ $t('messages.general.latest') }}</option>
      <option :class="optionClass" value="alphabetically">{{ $t('messages.general.alphabetically') }}</option>
      <option :class="optionClass" value="price">{{ $t('messages.shop.price') }}</option>
      <option :class="optionClass" v-if="storeSettings.showReviews" value="rating">{{ $t('messages.shop.rating') }}</option>
      <option :class="optionClass" value="discount">{{ $t('messages.shop.discount') }}</option>
    </select>
  </div>
</template>

<style scoped>
select option:hover {
    box-shadow: 0 0 10px 100px #ff0000 inset;
    background-color: yellow;

}
</style>