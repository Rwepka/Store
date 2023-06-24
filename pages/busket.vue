<template>
  <title>Корзина</title>
  <BusketHead />
  <div class="products__list">
    <StoreOfCards 
    v-for="card of cardStore.cards"
    :key="card.id"
    :card="card"/>
  </div>
  <BusketBuy />
  <BusketSimilar />
</template>

<script setup>
definePageMeta({
  layout: 'other'
})
import BusketHead from '~/components/BusketHead.vue'
import StoreOfCards from '~/components/BusketStoreOfCards.vue';
import BusketBuy from '~/components/BusketBuy.vue'
import BusketSimilar from '~/components/BusketSimilar.vue'
import { useCardStore } from '~/stores/ProductCards.js'
const cardStore = useCardStore()
</script>

<style scoped>
.products__list {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  margin-bottom: 30px;
  width: 1170px;
}
</style>