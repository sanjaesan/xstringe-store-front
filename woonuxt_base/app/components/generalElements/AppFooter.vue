<script setup lang="ts">
const { wooNuxtVersionInfo } = useHelpers();
const { wishlistLink } = useAuth();
</script>

<template>
  <footer class="bg-white order-last">
    <div class="container flex flex-wrap justify-between gap-12 my-24 md:gap-24">
      <div class="mr-auto">
        <Logo />
        <WebsiteShortDescription />
        <LangSwitcher class="mt-8" />
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">Information</div>
        <div class="text-sm">
          <a href="/" class="py-1.5 block">Careers</a>
          <a href="/" class="py-1.5 block">Financing</a>
          <a href="/" class="py-1.5 block">FAQ's</a>
        </div>
      </div>
      
      <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">{{ $t('messages.general.customerService') }}</div>
        <div class="text-sm">
          <NuxtLink to="/" class="py-1.5 block">Warranty</NuxtLink>
          <a href="/" class="py-1.5 block">Shipping & Returns</a>
          <a href="/privacy-policy" class="py-1.5 block">Privacy Policy</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">{{ $t('messages.account.myAccount') }}</div>
        <div class="text-sm">
          <NuxtLink to="/my-account/" class="py-1.5 block">{{ $t('messages.account.myAccount') }}</NuxtLink>
          <NuxtLink to="/my-account/?tab=orders" class="py-1.5 block">{{ $t('messages.shop.orderHistory') }}</NuxtLink>
          <NuxtLink :to="wishlistLink" class="py-1.5 block">{{ $t('messages.shop.wishlist') }}</NuxtLink>
        </div>
      </div>
    </div>
    <div class="container border-t flex items-center justify-center mb-4">
      <div class="copywrite">
        <p class="py-4 text-xs text-center">
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
