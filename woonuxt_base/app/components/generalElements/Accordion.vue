<template>
  <div class="relative transition-all  bg-gray-200 border border-gray-300 dark:bg-night-shade dark:border-0" :class="[isAccordion ? 'pb-1' : 'rounded-xl mb-4']">
    <button type="button" class="w-full p-4 text-left" :class="{ 'px-0': isAccordion }" @click="onActive">
      <div class="flex items-center justify-between">
        <span class="whitespace-nowrap">
          <slot name="title" />
        </span>

        <span id="icon-1" class="text-black-200 transition-transform duration-300 flex-shrink-0">
          <svg v-if="!isActive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path>
          </svg>
        </span>
      </div>
    </button>

    <div
      class="relative overflow-hidden transition-all duration-700"
      :class="[
        isActive ? 'max-h-[320px]' : 'max-h-0',
        {
          'border-b border-black-200': isAccordion,
        },
      ]"
    >
      <div class="pt-1 px-4 pb-4" :class="{ 'px-0': isAccordion }">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    isAccordion: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(['update:modelValue']);
  
  const isOpen = ref(props.modelValue);
  
  const isActive = computed(() => isOpen.value);
  
  const onActive = () => {
    const value = !isOpen.value;
    isOpen.value = value;
  
    emit('update:modelValue', value);
  };
  </script>