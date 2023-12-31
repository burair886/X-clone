<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full container mx-auto">
        <div
          class="flex mx-auto justify-between sm:px-6 lg:px-3 lg:gap-5 lg:max-w-7xl"
        >
          <!-- Left Sidebar -->
          <left class="hidden md:block" />
          <!-- Main page -->
          <section class="w-full h-screen border-x" :class="XBorderColor">
            <router-view />
          </section>
          <!-- Right Sidebar -->
          <div class="w-5/12 hidden md:block">
            <div class="sticky top-0"><right /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { defaultTransition, XBorderColor } = useTailwind();
const darkMode = ref(false);
</script>
