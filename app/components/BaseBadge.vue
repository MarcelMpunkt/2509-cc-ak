<script setup lang="ts">
defineProps<{
  color: 'blue' | 'gray'
}>()
</script>

<template>
  <span
    class="rounded-full py-1 px-2 font-semibold"
    :class="{
      'bg-blue-500 text-white': color === 'blue',
      'bg-gray-100': color === 'gray',
    }"
  >
    <slot />
  </span>
</template>

<style scoped></style>
