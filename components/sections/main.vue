<template>
  <div>
    <h1>{{ props.title }}</h1>
    <slot />
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  loading: {
    type: Boolean,
    require: true,
  },
});
</script>
