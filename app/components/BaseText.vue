<script setup lang="ts">
const { is = 'span' } = defineProps<{
  is?: 'h2' | 'h3' | 'span'
  // size?: 'sm'
}>()
</script>

<template>
  <component
    :is
    :class="[
      is === 'h2' && 'text-2xl font-bold',
      is === 'h3' && 'text-xl font-semibold',
    ]"
  >
    <slot />
  </component>
</template>

<style scoped></style>
