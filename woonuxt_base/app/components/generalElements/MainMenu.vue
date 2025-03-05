<script setup lang="ts">
const { wishlistLink } = useAuth();

const textClass = "text-white hover:text-maroon hover:border-b border-maroon"
</script>

<template>
  <nav>
    <NuxtLink to="/product-category/custom" :class="textClass">{{ $t('messages.general.custom') }}</NuxtLink>
    <NuxtLink to="/product-category/laptop" :class="textClass">{{ $t('messages.general.laptop') }}</NuxtLink>
    <NuxtLink to="/product-category/desktop" :class="textClass">{{ $t('messages.general.desktop') }}</NuxtLink>
    <NuxtLink to="/product-category/accessories" :class="textClass">{{ $t('messages.general.accessories') }}</NuxtLink>
    <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false" :class="textClass">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false" :class="textClass">My Account</NuxtLink>
  </nav>
</template>
