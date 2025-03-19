<template>
    <button type="button" class="cursor-pointer flex mt-4 text-sm text-black-400 gap-2 items-center" :class="{'mr-3': showSellerContact}" @click.prevent="showSellerContact = true">
        <template v-if="!showSellerContact">
            <Icon name="ion:call-outline" size="18" />
            <span>Contact Seller</span>
        </template>

        <template v-else>
            <span v-if="!copied">{{ sellerContact }}</span>
            <span v-else>Copied!</span>

            <Icon name="ion:call-outline" size="18" class="cursor-pointer lg:hidden text-blue-500" @click.prevent.stop="openContactSeller" />
            <Icon name="ion:logo-whatsapp" size="18" class="cursor-pointer" style="color: #25D366" @click.prevent.stop="triggerWhatsapp" />
            <Icon name="ion:copy-outline" size="18" class="cursor-pointer" @click.prevent.stop="copyTextToClipboard" />
        </template>
    </button>
</template>

<script setup>
const { openWhatsapp } = useUtils();
const props = defineProps({
    seller_phone: {
        type: String,
        default: '15551234567',
    }
});

const showSellerContact = ref(false)
const copied = ref(false)

const sellerContact = computed(() => '+'+Number(props.seller_phone))
const openContactSeller = () => {
    window.open('tel:'+sellerContact.value);
    resetVisibility();
}

const triggerWhatsapp = () => {
    openWhatsapp(props.seller_phone);
    resetVisibility();
}

function copyTextToClipboard() {
    if (!navigator.clipboard) {
        throw new Error();
    }

    navigator.clipboard.writeText(sellerContact.value).then(() => {
        copied.value = true;
        resetVisibility();
    }, (err) => {
        console.error('Async: Could not copy text: ', err);
    })
}

function resetVisibility() {
    // after copy, reset seller contact visibility after 2 secs
    setTimeout(() => {
        copied.value = false;
        showSellerContact.value = false;
    }, 3000);
}

watch(showSellerContact, () => {
    console.log({dd: showSellerContact.value})
    if(showSellerContact.value) {
        // reset seller contact visibility after 10 secs
        setTimeout(() => {
            copied.value = false;
            showSellerContact.value = false
        }, 10000);
    }
});
</script>
