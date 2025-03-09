<template>
  <div class="relative mx-auto" style="width: 511px; height: 160px;">
    <NuxtImg
      width="511"
      height="160"
      class="object-cover w-full h-full"
      src="/images/banner.png"
      alt="Hero image"
      loading="eager"
      sizes="500px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div class="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none" style="padding: 10px;">
      <h1 class="text-xl font-bold text-white">Make Every Play Count</h1>
      <h2 class="text-sm font-bold text-white">Radeon™ RX 9000 Series PCs Available Now.</h2>
      <NuxtLink class="pflex items-center justify-center whitespace-nowrap rounded-3xl border px-4 py-1.5 border-white text-white mt-2 text-s hover:border-primary" to="/products">Shop now</NuxtLink>
    </div>
  </div>
</template>

