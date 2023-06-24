<template>
  <div>
    <div class="product-info__head">Холст полотенечный жаккард "Домики"
    цв.бордо/серый, ш.0.5м, лен-30%,
    хлопок-70%, 210гр/м.кв<div class="head__bot">Артикул 019832</div>
    </div>
    <div class="product-info__block">
      <div class="product__info">
        <div>Состав<div class="info__value">лен-30%, хлопок-70%</div></div>
        <div>Ширина<div class="info__value">0.5м</div></div>
        <div>Плотность<div class="info__value">210гр/м.кв</div></div>
        <div>Страна производитель<div class="info__value">Россия</div></div>
      </div>
      <div class="product__order">
        <div>
          <div class="produc-order__head">
          Выбор цвета
          </div>
          <div class="product-order__colors">
          <div class="red"></div>
          <div class="orange"></div>
          <div class="yellow"></div>
          </div>
        </div>
        <div>
          <div class="product-order__price">240 ₽ / м<div class="product-order__price-old">360 ₽ / м</div></div>
          <div class="product-order__input">
            <img @click="minus()" @dblclick="superMinus()" src="/assets/minus.svg" alt="">
            <div>{{ value.toFixed(1) }} м</div>
            <img @click="plus()" @dblclick="superPlus()" src="/assets/plus.svg" alt="">
          </div>
          <div class="length__price">
            <div>Остаток<div class="product__length">{{ (max-value).toFixed(1) }} м</div></div>
            <div>Стоимость<div class="product__price">{{ (value*240).toFixed(1) }} руб</div></div>
          </div>
        </div>
        <div class="order__busket">
            <div class="busket__button">В корзину</div>
            <div class="favorite__button">
              <img src="/assets/pink__heart.svg" alt="">
            </div>
          </div>
      </div>
    </div>
    <div>
      <div class="product__description"> 
        Медиапланирование осмысленно индуцирует конкурент. 
        Представляется логичным, что потребление традиционно усиливает целевой сегмент рынка, 
        отвоевывая рыночный сегмент. Личность топ менеджера традиционно экономит комплексный имидж. 
        Рыночная информация масштабирует креативный побочный PR-эффект. 
        Российская специфика определяет пак-шот. Согласно предыдущему, 
        креатив усиливает фактор коммуникации.
      </div>
      <div class="description__full">Читать полное описание</div>
    </div>
    <div class="product__recomendations">
      <div class="rec__left"><img src="/assets/color__palette.svg" alt="">С этой тканью сочетаются</div>
      <div class="rec__right"><img src="/assets/fabric.svg" alt="">Товары из раздела лен и полулен</div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.product-info__head {
  color: #545155;
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  width: 538px;
}
.head__bot {
  font-size: 12px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: solid 1px rgba(191, 30, 119, .1);
}
.product__info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 133px;
  background: #FBF7F4;
  padding: 30px;
}
.product-info__block {
  display: flex;
  gap: 40px
}
.info__value {
  margin-top: 5px;
  opacity: .5;
}
.product-order__colors {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
.product__order {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 344px;
}
.red, .orange, .yellow {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}
.red {background: #EB5757;}
.orange {background: #F2994A;}
.yellow {background: #F2C94C;}
.product-order__price {
  display: flex;
  gap: 20px;
  color: #BF1E77;
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  align-items: center;
  margin-bottom: 20px;
}
.product-order__price-old {
  color: #BF1E77;
  text-align: right;
  font-size: 16px;
  line-height: 150%;
  text-decoration: line-through;
  opacity: .3;
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
}
.length__price {
  display: flex;
  gap: 40px;
  font-size: 12px;
  color:#545155;
  margin-top: 10px;
}
.product__length, .product__price {
  margin-top: 5px;
  color: black;
}
.order__busket {
  display: flex;
  align-items: center;
  gap: 20px;
}
.busket__button {
  border-radius: 4px;
  background: #BF1E77;
  color:  #FFF;
  font-size: 16px;
  line-height: 150%;
  padding: 10px 0px 12px 0px;
  cursor: pointer;
  width: 162px;
  text-align: center;
}
.favorite__button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FBF7F4;
  width: 50px;
  height: 50px;
  border-radius: 4px;
}
.product__description {
  display: flex;
  width: 538px;
  margin-top: 30px;
}
.description__full {
  margin-top: 10px;
  color: #BF1E77;
}
.product__recomendations {
  color: #BF1E77;
  display: flex;
  gap: 30px;
}
.rec__left, .rec__right {
  width: 178px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  background: #FBF7F4;
  font-size: 15px;
  height: 48px;
  margin-top: 30px;
}
.rec__right {
  width: 210px;
}
</style>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  data(){
    return {
      value: 0,
      max: 131.9
    }
  },
  methods: {
    plus(){
      if (this.value < this.max - 0.1) {
        this.value += 0.1
      }
    },
    superPlus(){
      if (this.value < this.max - 9.8) {
        this.value += 9.8
      }
    },
    minus(){
      if (this.value > 0.1) {
        this.value -= 0.1
      }
    },
    superMinus(){
      if (this.value > 9.8) {
        this.value -= 9.8
      }
    }
  }
})
</script>