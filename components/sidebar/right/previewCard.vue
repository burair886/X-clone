<template>
  <!-- Trendings -->
  <div
    class="m-2 border bg-gray-50 dark:bg-dim-700 overflow-hidden rounded-2xl"
    :class="XBorderColor"
  >
    <h1
      :class="XBorderColor"
      class="p-3 text-xl font-bold text-gray-900 border-b dark:text-white"
    >
      Trendings
    </h1>
    <Trendings />
    <div
      :class="defaultTransition"
      class="p-3 cursor-pointer text-blue-400 dark:hover:bg-dim-300 hover:bg-gray-100"
    >
      show more
    </div>
  </div>
  <!-- Follow -->
  <div
    class="m-2 border bg-gray-50 dark:bg-dim-700 overflow-hidden rounded-2xl"
    :class="XBorderColor"
  >
    <h1
      :class="XBorderColor"
      class="p-3 text-xl font-bold text-gray-900 border-b dark:text-white"
    >
      Follow
    </h1>
    <Follow />
    <div
      :class="defaultTransition"
      class="p-3 cursor-pointer text-blue-400 dark:hover:bg-dim-300 hover:bg-gray-100"
    >
      show more
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const { defaultTransition, XBorderColor } = useTailwind();
</script>
