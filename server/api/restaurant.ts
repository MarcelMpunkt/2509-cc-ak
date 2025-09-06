export default defineEventHandler(async() => {
  const result = await $fetch<RestaurantResponse>('https://ahoi-production-bucket-public.s3.eu-central-1.amazonaws.com/challenge/assets/restaurant.json')
  return result
})

// generated with https://transform.tools/json-to-typescript
export interface RestaurantResponse {
  name: string
  address: Address
  offered_burgers: OfferedBurger[]
  offered_drinks: OfferedDrink[]
}

export interface Address {
  street: string
  city: string
  country: Country
}

export interface Country {
  country_code: string
  name: string
}

export interface OfferedBurger {
  name: string
  description: string
  weight_grams?: number
  price_usd: number
  info: Info
  tags?: string[]
}

export interface Info {
  in_stock?: boolean
  vegetarian: boolean
  allergens_contained_in?: string[]
  availableSince?: number
  available_until?: string
  img: string
}

export interface OfferedDrink {
  name: string
  description: string
  price: number
  allergens?: string[]
  img: string
}

