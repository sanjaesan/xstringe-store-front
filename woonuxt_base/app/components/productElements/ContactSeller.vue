<template>
    <button
      type="button"
      class="cursor-pointer flex mt-4 text-sm text-black-400 gap-2 items-center"
      :class="{ 'mr-3': showSellerContact }"
      @click.prevent="toggleContactInfo"
    >
      <template v-if="!showSellerContact || copied">
        <Icon name="ion:chatbubble-outline" size="18" v-if="!copied" />
        <span v-if="!copied">Contact Seller</span>
        <span v-else>Copied!</span>
      </template>
  
      <template v-else>
        <Icon
          name="ion:logo-whatsapp"
          size="18"
          class="cursor-pointer"
          style="color: #25D366"
        />
        <span>{{ seller_phone }}</span>
        <Icon
          name="ion:copy-outline"
          size="18"
          class="cursor-pointer"
          @click.prevent.stop="copyTextToClipboard"
        />
      </template>
    </button>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    seller_phone: {
      type: String,
      default: '08061292587',
    },
  });
  
  const showSellerContact = ref(false);
  const copied = ref(false);
  
  const toggleContactInfo = () => {
    showSellerContact.value = !showSellerContact.value;
    if (showSellerContact.value) {
      copied.value = false; 
    }
  };
  
  const copyTextToClipboard = () => {
    if (!navigator.clipboard) {
      console.error('Clipboard API not available');
      return;
    }
  
    navigator.clipboard.writeText(props.seller_phone).then(() => {
      copied.value = true;
      // Automatically reset after 3 seconds
      setTimeout(() => {
        showSellerContact.value = false;
        copied.value = false;
      }, 3000);
    }, (err) => {
      console.error('Async: Could not copy text: ', err);
    });
  };
  </script>