<script setup>
function toggleTheme(value = false) {
    isDark.value = value;
    document.body.classList.toggle('dark')
}

const isDark = ref(false);

const themeTitle = computed(() =>
  isDark.value ? "Switch to light mode" : "Switch to dark mode"
);
</script>

<template>
  <div
    class="relative cursor-pointer inline-flex"
    :title="themeTitle"
    @click="toggleTheme(!isDark)"
  >
    <ClientOnly>
      <Transition name="popIn" mode="out-in">
        <Icon v-if="isDark" name="ion:sunny-outline" size="22" class="mr-1 md:mr-0" />
        <Icon v-else name="ion:moon-outline" size="22" class="mr-1 md:mr-0" />
      </Transition>
    </ClientOnly>
  </div>
</template>

<style lang="postcss">
/* popIn */
.popIn-enter-active,
.popIn-leave-active {
  transition: all 200ms cubic-bezier(0, 0, 0.57, 1.61);
}

.popIn-enter-from,
.popIn-leave-to {
  transform: scale(0);
}
</style>
