<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav>
    <NuxtLink class="hover:text-primary relative inline-flex items-center" to="/product-category/custom">
      {{ $t('messages.general.madeToOrder') }}
      <!-- <span class="absolute top-[-1.5em] right-[-3em] bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">New!</span> -->
    </NuxtLink>
    <NuxtLink class="hover:text-primary" to="/product-category/laptop">{{ $t('messages.general.laptop') }}</NuxtLink>
    <NuxtLink class="hover:text-primary" to="/product-category/desktop">{{ $t('messages.general.desktop') }}</NuxtLink>
    <NuxtLink class="hover:text-primary" to="/product-category/accessories">{{ $t('messages.general.accessories') }}</NuxtLink>
    <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
  </nav>
</template>