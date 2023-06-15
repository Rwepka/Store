<template>
  <div class="products">
        <div class="products__name">
            <div class="before">ВЫ ПРОСМАТРИВАЛИ</div>
        </div>
        <div class="product__list">
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
<style lang="scss">
.products {
    margin-top: 156px;
    padding-top: 80px;
    width: 1920px;
    height: 941px;
    background-image: url(/_nuxt/assets/before.png);
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 105px;
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
.product__list {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 41px
}
</style>