<template>
  <div class="products">
        <div class="products__name">
            <div class="before">ВАМ МОЖЕТ ПОНРАВИТЬСЯ</div>
        </div>
        <div class="products__list">
            <StoreOfCards 
            v-for="card of cardStore.cards"
            :key="card.id"
            :card="card"/>
        </div>
    </div>
</template>
<script setup>
import StoreOfCards from '/components/StoreOfCards.vue'
import { useCardStore } from '/stores/ProductCards.js'
const cardStore = useCardStore()
</script>
<style lang="scss" scoped>
.products {
    width: 1920px;
    height: auto;
    background-image: url(/_nuxt/assets/similar.png);
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 0px;
    margin-bottom: 91px;
}
.before {
    height: 72px;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 150%;
    color: #545155;
    text-align: center;
    margin-top: 80px
}
.products__list {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 0;
    margin-top: 41px
}
</style>