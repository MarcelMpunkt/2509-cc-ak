<script setup lang="ts">
defineProps<{
  imagePath: string
  alt: string
  name: string
  weight?: number
  price?: number
  isInStock?: boolean
}
>()
</script>

<template>
  <BaseCard class="aspect-auto flex ">
    <div
      class="relative"
      :class="{
        grayscale: !isInStock,
      }"
    >
      <img
        class="object-cover"
        loading="lazy"
        :src="imagePath"
        :alt
      >
      <BaseBadge
        v-if="!isInStock"
        color="gray"
        class="absolute top-1/2 left-1/2 -translate-x-1/2"
      >
        Currently not available
      </BaseBadge>
      <BaseBadge
        v-if="isInStock"
        color="blue"
        class="bottom-1.5 absolute right-1.5"
      >
        {{ price }} USD
      </BaseBadge>
    </div>
    <template #footer>
      <section class="flex justify-between">
        <BaseText
          is="h3"
          :class="{
            'line-through': !isInStock,
          }"
        >
          {{ name }}
        </BaseText>
        <span
          v-if="weight"
          class="font-semibold text-gray-500"
          :class="{
            'line-through': !isInStock,
          }"
        >
          {{ weight }} g
        </span>
      </section>
    </template>
  </BaseCard>
  <slot />
</template>

<style scoped></style>
