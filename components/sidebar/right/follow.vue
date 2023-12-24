<template>
  <div
    class="flex justify-between items-center p-2"
    v-for="(item, index) in follow"
    :key="index"
  >
    <div class="flex flex-row">
      <img class="w-10 h-10 rounded-full" :src="item.src" />
      <div class="flex flex-col ml-2">
        <h1 class="text-sm font-semibold dark:text-white text-gray-900">
          {{ item.name }}
        </h1>
        <p class="text-xs text-gray-400">{{ item.handle }}</p>
      </div>
    </div>
    <div class="h-full">
      <button
        class="px-4 py-2 text-xs rounded-full font-bold text-white bg-black dark:text-black dark:bg-white"
      >
        Follow
      </button>
    </div>
  </div>
</template>
<script setup>
const follow = ref([
  {
    name: "anyOne",
    handle: "@anyOne",
    src: "https://picsum.photos/200/200",
  },
  {
    name: "anyOne",
    handle: "@anyOne",
    src: "https://picsum.photos/200/200",
  },
  {
    name: "anyOne",
    handle: "@anyOne",
    src: "https://picsum.photos/200/200",
  },
]);
</script>
