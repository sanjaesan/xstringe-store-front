<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav>
    <NuxtLink class="hover:text-primary" to="/product-category/custom">{{ $t('messages.general.madeToOrder') }}</NuxtLink>
    <NuxtLink class="hover:text-primary" to="/product-category/laptop">{{ $t('messages.general.laptop') }}</NuxtLink>
    <NuxtLink class="hover:text-primary" to="/product-category/desktop">{{ $t('messages.general.desktop') }}</NuxtLink>
    <NuxtLink class="hover:text-primary" to="/product-category/accessories">{{ $t('messages.general.accessories') }}</NuxtLink>
    <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
  </nav>
</template>
