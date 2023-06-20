<template>
  <title>Каталог</title>
  <div class="catalog">
    <div>
      <Catalog/>
      <Filters/>
    </div>
    <Products/>
  </div>
</template>
<script setup>
import Catalog from '/components/Catalog.vue'
import Filters from '/components/Filters.vue'
import Products from '/components/ProductsFull'
</script>
<style scoped>
.catalog {
  display: flex;
  gap: 59px
}
.products {
  background-image: none;
  width: 870px;
  margin-top: 91px;
  padding-top: 0;
}
</style>