<template>
  <title>Избранные</title>
  <FavoriteHead />
  <div class="products__list">
    <StoreOfCards 
    v-for="card of cardStore.cards"
    :key="card.id"
    :card="card"/>
  </div>
  <FavoritePageList />
</template>

<script setup>
definePageMeta({
  layout: 'other'
})
import FavoriteHead from '/components/FavoriteHead.vue'
import StoreOfCards from '/components/FavoriteStoreOfCards.vue'
import { useCardStore } from '/stores/ProductCards.js'
import FavoritePageList from '/components/FavoritePageList.vue'
const cardStore = useCardStore()
</script>
<style>
.products__list {
  display: grid;
  grid-template-columns: 270px 270px 270px 270px;
  gap: 30px;
  row-gap: 50px;
  margin-left: 375px;
}
</style>