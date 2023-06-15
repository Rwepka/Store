<template>
    <title>Home</title>
    <SlideBox/>
    <Specials/>
    <Categories/>
    <Products/>
</template>
<style>
body {
    margin: 0;
    font-family: 'Montserrat';
}
</style>
<script setup>
    import Categories from '/components/Categories.vue'
    import Specials from '/components/Specials.vue'
    import Products from '/components/Products.vue'
    import SlideBox from '/components/SlideBox.vue'
</script>
