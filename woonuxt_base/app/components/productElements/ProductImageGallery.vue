<script setup lang="ts">
const { FALLBACK_IMG } = useHelpers();

const props = defineProps({
  mainImage: { type: Object, required: true },
  gallery: { type: Object, required: true },
  node: { type: Object as PropType<Product | Variation>, required: true },
  activeVariation: { type: Object, required: false },
  maxImages: { type: Number, default: 7 },
});

const primaryImage = computed(() => ({
  sourceUrl: props.mainImage.sourceUrl || FALLBACK_IMG,
  title: props.mainImage.title,
  altText: props.mainImage.altText,
  databaseId: props.mainImage.databaseId,
}));

const imageToShow = ref(primaryImage.value);

const galleryImages = computed(() => {
  return [primaryImage.value, ...props.gallery.nodes].filter((img, index, self) => index === self.findIndex((t) => t?.databaseId === img?.databaseId));
});

const displayedImages = computed(() => {
  return galleryImages.value.slice(0, props.maxImages);
});

const remainingImages = computed(() => {
  return galleryImages.value.slice(props.maxImages);
});

const changeImage = (image: any) => {
  if (image) imageToShow.value = image;
};

watch(
  () => props.activeVariation,
  (newVal) => {
    if (newVal?.image) {
      const foundImage = galleryImages.value.find((img) => img.databaseId === newVal.image?.databaseId);
      if (foundImage) imageToShow.value = foundImage;
    }
  },
);

const imgWidth = 640;

// Modal State
const showModal = ref(false);
const remainingImagesToShow = ref([]);
const modalMainImage = ref(null);

const openModal = () => {
  showModal.value = true;
  remainingImagesToShow.value = remainingImages.value;
  if (remainingImages.value.length > 0) {
    modalMainImage.value = remainingImages.value[0];
  }
};

const closeModal = () => {
  showModal.value = false;
};

const setModalMainImage = (image) => {
  modalMainImage.value = image;
};
</script>

<template>
  <div>
    <SaleBadge :node class="absolute text-base top-4 right-4" />
    <NuxtImg
      class="rounded-xl object-contain w-full min-w-[350px]"
      :width="imgWidth"
      :height="imgWidth"
      :alt="imageToShow.altText || node.name"
      :title="imageToShow.title || node.name"
      :src="imageToShow.sourceUrl || FALLBACK_IMG"
      fetchpriority="high"
      placeholder
      placeholder-class="blur-xl" />
    <div v-if="gallery.nodes.length" class="my-4 gallery-images">
      <div v-for="(galleryImg, index) in displayedImages" :key="galleryImg.databaseId" class="relative">
        <NuxtImg
          class="cursor-pointer rounded-xl"
          :width="imgWidth"
          :height="imgWidth"
          :src="galleryImg.sourceUrl"
          :alt="galleryImg.altText || node.name"
          :title="galleryImg.title || node.name"
          placeholder
          placeholder-class="blur-xl"
          loading="lazy"
          @click.native="changeImage(galleryImg)" />
        <div
          v-if="index === maxImages - 1 && remainingImages.length > 0"
          class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl text-white text-sm md:text-lg font-semibold cursor-pointer"
          @click.stop="openModal()">
          +{{ remainingImages.length }} more
        </div>
      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-4 w-11/12 max-w-lg">
        <NuxtImg
          v-if="modalMainImage"
          :src="modalMainImage.sourceUrl"
          :alt="modalMainImage.altText || node.name"
          :title="modalMainImage.title || node.name"
          class="rounded-xl w-full mb-4" />
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtImg
            v-for="img in remainingImagesToShow"
            :key="img.databaseId"
            :src="img.sourceUrl"
            :alt="img.altText || node.name"
            :title="img.title || node.name"
            width="70"
            height="70"
            class="rounded-xl cursor-pointer"
            @click="setModalMainImage(img)" />
        </div>
        <button @click="closeModal" class="mt-4 bg-gray-200 px-4 py-2 rounded w-full">Close</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-images {
  display: flex;
  overflow-x: auto;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
}

.gallery-images img {
  width: 72px;
  aspect-ratio: 5/6;
  object-fit: cover;
}

@media (min-width: 768px) {
  .gallery-images {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));

    img {
      width: 100%;
    }
  }
}
</style>
