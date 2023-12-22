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
      <tab>
        <template v-slot:icon>
          <LazyIcon
            class="w-full h-full"
            name="healthicons:home-alt"
            color="black"
          />
        </template>
        <template v-slot:name> Home </template>
      </tab>
    </div>
  </div>
</template>
<script setup>
import twitterX from "~/public/img/twitterX.vue";

const { defaultTransition } = useTailwind();
</script>
