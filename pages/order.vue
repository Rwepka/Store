<template>
  <title>Заказ</title>
  <OrderHead />
  <OrderBody />
</template>

<script setup>
definePageMeta({
  layout: 'other'
})
import OrderHead from '~/components/OrderHead.vue';
import OrderBody from '~/components/OrderBody.vue'
</script>

<style>

</style>