<template>
  <div class="relative bg-black rounded-xl p-3 mx-auto my-8 md:my-0 md:h-[120px]">
    <div class="md:absolute inset-0 md:flex flex-row items-center justify-between md:pr-6">
      <div class="md:flex items-center">
        <div class="ml-4 pt-4 md:m-0 md:pt-0">
          <NuxtImg
            class="object-cover w-full h-[80px] md:h-full"
            src="/images/banner.png"
            alt="Hero image"
            loading="eager"
            sizes="320px"
            fetchpriority="high"
            preload
            placeholder
            placeholder-class="blur-xl"
          />
        </div>

        <div class="drop-shadow-xs my-6 md:my-0 md:ml-6 lg:ml-24 text-center">
          <h1 class="text-lg lg:text-2xl font-semibold text-white darken-2">
            Make Every Play Count
          </h1>
          <h2 class="text-sm font-normal text-gray-100 mt-0.5">
            Radeon™ RX 9000 Series PCs Available Now.
          </h2>
        </div>
      </div>

      <div class="pb-3 lg:pv-0 text-center">
        <NuxtLink
          class="rounded-3xl border px-4 py-1.5 border-white text-white mt-2 text-m hover:border-primary dark:hover:border-crimson"
          to="/products"
        >
          Shop now
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
