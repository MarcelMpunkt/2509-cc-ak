<script setup lang="ts">
const { data } = await useFetch('/api/restaurant', {
  key: 'restaurant',
})
const route = useRoute()

const currentBurger = computed(() => data.value?.offered_burgers.find(item => item.name === route.params.slug))
const currentDrink = computed(() => data.value?.offered_drinks.find(item => item.name === route.params.slug))
useHead({
  title: `${(currentBurger.value?.name || currentDrink.value?.name) ?? 'No item with this name'}`,
})
</script>

<template>
  <div>
    <div
      v-if="!currentBurger && !currentDrink"
      class="text-center"
    >
      🍔 Sorry there is no item with this name 🥤
    </div>
    <div v-else>
      <BaseCard>
        <img
          class="object-cove"
          loading="lazy"
          :src="currentBurger?.info.img || currentDrink?.img"
          :alt="currentBurger?.description || currentDrink?.description"
        >
      </BaseCard>
      <section class="flex justify-between mt-3 ">
        <div class="text-center">
          <BaseText
            is="h3"
          >
            {{ currentBurger?.price_usd || currentDrink?.price }} USD
          </BaseText>
          <span class="text-gray-400 text-sm font-semibold text-center ">
            Price
          </span>
        </div>
        <div
          v-if="currentBurger?.weight_grams"
          class="text-center"
        >
          <BaseText
            is="h3"
          >
            {{ currentBurger?.weight_grams }} g
          </BaseText>
          <span class="text-gray-400 text-sm font-semibold text-center ">
            Weight
          </span>
        </div>
        <div
          v-if="currentBurger?.weight_grams"
          class="text-center"
        >
          <BaseText
            is="h3"
          >
            {{ currentBurger?.info.vegetarian ? 'Yes' : 'No' }}
          </BaseText>
          <span class="text-gray-400 text-sm font-semibold text-center ">
            Vegitarian
          </span>
        </div>
      </section>
      <hr class="mt-3 text-gray-400">
      <p
        class="mt-4"
      >
        {{ currentBurger?.description || currentDrink?.description }}
      </p>
      <section class="mt-9">
        <h4
          v-if="currentBurger?.tags"
          class="text-gray-400 font-semibold text-sm"
        >
          Special Ingredients
        </h4>
        <p> {{ currentBurger?.tags?.map(item => `${item[0]?.toUpperCase()}${[...item.slice(1)].join('')}`).join(', ') }} </p>
      </section>
      <section
        v-if="currentBurger?.info.allergens_contained_in"
        class="mt-9"
      >
        <h4
          class="text-gray-400 font-semibold text-sm"
        >
          Allergens
        </h4>
        <div class="bg-yellow-100 p-2 rounded-lg">
          <p> {{ currentBurger?.info.allergens_contained_in?.join(', ') }} </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
