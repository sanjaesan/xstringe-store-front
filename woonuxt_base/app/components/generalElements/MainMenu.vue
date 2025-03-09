<script setup lang="ts">
const { wishlistLink } = useAuth();

const textClass = "hover:text-primary dark:text-white dark:hover:text-maroon hover:border-b border-maroon"
</script>

<template>
  <nav>
    <NuxtLink class="relative inline-flex items-center" :class="textClass" to="/product-category/custom">
      {{ $t('messages.general.madeToOrder') }}
      <!-- <span class="absolute top-[-1.5em] right-[-3em] bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">New!</span> -->
    </NuxtLink>
    <NuxtLink :class="textClass" to="/product-category/laptop">{{ $t('messages.general.laptop') }}</NuxtLink>
    <NuxtLink :class="textClass" to="/product-category/desktop">{{ $t('messages.general.desktop') }}</NuxtLink>
    <NuxtLink :class="textClass" to="/product-category/accessories">{{ $t('messages.general.accessories') }}</NuxtLink>
    <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
  </nav>
</template>