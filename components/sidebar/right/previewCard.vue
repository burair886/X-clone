<template>
  <div
    class="m-2 border bg-gray-50 dark:bg-dim-700 overflow-hidden rounded-2xl"
    :class="XBorderColor"
  >
    <h1 class="p-3 text-xl font-bold text-gray-900 border-b dark:text-white">
      {{ props.title }}
    </h1>
    <slot />
    <div
      :class="defaultTransition"
      class="p-3 cursor-pointer text-blue-400 dark:hover:bg-dim-300 hover:bg-gray-100"
    >
      show more
    </div>
  </div>
</template>
<script setup>
const { defaultTransition, XBorderColor } = useTailwind();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
