<template>
<div class="slider__container">
  <div class="fill"></div><div class="slider__back"><div class="fill right"></div></div>
  <div class="slider__box"><input @input="onChangeFirst()" min="28" max="1300" class="slider" value="28" type="range"></div>
  <div class="slider__box"><input @input="onChangeSecond()" min="28" max="1300" class="slider second" value="1300" type="range"></div>
  <div class="value__box"><div class="slider__value">{{ firstSliderValue }}</div><div class="slider__value second">{{ secondSliderValue }}</div></div>
</div>
</template>
<style>
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
.slider__container {
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
.value__box {
  display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #333333;
    justify-content: space-between;
    margin-top: 12px;
}
.slider__value.second {
  width: auto;
}
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
    return {
      firstSliderValue: 28,
      secondSliderValue: 1300
    }
  },
  methods: {
    onChangeFirst(){
      const fill = document.querySelector('.fill')
      const slider = document.querySelector('.slider')
      const coef = (slider.max - slider.min)/98
      this.firstSliderValue = slider.value
      fill.style.width = slider.value/coef + "%"
    },
    onChangeSecond(){
      const fill = document.querySelector('.fill.right')
      const slider = document.querySelector('.slider.second')
      const coef = (slider.max - slider.min)/98
      this.secondSliderValue = slider.value
      fill.style.width = 100 - slider.value/coef + "%"
    }
  },
})
</script>