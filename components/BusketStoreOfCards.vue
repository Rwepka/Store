<template>
  <div v-if="card.inBusket > 0" class="card__before">
    <img :src="card.image" class="card__image">
    <div>
      <div class="facture">
        {{ card.facture }}
      </div>
      <div class="name">
        {{ card.name }}
      </div>
      <div class="price__busket">
        <div class="price__block">
          <div class="price">{{ card.price }}₽</div>
          <div class="total__price">{{ card.totalPrice }}₽</div>
        </div>
      </div>
    </div>
    <div class="product-order__input">
      <img @click="card.inBusket --" src="/assets/minus.svg" alt="">
      <div>{{ card.inBusket }}</div>
      <img @click="card.inBusket ++" src="/assets/plus.svg" alt="">
    </div>
    <div class="busket__price">
      {{ (card.inBusket*card.price).toFixed(0) }} ₽
    </div>
    <div>
      <img class="x" src="/assets/plus.svg" alt="" @click="card.inBusket = 0">
    </div>
  </div>
</template>
<script setup>
const props = defineProps ({
  card: {
      type: Object,
      required: true,
      default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.x {
  position: relative;
  transform: rotate(45deg);
  left: 30px;
  top: 2px;
}
.busket__price {
  font-size: 24px;
  color: #545155;
  margin-left: 100px;
}
.product-order__input {
  display: flex;
  background: #FBF7F4;
  width: 162px;
  height: 50px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 16px;
  color: #545155;
  user-select: none;
  margin-left: 400px;
}
.card__before {
  display: flex;
  gap: 12px;
  padding-bottom: 25px;
  border-bottom: solid 1px #BF1E7710;
  align-items: center;
}
.card__image {
  width: 100px;
  border-radius: 10px;
}
.facture {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #BF1E77;
  opacity: 0.7;
}
.name {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #BF1E77;
  margin-bottom: 20px;
}
.properties {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #545155;
  border-bottom: solid #BF1E77 1px;
  padding-bottom: 24px;
}
.propertie__value {
  font-weight: 400;
}
.width, .structure, .density {
  display: flex;
  flex-direction: row;
  gap: 10px
}
.price__busket {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price__block {
  display: flex;
  gap: 20px;
  align-items: center;
}
.price {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #545155;
}
.total__price {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: right;
  color: #545155;
  opacity: 0.3;
  text-decoration: line-through;
}
.to__busket {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #BF1E77;
  cursor: pointer;
}
.heart {
  position: relative;
  left: 215px;
  top: -245px;
  width: 24px;
  cursor: pointer;
}
</style>