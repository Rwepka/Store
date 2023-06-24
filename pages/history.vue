<template>
  <title>История</title>
  <HistoryHead />
  <div class="products__list">
    <StoreOfCards 
    v-for="card of cardStore.cards"
    :key="card.id"
    :card="card"/>
  </div>
  <PageList />
</template>

<script setup>
definePageMeta({
  layout: 'other'
})
import PageList from '~/components/HistoryPageList.vue';
import HistoryHead from '~/components/HistoryHead.vue';
import StoreOfCards from '/components/HistoryStoreOfCards.vue'
import { useCardStore } from '/stores/ProductCards.js'
const cardStore = useCardStore()
</script>

<style scoped>
.products__list {
  display: grid;
  grid-template-columns: 270px 270px 270px 270px;
  gap: 30px;
  row-gap: 50px;
  margin-left: 375px;
}
</style>