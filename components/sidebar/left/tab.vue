<template>
  <nuxt-link
    class="flex items-center p-3 rounded-full w-min hover:bg-gray-300 dark:hover:bg-dim-200 dark:text-white"
    :class="defaultTransition"
    to="#"
  >
    <div class="w-7 h-7">
      <slot name="icon" />
    </div>
    <div :class="textActive" class="ml-3 text-xl hidden xl:block">
      <slot name="name" />
    </div>
  </nuxt-link>
</template>
<script setup>
const { defaultTransition } = useTailwind();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textActive = computed(() =>
  props.active ? "font-semibold" : "font-normal"
);
</script>
