<template>
  <div class="relative bg-black rounded-xl mx-auto h-[120px] w-9/12">
    <div class="absolute inset-0 flex flex-row items-center justify-between pr-6">
      <div class="flex items-center">
        <div>
          <NuxtImg
            class="object-cover w-full h-full"
            src="/images/banner.png"
            alt="Hero image"
            loading="eager"
            sizes="320px"
            fetchpriority="high"
            preload
            placeholder
            placeholder-class="blusr-xl"
          />
        </div>

        <div class="drop-shadow-xs ml-20">
          <h1 class="text-2xl font-semibold text-white darken-2">
            Make Every Play Count
          </h1>
          <h2 class="text-sm font-normal text-gray-100 mt-0.5">
            Radeon™ RX 9000 Series PCs Available Now.
          </h2>
        </div>
      </div>

      <div>
        <NuxtLink
          class="pflex items-center justify-center whitespace-nowrap rounded-3xl border px-4 py-1.5 border-white text-white mt-2 text-sm hover:border-primary dark:hover:border-crimson"
          to="/products"
        >
          Shop now
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
