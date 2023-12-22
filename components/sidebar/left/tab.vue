<template>
  <nuxt-link
    to="#"
    class="flex items-center justify-center p-3 rounded-full w-min hover:bg-gray-300"
    :class="defaultTransition"
  >
    <div class="w-6 h-6">
      <slot name="icon" />
    </div>
    <div>
      <slot name="name" />
    </div>
  </nuxt-link>
</template>
<script setup>
const { defaultTransition } = useTailwind();
</script>
