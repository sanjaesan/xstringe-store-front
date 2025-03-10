<template>
    <div v-if="!isAccessories" class="my-4">
        <span class="text-black-400 text-base">{{ $t('messages.shop.specification') }} </span>

        <div class="mt-3">
            <template v-for="(spec, i) in specs">
                <Accordion class="mt-2">
                    <template #title>
                        <div class="flex items-center">
                            <div>
                                <img :src="spec.img" class="h-12 w-14 transition delay-150 duration-300 ease-in-out hover:scale-125" />
                            </div>
                            <div class="ml-4 text-black-300">
                                <div class="text-base font-medium">{{ spec.title }}</div>
                                <span class="text-sm font-normal">{{ spec.content }}</span>
                            </div>
                        </div>
                    </template>

                    <template #content>
                        <div>
                            <div class="m-h-[80px]">
                                <img :src="spec.img" class="h-[90px]" />
                            </div>
                            <span class="text-sm font-normal mt-1">{{ spec.content }}</span>
                        </div>
                    </template>
                </Accordion>
            </template>
        </div>
    </div>
</template>

<script setup>
import Accordion from '../generalElements/Accordion.vue';

const { t } = useI18n();

const props = defineProps({
  productCategory: {
    type: String,
    required: true,
  },
});

const isAccessories = computed(() => props.productCategory === 'accessories');
const specs = [
    {
        title: 'Chassis.',
        content: 'Black',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/G2FocusBlack.png?v=1696524617',
    },{
        title: 'Processor.',
        content: 'Intel® Core™ i5-12400F 2.5 - 4.4GHz 6-Cores',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/12thi5.png?v=1686693708',
    },{
        title: 'Graphics card.',
        content: 'NVIDIA® GeForce RTX™ 4060 8GB GDDR6',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/rtx4060.png?v=1688044709',
    },{
        title: 'Motherboard.',
        content: 'ASROCK B660M-HDV',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/dpo_custom_option_70720_asrock-b660m-hdv.png?v=1699030851',
    },{
        title: 'Power supply.',
        content: 'MSI MPG 750W GOLD',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/MAGA750GL.png?v=1719524578',
    },{
        title: 'Memory.',
        content: '16GB DDR4 3600MHz T-Force Delta RGB',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/DDR43200MHzT-FORCERGBX4_164f42cc-8816-4df1-8559-c4c5e9a70453.png?v=1683212143',
    },{
        title: 'Operating system drive.',
        content: '1TB NVME SSD GEN 4',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/dpo_custom_option_72143_dpoxpcdrive.png?v=1698088538',
    },{
        title: 'Operating system.',
        content: 'Windows 11 Home',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/t/155/assets/dpo_custom_option_67951_w11home.png?v=1675219357',
    },{
        title: 'Cooling.',
        content: '120MM RGB BK Tower Cooler',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/DeepcoolAG400-Black.png?v=1704993458',

    },{
        title: 'Networking.',
        content: 'USB Wifi Adaptor',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/USBWIFI_fa3cf6c0-1f11-41bf-ac3c-b2c024bb19a1.png?v=1683235449',
    },
    {
        title: 'Extras.',
        content: 'USB Windows Recovery',
        img: 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/USBRecoveryDrive_63bea45e-8832-4ced-89d1-66bb5634ffb7.png?v=1689697255',
    }
];
</script>