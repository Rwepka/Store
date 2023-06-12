<template>
    <title>Home</title>
    <navbar></navbar>
    <div class="slide__box">
        <img src="/assets/slide.png" alt="" class="slide">
    </div>
    <specials/>
    <categories/>
    <div class="products">
        <div class="products__name">
            <div class="before">ВЫ ПРОСМАТРИВАЛИ</div>
        </div>
        <div class="product__list">
            <storeOfCards 
                v-for="card of cardStore.cards"
                :key="card.id"
                :card="card"/>
        </div>
    </div>
    <banner/>
</template>
<style>
.specials {
    display: flex;
    gap: 70px;
    align-items: center;
    margin-top: 100px;
    margin-left: 375px;
}
.first, .second, .third {
    width: 370px;
}
.categories {
    background: rgba(251, 247, 244, 1);
    width: 1768px;
    height: 1000px;
    margin-left: 150px;
    margin-top: 100px;

}
.categories__name {
    width: 1170px;
    height: 196px;
    margin-left: 223px;
    text-align: center;
    background-image: url(@/assets/categories.png);
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 30px;
}
.popular {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 150%;
    color: #545155;
    padding-top: 83px;
}
.first__line, .second__line, .third__line {
    display: flex;
    height: 300px;
    margin-left: 223px;
    gap: 30px
}
.second__line, .third__line {
    margin-top: 30px;
}
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
    font-family: 'Montserrat';
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
<script setup>
    import navbar from '/components/navbar.vue'
    import { useCardStore } from '/stores/product__cards.js'
    import storeOfCards from '/components/storeofcards.vue'
    import categories from '/components/categories.vue'
    import banner from '/components/banner.vue'
    import specials from '/components/specials.vue'
    const cardStore = useCardStore()
</script>