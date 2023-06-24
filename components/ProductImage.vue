<template>
  <div class="product__block">
    <img class="product__image" src="/assets/product__image__main.png" alt="">
    <div class="product__mini-images">
      <img src="/assets/Photo.png" alt="">
      <img src="/assets/Photo-1.png" alt="">
      <img src="/assets/Photo-2.png" alt="">
      <img src="/assets/Photo-3.png" alt="">
      <img src="/assets/Photo-4.png" alt="">
      <img src="/assets/Photo-5.png" alt="">
    </div>
    <div class="product__exclamination">
      <img src="/assets/exclamation-circle.svg" alt="">
      <div>Обращаем Ваше внимание, что цвет товара может меняться, <div>в зависимости от настроек Вашего монитора</div></div>
    </div>
    <div class="product__player">
      <img class="product__play" src="/assets/player-play.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.product__block {
  margin-left: 371px;
}
.product__mini-images {
  display: flex;
  gap: 30px;
  margin-top: 33px;
  margin-bottom: 33px
}
.product__exclamination {
  display: flex;
  gap: 20px;
  padding: 20px 0px;
  border: solid #BF1E77 1px;
  border-radius: 10px;
  width: 569px;
  color: #BF1E77;
  font-size: 12px;
  line-height: 150%;
  justify-content: center;
  margin-bottom: 33px;
}
.product__player {
  background: url(/_nuxt/assets/player__back.png);
  width: 570px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>