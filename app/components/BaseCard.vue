<script setup lang="ts">
</script>

<template>
  <div class="rounded-lg overflow-hidden flex flex-col shadow">
    <slot />
    <footer
      v-if="$slots.footer"
      class="p-3"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped></style>
