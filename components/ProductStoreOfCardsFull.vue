<template>
  <div v-if="card.id < 9" class="card__before">
    <img :src="card.image" class="card__image">
    <div @click="card.favorite = !card.favorite" class="heart">
      <img v-if="card.favorite == true" src="/assets/heart1.svg">
      <img v-else src="/assets/heart.svg">
    </div>
    <div class="facture">
      {{ card.facture }}
    </div>
    <div class="name">
      {{ card.name }}
    </div>
    <div class="properties">
      <div class="width">Ширина <div class="propertie__value">{{ card.width }}</div>м</div>
      <div class="structure">Состав <div class="propertie__value">{{ card.structure }}</div></div>
      <div class="density">Плотность <div class="propertie__value">{{ card.density }}</div></div>
    </div>
    <div class="price__busket">
      <div class="price__block">
        <div class="price">{{ card.price }}₽</div>
        <div class="total__price">{{ card.totalPrice }}₽</div>
      </div>
      <div class="to__busket">В корзину</div>
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
.card__before {
  width: 270px;
}
.card__image {
  width: 270px;
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