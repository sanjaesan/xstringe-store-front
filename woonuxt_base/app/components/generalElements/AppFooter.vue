<script setup lang="ts">
const { wooNuxtVersionInfo } = useHelpers();
const { wishlistLink } = useAuth();

const containerClass = "w-3/7 lg:w-auto dark:text-gray-300";
const headerClass = "mb-1 text-base font-semibold";
const textContainerClass = "text-sm font-normal";
const textClass = "py-1.5 block dark:hover:text-white hover:no-underline";
</script>

<template>
  <footer class="dark:bg-night order-last">
    <div class="container flex flex-wrap justify-between gap-12 my-24 md:gap-24">
      <div class="mr-auto">
        <Logo />
        <WebsiteShortDescription />
        <LangSwitcher class="mt-8" />
      </div>
      <div :class="containerClass">
        <div :class="headerClass">Information</div>
        <div :class="textContainerClass">
          <a href="/" :class="textClass">Careers</a>
          <a href="/" :class="textClass">Press</a>
          <a href="/" :class="textClass">FAQ's</a>
        </div>
      </div>
      <div :class="containerClass">
        <div :class="headerClass">Products</div>
        <div :class="textContainerClass">
          <NuxtLink to="/products" :class="textClass">{{ $t('messages.shop.newArrivals') }}</NuxtLink>
          <NuxtLink to="/products?filter=sale[true]" :class="textClass">On sale</NuxtLink>
          <NuxtLink to="/products?orderby=rating&order=ASC&filter=rating[1]" :class="textClass">Top rated</NuxtLink>
          <!-- <a href="/" :class="textClass">{{ $t('messages.shop.giftCards') }}</a> -->
        </div>
      </div>
      <div :class="containerClass">
        <div :class="headerClass">{{ $t('messages.general.customerService') }}</div>
        <div :class="textContainerClass">
          <NuxtLink to="/" :class="textClass">Contact Us</NuxtLink>
          <a href="/" :class="textClass">Shipping & Returns</a>
          <a href="/" :class="textClass">Privacy Policy</a>
          <a href="/" :class="textClass">Terms & Conditions</a>
        </div>
      </div>
      <div :class="containerClass">
        <div :class="headerClass">{{ $t('messages.account.myAccount') }}</div>
        <div :class="textContainerClass">
          <NuxtLink to="/my-account/" :class="textClass">{{ $t('messages.account.myAccount') }}</NuxtLink>
          <NuxtLink to="/my-account/?tab=orders" :class="textClass">{{ $t('messages.shop.orderHistory') }}</NuxtLink>
          <NuxtLink :to="wishlistLink" :class="textClass">{{ $t('messages.shop.wishlist') }}</NuxtLink>
          <a href="/" :class="textClass">{{ $t('messages.general.newsletter') }}</a>
        </div>
      </div>
    </div>
    <div class="container border-t flex items-center justify-center mb-4">
      <div class="copywrite">
        <p class="py-4 text-sm text-center text-gray-400">
          © 2025-Xstringe, All rights reserved
        </p>
      </div>
      <SocialIcons class="ml-auto" />
    </div>
  </footer>
</template>

<style scoped lang="postcss">
a {
  @apply hover:underline;
}
</style>
