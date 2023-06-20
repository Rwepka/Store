<template>
  <div class="filters">
    <div class="filters__head">Фильтры</div>
    <div class="filters__price">Цена за метр
      <div class="container">
        <div class="fill"></div><div class="slider__back"><div class="fill right"></div></div>
        <div class="slider__box"><input @input="onChangeFirst()" class="slider" value="0" type="range"></div>
        <div class="slider__box"><input @input="onChangeSecond()" class="slider second" value="100" type="range"></div>
      </div>
    </div>
    <div>:{{ firstSlider }}</div>
    <div class="filters__width">Ширина</div>
    <div class="filters__density">Плотность</div>
    <div class="filters__type">Тип ткани</div>
    <div class="filters__drawning">Рисунок</div>
    <div class="filters__specification">Назначение</div>
    <div class="filters__color">Цвет</div>
    <div class="filters__specials">Особенности</div>
    <div class="filters__compound">Состав</div>
    <div class="filters__manufacter">Страна производитель</div>
    <div class="filter__accept">Применить</div>
    <div class="reset">Сбросить</div>
  </div>
</template>
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss">
.filters {
  margin-left: 375px;
}
.slider__box {
  width: 242px;
  display: flex;
}
.slider, .slider::-webkit-slider-thumb, .slider::-webkit-slider-runnable-track {
  appearance: none;
}
.slider {
  position: absolute;
  width: 242px;
  background: transparent;
  margin-left: 0px;
  z-index: 2;
}
.slider.second {
  width: 242px;
}
.slider__back {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 242px;
  height: 4px;
  background: #BF1E77;
  top: 5px;
  z-index: 0;
  outline: none;
}
.slider::-webkit-slider-thumb {
  position: relative;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  cursor: pointer;
  background: #ffffff;
  border: solid 3px #BF1E77;
  top: -7px;
}
.container {
  width: 242px;
}
.fill {
  position: relative;
  top: 9px;
  height: 4px;
  background: #FBF7F4;
  width: 10px;
  z-index: 1;
}
.fill.right {
  top: 0px
}
</style>
<script>
import { defineComponent } from 'vue'

  export default defineComponent({
    data(){
      return {

      }
    },
    methods: {
      onChangeFirst(){
        document.querySelector('.fill').style.width = document.querySelector('.slider').value + "%"
      },
      onChangeSecond(){
        document.querySelector('.fill.right').style.width = 100 - document.querySelector('.slider.second').value + "%"
      }
    }  
  })
</script>