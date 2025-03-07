<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav>
    <NuxtLink to="/product-category/custom">{{ $t('messages.general.madeToOrder') }}</NuxtLink>
    <NuxtLink to="/product-category/laptop">{{ $t('messages.general.laptop') }}</NuxtLink>
    <NuxtLink to="/product-category/desktop">{{ $t('messages.general.desktop') }}</NuxtLink>
    <NuxtLink to="/product-category/accessories">{{ $t('messages.general.accessories') }}</NuxtLink>
    <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
  </nav>
</template>
