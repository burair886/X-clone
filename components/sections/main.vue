<template>
  <div>
    <div
      class="sticky border-b top-0 px-4 py-3 bg-white/75 backdrop-blur-md dark:bg-dim-900/80"
    >
      <h1 class="font-bold text-xl text-gray-800 dark:text-gray-100">
        {{ props.title }}
      </h1>
    </div>
    <div
      v-if="props.loading"
      :class="XBorderColor"
      class="flex items-center justify-center p-4"
    >
      <Spinner />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
const { defaultTransition, XBorderColor } = useTailwind();

const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  loading: {
    type: Boolean,
    require: true,
  },
});
</script>
