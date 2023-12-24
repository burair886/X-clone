<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div
          class="flex mx-auto justify-between sm:px-6 lg:px-8 lg:gap-5 lg:max-w-7xl"
        >
          <!-- Left Sidebar -->
          <left class="hidden md:block" />
          <!-- Main page -->
          <section>
            <slot />
          </section>
          <!-- Right Sidebar -->
          <div class="bg-blue-500 w-3/12">
            <div class="sticky top-0"><right /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(true);
</script>
