<template>
  <title>Подробнее</title>
  <div class="block">
    <ProductImage />
    <ProductInfo />
  </div>
  <ProductFurniture />
  <ProductDescription />
  <ProductRecomends />
</template>

<script setup>
definePageMeta({
  layout: 'other'
})
import ProductImage from '/components/ProductImage.vue'
import ProductInfo from '/components/ProductInfo.vue'
import ProductFurniture from '/components/ProductFurniture.vue';
import ProductDescription from '/components/ProductDescription.vue';
import ProductRecomends from '/components/ProductRecomends.vue'
</script>

<style scoped>
.block {
  display: flex;
  margin-top: 80px;
  gap: 86px;
}
</style>