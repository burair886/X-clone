<template>
  <div :class="{ dark: darkMode }">
    <div class="text-red-800 dark:text-dim-500">hello</div>
  </div>
</template>
<script setup>
const darkMode = ref(false);
</script>
