<template>
  <div class="relative mx-auto">
    <NuxtImg
      width="1400"
      height="800"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
      src="/images/hero-g.png"
      alt="Hero image"
      loading="eager"
      sizes="sm:100vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div class="container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none">
      <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-5xl text-black">The Future is Now.</h1>
      <h2 class="text-lg font-bold md:mb-4 lg:text-3xl text-black-900">Level Up Your Reality.</h2>
      <div class="max-w-sm mb-8 text-md font-medium lg:max-w-md text-balance">
        <p>Explore the pinnacle of creativity and high-performance tech. Elevate your experience.</p>
      </div>

      <div class="flex gap-4">
        <NuxtLink class="px-6 py-3 font-normal text-gray-200 rounded-xl bg-maroon hover:bg-night-shadow" to="#!">Learn more</NuxtLink>

        <NuxtLink class="px-6 py-3 font-normal text-white bg-night-shade rounded-xl hover:text-gray-200 hover:bg-night-shadow" to="/product-category/laptop">Shop Laptops</NuxtLink>

        <NuxtLink class="px-6 py-3 font-normal text-white bg-night-shade rounded-xl hover:text-gray-200 hover:bg-night-shadow" to="/product-category/desktop">Shop Desktops</NuxtLink>
      </div>
    </div>
  </div>
</template>
