<template>
    <div class="relative mx-auto">
      <div class="carousel-container overflow-hidden relative">
        <div class="carousel-track flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(slide, index) in slides" :key="index" class="carousel-slide flex-shrink-0 w-full relative">
            <NuxtImg
              :width="1400"
              :height="800"
              class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
              :src="slide.img"
              :alt="slide.alt"
              loading="eager"
              sizes="sm:100vw md:1400px"
              fetchpriority="high"
              preload
              placeholder
              placeholder-class="blur-xl"
            />
            <div class="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none">
              <div class="container">
                <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-5xl">{{ slide.title }}</h1>
                <h2 class="text-lg font-bold md:mb-4 lg:text-3xl">{{ slide.subtitle }}</h2>
                <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance">
                  <p>{{ slide.description }}</p>
                </div>
                <NuxtLink class="px-6 py-3 font-bold text-white bg-gray-800 rounded-xl hover:bg-white hover:text-primary" :to="slide.link">Shop now</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <button v-if="slides.length > 1" class="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-600 bg-opacity-50 text-white p-2 rounded-full" @click="prevSlide">
          <ChevronLeftIcon class="h-6 w-6" />
        </button>
        <button v-if="slides.length > 1" class="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-600 bg-opacity-50 text-white p-2 rounded-full" @click="nextSlide">
          <ChevronRightIcon class="h-6 w-6" />
        </button>
        <div v-if="slides.length > 1" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button v-for="(slide, index) in slides" :key="index" class="w-3 h-3 rounded-full" :class="{ 'bg-gray-800': currentIndex === index, 'bg-gray-300': currentIndex !== index }" @click="goToSlide(index)"></button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';
  import { onMounted, onUnmounted, ref } from 'vue';
  
  const props = defineProps({
    slides: {
      type: Array,
      required: true,
      default: () => [],
      validator: (slides) => {
        return slides.every(slide => slide.img && slide.title && slide.subtitle && slide.description && slide.link && slide.alt);
      }
    }
  });
  
  const currentIndex = ref(0);
  const intervalId = ref(null); // Added intervalId ref
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.slides.length;
  };
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length;
  };
  
  const goToSlide = (index) => {
    currentIndex.value = index;
  };
  
  onMounted(() => {
    intervalId.value = setInterval(nextSlide, 5000); // Set interval to 5 seconds
  });
  
  onUnmounted(() => {
    clearInterval(intervalId.value); // Clear interval on unmount
  });
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
  }
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out; /* Added transition */
  }
  .carousel-slide {
    width: 100%;
  }
  </style>