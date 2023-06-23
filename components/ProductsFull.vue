<template>
  <div class="products-full">
        <div class="products-full__name">
        </div>
        <div class="products-full__list">
            <StoreOfCards 
                v-for="card of cardStoreFull.cards"
                :key="card.id"
                :card="card"/>
        </div>
    </div>
</template>
<script setup>
import StoreOfCards from '/components/StoreOfCardsFull.vue'
import { useCardStoreFull } from '/stores/ProductCardsFull.js'
const cardStoreFull = useCardStoreFull()
</script>
<style lang="scss" scoped>
.products-full {
  background-image: none;
  width: 870px;
  margin-top: 132px;
  padding-top: 0;
  margin-left: 675px;
}
.products-full__list {
    display: grid;
    justify-content: center;
    gap: 30px;
    margin-top: 41px;
    grid-template-columns: 270px 270px 270px;
}
</style>