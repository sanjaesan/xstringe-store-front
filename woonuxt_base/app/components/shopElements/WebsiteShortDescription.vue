<script setup lang="ts">
const { description } = useAppConfig();
</script>

<template>
  <p class="mt-4 text-sm text-crimson xl:max-w-md">{{ description }}</p>
</template>
