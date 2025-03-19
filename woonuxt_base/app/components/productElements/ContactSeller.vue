<template>
    <button type="button" class="cursor-pointer flex mt-4 text-sm text-black-400 gap-2 items-center" @click.prevent="openContactSeller">
        <template v-if="!showSellerContact">
            <Icon name="ion:call-outline" size="18" />
            <span>Contact Seller</span>
        </template>

        <template v-else>
            <template v-if="!copied">
                <span class="flex">{{ sellerContact }}</span>
                <Icon name="ion:copy-outline" size="18" class="cursor-pointer" @click.prevent.stop="copyTextToClipboard" />
            </template>
            <span class="mr-3" v-else>Copied!</span>
        </template>
    </button>
</template>

<script setup>
const props = defineProps({
    seller_phone: {
        type: String,
        default: '15551234567',
    }
});

const showSellerContact = ref(false)
const copied = ref(false)

const sellerContact = computed(() => '+'+props.seller_phone)
const openContactSeller = () => {
    window.open('tel:'+sellerContact.value);
    showSellerContact.value = true;
}

function copyTextToClipboard() {
    if (!navigator.clipboard) {
        throw new Error();
    }

    navigator.clipboard.writeText(sellerContact.value).then(() => {
        copied.value = true;

        // after copy, reset seller contact visibility after 2 secs
        setTimeout(() => {
            copied.value = false;
            showSellerContact.value = false;
        }, 2000);
    }, (err) => {
        console.error('Async: Could not copy text: ', err);
    })
}

watchwatch(showSellerContact.value, (value) => {
    if(value) {
        // reset seller contact visibility after 10 secs
        setTimeout(() => {
            showSellerContact.value = false
        }, 10000);
    }
});
</script>
