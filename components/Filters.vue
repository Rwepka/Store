<template>
  <div class="filters">
    <div class="filters__head">Фильтры</div>
    <div class="filters__price">Цена за метр
    <PriceSlider/>
    </div>
    <div class="filters__width">Ширина
    <!-- <WidthSlider/> -->
    </div>
    <div class="filters__density">Плотность</div>
    <div class="filters__type">Тип ткани</div>
    <div class="filters__drawning">Рисунок</div>
    <div class="filters__specification">Назначение</div>
    <div class="filters__color">Цвет</div>
    <div class="filters__specials">Особенности</div>
    <div class="filters__compound">Состав</div>
    <div class="filters__manufacter">Страна производитель</div>
    <div class="accept">Применить</div>
    <div class="reset">Сбросить</div>
  </div>
</template>
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss" scoped>
.filters {
  margin-left: 375px;
  width: 240px;
}
.filters__head {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #000000;
  border-bottom: solid 1px rgba(191, 30, 119, 0.1);
  padding: 20px 0px;
  width: 240px;
}
.filters__price {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #545155;
  border-bottom: solid 1px rgba(191, 30, 119, 0.1);
  padding: 20px 0px;
  width: 240px;
}
.accept, .reset {
  padding: 12px 71.5px 14px 71.5px;
  background: #BF1E77;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
}
.reset {
  background: #FBF7F4;
  color: #BF1E77;
}
</style>
<script setup>
import PriceSlider from '/components/PriceSlider.vue'
// import WidthSlider from '/components/WidthSlider.vue'
</script>