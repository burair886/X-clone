<template>
  <div class="min-h-full" :class="{ dark: darkMode }">
    <div class="flex mx-auto sm:px-6 lg:px-8 lg:gap-5 lg:max-w-7xl">
      <!-- Left Sidebar -->
      <div class="hidden md:block xs:columns-1 lg:columns-4 bg-red-600">
        <div class="sticky top-0">
          <div class="h-8 w-8">
            <AssetsLogoTwitterX />
          </div>
        </div>
      </div>
      <!-- Main page -->
      <section>
        <slot />
      </section>
      <!-- Right Sidebar -->
      <section>right</section>
    </div>
  </div>
</template>
<script setup>
import AssetsLogoTwitterX from "../assets/logo/twitterX.vue";
const darkMode = ref(true);
</script>
