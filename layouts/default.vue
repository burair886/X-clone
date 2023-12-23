<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div class="flex mx-auto sm:px-6 lg:px-8 lg:gap-5 lg:max-w-7xl">
          <!-- Left Sidebar -->
          <left class="hidden md:block" />
          <!-- Main page -->
          <section>
            <!-- <slot /> -->
          </section>
          <!-- Right Sidebar -->
          <section>right</section>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(true);
</script>
