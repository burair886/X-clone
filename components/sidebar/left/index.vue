<template>
  <div class="h-screen">
    <div class="sticky top-0">
      <div
        class="my-2 p-2 hover:bg-blue-50 dark:hover:bg-white/20 rounded-full w-min"
        :class="defaultTransition"
      >
        <nuxt-link to="/">
          <div class="h-8 w-8">
            <twitterX class="text-dim-100 antialiased dark:text-white" />
          </div>
        </nuxt-link>
      </div>
      <div v-for="(item, index) in leftSide" :key="index">
        <tab active>
          <template v-slot:icon>
            <LazyIcon class="w-full h-full" :name="item.icon" />
          </template>
          <template v-slot:name>
            <h1>{{ item.name }}</h1>
          </template>
        </tab>
      </div>
    </div>
  </div>
</template>
<script setup>
import twitterX from "~/public/img/twitterX.vue";

const { defaultTransition } = useTailwind();

const leftSide = ref([
  {
    name: "Home",
    icon: "healthicons:home-alt",
  },
  {
    name: "Explore",
    icon: "mingcute:hashtag-fill",
  },
  {
    name: "Messages",
    icon: "solar:inbox-line-broken",
  },
  {
    name: "Bookmarks",
    icon: "ic:round-bookmarks",
  },
  {
    name: "Lists",
    icon: "material-symbols:lists-rounded",
  },
  {
    name: "Profile",
    icon: "material-symbols:person-pin",
  },
  {
    name: "More",
    icon: "gg:more",
  },
]);
</script>
