<script setup lang="ts">
const { wooNuxtVersionInfo } = useHelpers();
const { wishlistLink } = useAuth();
</script>

<template>
  <footer class="bg-night order-last">
    <div class="container flex flex-wrap justify-between gap-12 my-24 md:gap-24">
      <div class="mr-auto">
        <Logo />
        <WebsiteShortDescription />
        <LangSwitcher class="mt-8" />
      </div>
      <div class="w-3/7 lg:w-auto text-crimson">
        <div class="mb-1 font-semibold">Information</div>
        <div class="text-sm">
          <a href="/" class="py-1.5 block hover:text-maroon">Careers</a>
          <a href="/" class="py-1.5 block hover:text-maroon">Press</a>
          <a href="/" class="py-1.5 block hover:text-maroon">FAQ's</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto text-crimson">
        <div class="mb-1 font-semibold">Products</div>
        <div class="text-sm">
          <NuxtLink to="/products" class="py-1.5 block hover:text-maroon">{{ $t('messages.shop.newArrivals') }}</NuxtLink>
          <NuxtLink to="/products?filter=sale[true]" class="py-1.5 block hover:text-maroon">On sale</NuxtLink>
          <NuxtLink to="/products?orderby=rating&order=ASC&filter=rating[1]" class="py-1.5 block hover:text-maroon">Top rated</NuxtLink>
          <!-- <a href="/" class="py-1.5 block">{{ $t('messages.shop.giftCards') }}</a> -->
        </div>
      </div>
      <div class="w-3/7 lg:w-auto text-crimson">
        <div class="mb-1 font-semibold text-crimson">{{ $t('messages.general.customerService') }}</div>
        <div class="text-sm">
          <NuxtLink to="/contact" class="py-1.5 block text-crimson hover:text-maroon">Contact Us</NuxtLink>
          <a href="/" class="py-1.5 block hover:text-maroon">Shipping & Returns</a>
          <a href="/" class="py-1.5 block hover:text-maroon">Privacy Policy</a>
          <a href="/" class="py-1.5 block hover:text-maroon">Terms & Conditions</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto text-crimson">
        <div class="mb-1 font-semibold">{{ $t('messages.account.myAccount') }}</div>
        <div class="text-sm">
          <NuxtLink to="/my-account/" class="py-1.5 block hover:text-maroon">{{ $t('messages.account.myAccount') }}</NuxtLink>
          <NuxtLink to="/my-account/?tab=orders" class="py-1.5 block hover:text-maroon">{{ $t('messages.shop.orderHistory') }}</NuxtLink>
          <NuxtLink :to="wishlistLink" class="py-1.5 block hover:text-maroon">{{ $t('messages.shop.wishlist') }}</NuxtLink>
          <a href="/" class="py-1.5 block hover:text-maroon">{{ $t('messages.general.newsletter') }}</a>
        </div>
      </div>
    </div>
    <div class="container border-t border-t-gray-500 flex items-center justify-center mb-4">
      <div class="copywrite">
        <p class="py-4 text-xs text-center text-maroon">
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
