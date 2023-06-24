<template>
  <div class="product__description">
    <div class="description"><img src="/assets/cut.svg" alt=""><div class="des__head">Режем ткань от 30 см<div class="des__body">с шагом в 10 см. Тесьму и кружево <div>режем от 1 метра</div></div></div></div>
    <img src="/assets/rectangle.svg" alt="">
    <div class="description"><img src="/assets/note.svg" alt=""><div>Нет ограничений<div>по минимальному заказу</div></div></div>
    <img src="/assets/rectangle.svg" alt="">
    <div class="description"><img src="/assets/package.svg" alt=""><div>Доставим товар<div>в любую точку мира</div></div></div>
  </div>
  <div>
    <div class="product__review"><div>ОТЗЫВЫ</div><img class="review__arrow" src="/assets/arrow__bot.svg" alt=""></div>
    <div class="product__quest"><div>ВОПРОСЫ</div><img class="quest__arrow" src="/assets/arrow__bot.svg" alt=""></div>
  </div>
  <div class="product__share">
    <div class="share__content">Поделитесь в соц сетях и получите скидку 5%</div>
    <div class="share__images">
      <img src="/assets/icons/ok.png" alt="">
      <img src="/assets/icons/vk.png" alt="">
      <img src="/assets/icons/facebook.png" alt="">
      <img src="/assets/icons/twitter.png" alt="">
      <img src="/assets/icons/viber.png" alt="">
      <img src="/assets/icons/whatsapp.png" alt="">
      <img src="/assets/icons/telegramm.png" alt="">
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.product__description {
  display: flex;
  background: #FBF7F4;
  gap: 60px;
  padding-top: 89.5px;
  padding-bottom: 84.5px;
  padding-left: 225px;
  width: 1768px;
  align-items: center;
  margin-left: 150px;
  margin-top: 91px;
}
.description {
  display: flex;
  gap: 20px;
  font-size: 16px;
  color: #545155;
  align-items: center;
}
.des__head {
  font-size: 16px;
}
.des__body {
  font-size: 12px;
}
.product__review, .product__quest {
  margin-top: 85px;
  font-size: 30px;
  color:#545155;
  border-bottom: solid 1px #bf1e7711;
  padding-bottom: 30px;
  display: flex;
  margin-left: 375px;
  width: 1170px;
  justify-content: space-between;
  align-items: center;
}
.review__arrow, .quest__arrow {
  width: 24px;
  height: 24px;
}
.product__share {
  margin-top: 80px;
  background: #FBF7F4;
  margin-left: 375px;
  padding: 20px 30px;
  width: 1110px;
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;
}
.share__content {
  color: #BF1E77;
  font-size: 16px;
}
.share__images {
  display: flex;
  gap: 20px;
}
</style>