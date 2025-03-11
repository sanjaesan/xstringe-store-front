<script setup lang="ts">
const { toggleMobileMenu, isShowingMobileMenu } = useHelpers();
</script>

<template>
  <Icon v-if="!isShowingMobileMenu" name="ion:menu-outline" size="26" class="cursor-pointer mr-3" @click="toggleMobileMenu" />
  <CloseIcon v-else class="bg-white rounded-xl shadow-xl p-1.5 mr-1" @click="toggleMobileMenu(false)" />
</template>
