<template>
  <div class="relative mx-auto bg-night h-full w-full">
    <NuxtImg
      width="1400"
      height="600"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
      src="/images/hero-4-no-bg.png"
      alt="Hero image"
      loading="eager"
      sizes="sm:90vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div class="container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none">
      <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl text-crimson">The Future is Now.</h1>
      <h2 class="text-lg font-bold md:mb-4 lg:text-3xl text-maroon">Level Up Your Reality.</h2>
      <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance text-gray-400">
        <p>Explore the pinnacle of creativity and high-performance tech. Elevate your experience.</p>
      </div>
      <NuxtLink class="px-6 py-3 font-medium text-white bg-maroon rounded-xl hover:bg-crimson" to="/products">Shop now</NuxtLink>
    </div>
  </div>
</template>
