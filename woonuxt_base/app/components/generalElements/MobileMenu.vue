<script setup lang="ts">
const { toggleMobileMenu } = useHelpers();
</script>

<template>
  <div class="bg-white flex flex-col max-w-lg shadow-lg top-[68px] bottom-0 left-0 w-11/12 z-50 fixed overflow-x-hidden">
    <!-- <CloseIcon class="bg-white rounded-xl shadow-xl p-1.5" @click="toggleMobileMenu(false)" />
    <div class="mt-8 text-center">{{ $t('messages.general.menu') }}</div> -->
    <MainMenu class="m-4 grid p-4 text-black-500 gap-6" />
  </div>
</template>
