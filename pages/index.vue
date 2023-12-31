<template>
  <div>
    <div class="dark:text-dim-500">
      <Main title="Main" :loading="loading"> </Main>
    </div>
  </div>
</template>
<script setup>
const loading = ref(false);
</script>
