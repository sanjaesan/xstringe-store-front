<script setup lang="ts">
interface Props {
  attributes: any[];
  defaultAttributes?: { nodes: VariationAttribute[] } | null;
}

const { attributes, defaultAttributes } = defineProps<Props>();
const emit = defineEmits(['attrs-changed']);

const activeVariations = ref<VariationAttribute[]>([]);

const getSelectedName = (attr: any, activeVariation?: VariationAttribute) => {
  if (attr?.terms?.nodes && activeVariation) {
    return attr.terms.nodes.find((node: { slug: string }) => node.slug === activeVariation.value)?.name;
  }

  return activeVariation?.value || '';
};

const updateAttrs = () => {
  const selectedVariations = attributes.map((row): VariationAttribute => {
    const radioValue = document.querySelector(`.name-${row.name.toLowerCase()}:checked`) as HTMLInputElement;
    const dropdownValue = document.querySelector(`#${row.name}`) as HTMLSelectElement;
    const name = row.name.charAt(0).toLowerCase() + row.name.slice(1);
    const value = radioValue?.value ?? dropdownValue?.value ?? '';
    return { name, value };
  });

  activeVariations.value = selectedVariations;
  emit('attrs-changed', selectedVariations);
};

const setDefaultAttributes = () => {
  if (defaultAttributes?.nodes) {
    defaultAttributes?.nodes.forEach((attr: VariationAttribute) => {
      const radio = document.querySelector(`.name-${attr.name?.toLowerCase()}[value="${attr.value}"]`) as HTMLInputElement;
      if (radio) radio.checked = true;
      const dropdown = document.querySelector(`#${attr.name}`) as HTMLSelectElement;
      if (dropdown) dropdown.value = attr.value || '';
    });
  }
};

const className = (name: string) => `name-${name.toLowerCase()}`;
const sampleImage = 'https://cdn.shopify.com/s/files/1/0228/7629/1136/files/G2FocusBlack.png?v=1696524617';
onMounted(() => {
  setDefaultAttributes();
  updateAttrs();
});
</script>

<template>
  <div class="flex flex-col gap-1 justify-between" v-if="attributes">
    <div v-for="(attr, i) in attributes" :key="i">
      <!-- LOCAL -->
      <div v-if="attr.scope == 'LOCAL'" class="flex flex-wrap py-2 relative justify-between">
      <div class="grid gap-2">
        <div class="text-sm">
          {{ attr.label }}
          <span v-if="activeVariations.length && activeVariations[i]" class="text-black-400">: {{ getSelectedName(attr, activeVariations[i]) }}</span>
        </div>
        <div class="flex gap-2">
          <span v-for="(option, index) in attr.options" :key="index">
            <label :for="`${option}_${index}`">
              <input
                :id="`${option}_${index}`"
                :ref="attr.name"
                class="hidden"
                :checked="index == 0"
                type="radio"
                :class="`name-${attr.name.toLowerCase()}`"
                :name="attr.name"
                :value="option"
                @change="updateAttrs" />
              <span class="radio-button" :class="`picker-${option}`" :title="`${attr.name}: ${option}`">{{ option }}</span>
            </label>
          </span>
        </div>
      </div>
    </div>

      <!-- COLOR SWATCHES -->
      <div v-else-if="attr.name == 'pa_color' || attr.name == 'color'">
        <Accordion :height="attr.height">
          <template #title>
            <div class="text-black-300">
                <div class="text-base font-medium">{{ $t('messages.general.color') }}</div>
                <span v-if="activeVariations.length" class="text-sm text-black-400 font-normal">
                  {{ getSelectedName(attr, activeVariations[i]) }}
                </span>
            </div>
          </template>

          <template #content>
            <div class="flex gap-2">
              <span v-for="(term, termIndex) in attr.terms.nodes" :key="termIndex">
                <Tooltip :text="term.name">
                  <label :for="`${term.slug}_${termIndex}`">
                    <input
                      :id="`${term.slug}_${termIndex}`"
                      :ref="attr.name"
                      class="hidden"
                      :checked="termIndex == 0"
                      type="radio"
                      :class="className(attr.name)"
                      :name="attr.name"
                      :value="term.slug"
                      @change="updateAttrs" />
                    <span class="color-button" :class="`color-${term.slug}`" :title="`${attr.name}: ${term}`"></span>
                  </label>
                </Tooltip>
              </span>
            </div>
          </template>
        </Accordion>
      </div>

      <!-- DROPDOWN -->
      <div v-else-if="attr.terms.nodes && attr.terms.nodes?.length > 8" class="flex flex-wrap py-2 relative justify-between">
        <div class="grid gap-2">
          <div class="text-sm">
            {{ attr.label }} <span v-if="activeVariations.length" class="text-black-400">{{ getSelectedName(attr, activeVariations[i]) }}</span>
          </div>
          <select :id="attr.name" :ref="attr.name" :name="attr.name" required class="border-white shadow" @change="updateAttrs">
            <option disabled hidden>{{ $t('messages.general.choose') }} {{ decodeURIComponent(attr.label) }}</option>
            <option v-for="(term, dropdownIndex) in attr.terms.nodes" :key="dropdownIndex" :value="term.slug" v-html="term.name" :selected="dropdownIndex == 0" />
          </select>
        </div>
      </div>

      <!-- CHECKBOXES -->
      <div v-else>
        <Accordion :height="attr.height">
          <template #title>
            <div class="flex items-center">
              <div class="hidden mr-4">
                <img :src="sampleImage" class="h-12 w-14 transition delay-150 duration-300 ease-in-out hover:scale-125" />
              </div>
              <div class="text-black-300">
                <div class="text-base font-medium">{{ attr.label }}</div>
                <span v-if="activeVariations.length" class="text-sm text-black-400 font-normal">
                  {{ getSelectedName(attr, activeVariations[i]) }}
                </span>
              </div>
            </div>
        </template>

        <template #content>
          <div class="flex flex-wrap gap-3">
            <span class="mt-2" v-for="(term, index) in attr.terms.nodes" :key="index">
              <label class="radio-button text-center" :for="`${term.slug}_${index}`">
                <input
                  :id="`${term.slug}_${index}`"
                  :ref="attr.name"
                  class="hidden"
                  :checked="index == 0"
                  type="radio"
                  :class="className(attr.name)"
                  :name="attr.name"
                  :value="term.slug"
                  @change="updateAttrs" 
                />

                <div class="m-h-[80px] hidden">
                  <img :src="term.img || sampleImage" class="h-[90px] mx-auto" />
                </div>

                <span class="text-sm font-normal mt-1.5 outline-none focus-none" :class="`picker-${term.slug}`" :title="`${attr.name}: ${term.slug}`">{{ term.name }}</span>
              </label>
            </span>
          </div>
        </template>
      </Accordion>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">

.radio-button {
  @apply border-transparent border-white rounded-lg cursor-pointer outline bg-gray-50 border-2 text-sm text-center outline-2 outline-gray-100 py-1.5 px-3 transition-all text-gray-800 inline-block hover:outline-gray-400;
}

.radio-button:has(input:checked) {
  @apply outline outline-2 outline-gray-500;
}

.color-button {
  @apply border-transparent border-white cursor-pointer outline bg-gray-50 border-2 rounded-2xl text-sm text-center outline-2 outline-gray-100 transition-all text-gray-800 inline-block hover:outline-gray-500;
  width: 2rem;
  height: 2rem;
}

.color-green {
  @apply bg-green-500;
}

.color-blue {
  @apply bg-blue-500;
}

.color-red {
  @apply bg-red-500;
}

.color-yellow {
  @apply bg-yellow-500;
}

.color-orange {
  @apply bg-orange-500;
}

.color-purple {
  @apply bg-purple-500;
}

.color-black {
  @apply bg-black;
}
</style>
