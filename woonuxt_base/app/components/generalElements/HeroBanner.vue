<template>
  <div class="relative bg-black rounded-xl p-3 mx-auto my-8 md:my-0 md:h-[160px]">
    <div class="md:absolute inset-0 md:flex flex-row items-center justify-between md:pr-6">
      <div class="md:flex items-center">
        <div class="ml-4 pt-4 md:m-0 md:pt-0">
          <NuxtImg
            class="object-cover w-full h-[100px] md:h-full"
            :src="imgSrc"
            :alt="imgAlt"
            loading="eager"
            sizes="320px"
            fetchpriority="high"
            preload
            placeholder
            placeholder-class="blur-xl"
          />
        </div>

        <div class="drop-shadow-xs my-6 md:my-0 md:ml-6 lg:ml-24 text-center">
          <h1 class="text-lg lg:text-2xl font-bold text-white darken-2">
            {{ text }}
          </h1>
          <h2 class="text-sm font-normal text-white mt-0.5">
            {{ subtext }}
          </h2>
        </div>
      </div>

      <div class="pb-3 lg:pv-0 text-center">
        <NuxtLink
          class="rounded-3xl border px-4 py-1.5 border-white text-white mt-2 text-m hover:border-primary dark:hover:border-crimson"
          :to="shopLink"
        >
          Shop now
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  imgAlt: {
    type: String,
    default: 'Banner Image',
  },
  text: {
    type: String,
    required: true,
  },
  subtext: {
    type: String,
    required: true,
  },
  shopLink: {
    type: String,
    required: true,
  },
});
</script>