<template>
    <title>Home</title>
    <navbar></navbar>
    <div class="slide__box">
        <img src="@/assets/slide.png" alt="" class="slide">
    </div>
    <div class="specials">
        <div class="first">
            <img src="@/assets/sale1.png" alt="">
        </div>
        <div class="second">
            <img src="@/assets/sale2.png" alt="">
        </div>
        <div class="third">
            <img src="@/assets/sale3.png" alt="">
        </div>
    </div>
    <div class="categories">
        <div class="categories__name">
            <div class="popular">ПОПУЛЯРНЫЕ КАТЕГОРИИ</div>
        </div>
        <div class="first__line">
            <img src="@/assets/linen.png" alt="">
            <img src="@/assets/cotton.png" alt="">
        </div>
        <div class="second__line">
            <img src="@/assets/viscose.png" alt="">
            <img src="@/assets/christmas__fabrics.png" alt="">
        </div>
        <div class="third__line">
            <img src="@/assets/linen2.png" alt="">
            <img src="@/assets/cotton2.png" alt="">
            <img src="@/assets/viscose2.png" alt="">
        </div>
    </div>
    <div class="products">
        <div class="products__name">
            <div class="before">ВЫ ПРОСМАТРИВАЛИ</div>
        </div>
        <div class="product__list">
            <div class="item__1"></div>
            <div class="item__2"></div>
            <div class="item__3"></div>
        </div>
    </div>
</template>
<style>
.slide {
    width: 100%;
}
.slide__box {
    margin-right: 150px;
}
.specials {
    display: flex;
    gap: 70px;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
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
</style>
<script setup>
import navbar from '@/components/navbar.vue'
</script>