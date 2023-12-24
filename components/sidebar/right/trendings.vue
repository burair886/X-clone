<template>
  <div
    :class="wrapperClasses"
    class="p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 border-b"
    v-for="(item, index) in trendings"
    :key="index"
  >
    <h1 class="capitalize font-bold text-gray-800 dark:text-white text-base">
      {{ item.title }}
    </h1>
    <p class="text-gray-500 text-xs">{{ item.counts }}</p>
  </div>
</template>
<script setup>
const { defaultTransition, XBorderColor } = useTailwind();

const wrapperClasses = computed(() => `${defaultTransition} ${XBorderColor}`);

const trendings = ref([
  {
    title: "nothing",
    counts: "20k Tweets",
  },
  {
    title: "nothing",
    counts: "20k Tweets",
  },
  {
    title: "nothing",
    counts: "20k Tweets",
  },
]);
</script>
