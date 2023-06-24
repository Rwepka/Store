<template>
  <div class="product-furniture__head">С ЭТИМ ТОВАРОМ ПОКУПАЮТ</div>
  <div class="product-furniture__buttons">
    <div class="furniture__button">
      <img src="/assets/thread.svg" alt="">
      <div>Нитки</div>
    </div>
    <div class="furniture__button">
      <img src="/assets/button.svg" alt="">
      <div>Пуговицы</div>
    </div>
    <div class="furniture__button">
      <img src="/assets/zip.svg" alt="">
      <div>Молнии</div>
    </div>
    <div class="furniture__button">
      <img src="/assets/thread1.svg" alt="">
      <div>Тесьма</div>
    </div>
  </div>
  <div class="product__store">
    <ProductStoreOfCardsFull
    v-for="card of cardStore.cards"
    :key="card.id"
    :card="card"/>
  </div>
</template>

<script setup>
import ProductStoreOfCardsFull from '/components/ProductStoreOfCardsFull.vue';
import { useCardStore } from '/stores/ProductCards.js';
const cardStore = useCardStore();
</script>

<style scoped>
.product-furniture__head {
  text-align: center;
  color: #545155;
  font-size: 48px;
  font-weight: 500;
  line-height: 150%;
  margin-top: 80px;
  margin-bottom: 31px;
  background: url(/assets/rec.png);
  background-repeat: no-repeat;
  background-position: center;
}
.product-furniture__buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
}
.furniture__button {
  display: flex;
  color: #545155;
  font-size: 16px;
  line-height: 150%;
  background: #FBF7F4;
  gap: 20px;
  padding: 20px 30px;
  border-radius: 4px;
}
.product__store {
  display: grid;
  justify-content: center;
  grid-template-columns: 270px 270px 270px 270px;
  gap: 30px;
  margin-bottom: 120px;
}
</style>