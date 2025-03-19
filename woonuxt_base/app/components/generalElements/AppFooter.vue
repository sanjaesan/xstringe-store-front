<script setup lang="ts">
const { wooNuxtVersionInfo } = useHelpers();
const { wishlistLink } = useAuth();

const { openWhatsapp } = useUtils();

const socialBtnClass = "bg-transparent border rounded-full flex text-left p-2 mr-4"
const iconClass = "transition-transform transform transform-origin-center"
</script>

<template>
  <footer class="bg-white order-last">
    <div class="container flex flex-wrap justify-between gap-12 mt-8 mb-24 md:my-24 md:gap-24">
      <div class="mr-auto">
        <Logo class="hidden" />
        <div class="my-4">
          <div class="flex">
            <a href="#" type="button" :class="socialBtnClass" class="facebook" title="Facebook">
              <Icon name="ion:logo-facebook" size="18" :class="iconClass" />
            </a>

            <a href="#" type="button" :class="socialBtnClass" class="instagram" title="Instagram">
              <Icon name="ion:logo-instagram" size="18" :class="iconClass" />
            </a>

            <a href="#" type="button" :class="socialBtnClass" class="twitter" title="Twitter">
              <Icon name="ion:logo-twitter" size="18" :class="iconClass" />
            </a>

            <a href="#" type="button" :class="socialBtnClass" class="whatsapp" title="Whatsapp">
              <Icon name="ion:logo-whatsapp" size="18" :class="iconClass" />
            </a>

            <a href="#" type="button" :class="socialBtnClass" title="Tiktok" class="tiktok">
              <Icon name="ion:logo-tiktok" size="18" :class="iconClass" />
            </a>
          </div>
          <div class="text-base mt-1">Email us: <a href="mailto:sales@xstringe.com" class="text-blue-600">sales@xstringe.com</a></div>
        </div>

        <WebsiteShortDescription />
        <LangSwitcher class="mt-8" />
      </div>
      <div class="hidden w-auto">
        <div class="mb-1 font-semibold">Information</div>
        <div class="text-sm">
          <a href="/" class="py-1.5 block">Careers</a>
          <a href="/" class="py-1.5 block">Financing</a>
          <a href="/" class="py-1.5 block">FAQ's</a>
        </div>
      </div>
      
      <div class="w-auto">
        <div class="mb-1 font-semibold">{{ $t('messages.general.customerService') }}</div>
        <div class="text-sm">
          <!-- <NuxtLink to="/" class="py-1.5 block">Warranty</NuxtLink> -->
          <a href="/privacy-policy" class="py-1.5 block">Privacy Policy</a>
          <a href="#" @click.prevent="openWhatsapp()" class="py-1.5 block">Contact Us</a>
        </div>
      </div>
      <div class="w-auto mr-auto lg:m-0">
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

.whatsapp:hover {
  border-color: #075E54;

  & .iconify {
    color: #075E54;
  }
}

.twitter:hover {
  border-color: #1DA1F2;

  & .iconify {
    color: #1DA1F2;
  }
}

.instagram:hover {
  border-color: #EE2A7B;

  & .iconify {
    color: #EE2A7B;
  }
}

.facebook:hover {
  border-color: #1877F2;

  & .iconify {
    color: #1877F2;
  }
}

.tiktok:hover {
  border-color: #EE1D51;

  & .iconify {
    color: #EE1D51;
  }
}
</style>
