<template>
  <div class="product-furniture__head">ПОДБОР ФУРНИТУРЫ</div>
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
    <ProductStore
    v-for="card of cardStore.cards"
    :key="card.id"
    :card="card"/>
  </div>
</template>

<script setup>
import ProductStore from './ProductStoreOfCards.vue';
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
  display: flex;
  justify-content: center;
  gap: 30px
}
</style>