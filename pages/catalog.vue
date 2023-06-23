<template>
  <title>Каталог</title>
    <div class="catalog__filters">
      <Catalog/>
      <Filters/>
    </div>
    <Products/>
    <PageList/>
    
</template>
<script setup>
import Catalog from '/components/Catalog.vue'
import Filters from '/components/Filters.vue'
import Products from '/components/ProductsFull.vue'
import PageList from '/components/PageList.vue'
definePageMeta({
  layout: 'other'
})
</script>
<style scoped>
.catalog__filters {
  position: absolute  ;
}
</style>