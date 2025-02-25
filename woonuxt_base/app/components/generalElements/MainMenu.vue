<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav>
    <NuxtLink to="/">
      <span class="text-crimson">{{ $t('messages.general.home') }}</span>
    </NuxtLink>
    <NuxtLink to="/products">
      <span class="text-crimson">{{ $t('messages.general.allProducts') }}</span>
    </NuxtLink>
    <NuxtLink to="/categories" class="text-red-4"> 
      <span class="text-crimson">{{ $t('messages.shop.category', 2) }}</span>
    </NuxtLink>
    <NuxtLink class="lg:hidden text-red" :to="wishlistLink" :prefetch="false">
      <span class="text-crimson">Wishlist</span>
    </NuxtLink>
    <NuxtLink class="lg:hidden text-red" to="/my-account" :prefetch="false">
      <span class="text-crimson">My Account</span>
    </NuxtLink>
  </nav>
</template>
