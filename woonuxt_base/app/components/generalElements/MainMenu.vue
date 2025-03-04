<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav>
    <NuxtLink to="/custom">{{ $t('messages.general.custom') }}</NuxtLink>
    <NuxtLink to="/Laptops">{{ $t('messages.general.laptop') }}</NuxtLink>
    <NuxtLink to="/Desktops">{{ $t('messages.general.desktop') }}</NuxtLink>
    <NuxtLink to="/Accessories">{{ $t('messages.general.accessories') }}</NuxtLink>
    <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
  </nav>
</template>
