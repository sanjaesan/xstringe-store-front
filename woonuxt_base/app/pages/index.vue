<script lang="ts" setup>
import { ProductsOrderByEnum } from '#woo';
const { siteName, description, shortDescription, siteImage } = useAppConfig();

const { data: productData1 } = await useAsyncGql('getProducts', { first: 5, orderby: ProductsOrderByEnum.DATE });
const newProducts = productData1.value.products?.nodes || [];

const { data: productData2 } = await useAsyncGql('getProducts', { first: 5, orderby: ProductsOrderByEnum.POPULARITY });
const popularProducts = productData2.value.products?.nodes || [];

const { data: productData3 } = await useAsyncGql('getProducts', { first: 5, orderby: ProductsOrderByEnum.POPULARITY });
const ratedProducts = productData3.value.products?.nodes || [];

useSeoMeta({
  title: `Home`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});

const cardClass = "flex items-center gap-4 p-6 bg-white dark:bg-night-shade rounded-lg"
const headerTextClass = "text-xl font-semibold"
const textClass = "text-sm";
const imgClass = "dark:bg-gray-300 p-1 rounded-full"
</script>

<template>
  <main>
    <HeroSlider />
    <div class="container flex flex-wrap items-center justify-center my-16 text-center gap-x-8 gap-y-4 brand lg:justify-between">
      <img src="/images/asus.svg" alt="Brand 1" width="70" height="30" />
      <img src="/images/lenovo.svg" alt="Brand 2" width="100" height="30" />
      <img src="/images/razer.svg" alt="Brand 3" width="60" height="30" />
      <img src="/images/alien.svg" alt="Brand 4" width="70" height="30" />
      <img src="/images/msi.svg" alt="Brand 5" width="80" height="35" />
      <img src="/images/nvidia.svg" alt="Brand 6" width="70" height="35" />
      <img src="/images/logitech.svg" alt="Brand 7" width="50" height="25" />
      <img src="/images/predator.svg" alt="Brand 8" width="65" height="30" />
      <img src="/images/radeon.svg" alt="Brand 9" width="120" height="80" />
    </div>
    <section class="container my-16" v-if="newProducts">
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl text-crimson">{{ $t('messages.shop.newProduct') }}</h2>
        <NuxtLink class="text-maroon" to="/products">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <ProductRow :products="newProducts" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8" />
    </section>
    <section class="container ">
      <HeroBanner 
        imgSrc="/images/amd-banner.png"
        text="Unlock unparalleled gaming experiences with"
        subtext="Radeon™ RX 9000 Series PCs Available Now."
        shopLink="/product"
      />
    </section>
    <section class="container my-16" v-if="popularProducts">
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl text-crimson">{{ $t('messages.shop.popularProducts') }}</h2>
        <NuxtLink class="text-maroon" to="/products">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <ProductRow :products="popularProducts" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8" />
    </section>
    <section class="container">
      <div class="grid gap-4 my-24 md:grid-cols-2 lg:grid-cols-4">
        <div :class="cardClass" class="shipping">
          <img src="/icons/shipping.svg" :class="imgClass" class="py-3.5" width="60" height="60" alt="Free Shipping" loading="lazy" />
          <div>
            <h3 :class="headerTextClass">Free Shipping</h3>
            <p :class="textClass">Desktops come with free shipping</p>
          </div>
        </div>
        <div :class="cardClass" class="call">
          <img src="/icons/call.svg" :class="imgClass" width="60" height="60" alt="Money Back" loading="lazy" />
          <div>
            <h3 :class="headerTextClass">Support</h3>
            <p :class="textClass">We provide 24/7 support.</p>
          </div>
        </div>
        <div :class="cardClass" class="certified">
          <img src="/icons/certified.svg" :class="imgClass" width="60" height="60" alt="Secure Payment" loading="lazy" />
          <div>
            <h3 :class="headerTextClass">Certified</h3>
            <p :class="textClass">We offer satisfactory product.</p>
          </div>
        </div>
        <div :class="cardClass" class="warranty">
          <img src="/icons/warranty.svg" :class="imgClass" width="60" height="60" alt="Support 24/7" loading="lazy" />
          <div>
            <h3 :class="headerTextClass">Standard warranty</h3>
            <p :class="textClass">We provide 2 years warranty</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container my-16" v-if="ratedProducts">
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl text-crimson">{{ $t('messages.shop.ratedProduct') }}</h2>
        <NuxtLink class="text-maroon" to="/products?orderby=rating&order=ASC&filter=rating[1]">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <ProductRow :products="ratedProducts" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8" />
    </section>
    <section class="container mb-10 ">
      <HeroBanner 
        imgSrc="/images/amd-banner.png"
        text="Powering the Future of Creativity and Play"
        subtext="NVIDIA® GeForce RTX™ 5000 Series cards Available Now."
        shopLink="/product"
      />
    </section>
  </main>
</template>

<style scoped>
.brand img {
  max-height: min(8vw, 120px);
  object-fit: contain;
  object-position: center;
}
</style>
