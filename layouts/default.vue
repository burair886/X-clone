<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div class="flex mx-auto sm:px-6 lg:px-8 lg:gap-5 lg:max-w-7xl">
          <!-- Left Sidebar -->
          <div class="">
            <div class="sticky top-0">
              <div class="my-2 p-2 hover:bg-red-400 hover:rounded-full w-min">
                <nuxt-link to="/">
                  <div class="h-9 w-9">
                    <twitterX class="text-dim-100 dark:text-white" />
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
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
import twitterX from "../assets/logo/twitterX.vue";
const darkMode = ref(false);
</script>
