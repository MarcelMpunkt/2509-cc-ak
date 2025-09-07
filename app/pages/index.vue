<script setup lang="ts">
const { data } = await useFetch('/api/restaurant', {
  key: 'restaurant',
  transform: (data) => {
    const now = Date.now()
    const { offered_burgers } = data
    data.offered_burgers = offered_burgers.filter((burger) => {
      const { info } = burger
      if (info?.availableSince && info.availableSince > now) return false
      if (info?.available_until && Date.parse(info.available_until) < now) return false
      return true
    })
    return data
  },
})
const burgers = computed(() => data.value?.offered_burgers)
const drinks = computed(() => data.value?.offered_drinks)
useHead({
  title: `Menu - ${data.value?.name}`,
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <section>
      <h1 class="font-bold text-3xl">
        {{ data?.name }}
      </h1>
      <address>
        <span>{{ data?.address.street }}, </span>
        <span>{{ data?.address.city }}, </span>
        <span>{{ data?.address.country.name }}</span>
      </address>
    </section>
    <section class="max-h-screen overflow-scroll">
      <BaseText
        is="h2"
      >
        Burgers
      </BaseText>
      <ul class="grid gap-3">
        <li
          v-for="burger in burgers"
          :key="burger.name"
        >
          <NuxtLink :to="`/detail/${burger.name}`">
            <MenuItem
              :image-path="burger.info.img"
              :alt="burger.description"
              :name="burger.name"
              :weight="burger.weight_grams"
              :price="burger.price_usd"
              :is-in-stock="burger.info.in_stock"
            />
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section
      class="overflow-y-scroll"
    >
      <BaseText
        is="h2"
      >
        Drinks
      </BaseText>
      <ul class="flex gap-2">
        <li
          v-for="drink in drinks"
          :key="drink.name"
        >
          <NuxtLink :to="`/detail/${drink.name}`">
            <figure>
              <BaseCard>
                <img
                  :src="drink.img"
                  alt=""
                >
              </BaseCard>
              <figcaption
                class="text-pretty text-xs font-semibold"
              >
                {{ drink.name }}
              </figcaption>
            </figure>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped></style>
