<template>
  <div class="slider__container">
    <div class="fill-density"></div><div class="slider__back"><div class="fill-density right"></div></div>
    <div class="slider__box"><input @input="minDensityChange()" min="48" max="600" step="0.5" class="slider-density" value="48" type="range"></div>
    <div class="slider__box"><input @input="maxDensityChange()" min="48" max="600" step="0.5" class="slider-density second" value="400" type="range"></div>
    <div class="value__box"><div class="slider__value">{{ minDensity }}</div><div class="slider__value second">{{ maxDensity }}</div></div>
  </div>
  </template>
  <style scoped>
  .slider__box {
    width: 242px;
    display: flex;
  }
  .slider-density, .slider-density::-webkit-slider-thumb, .slider-density::-webkit-slider-runnable-track {
    appearance: none;
  }
  .slider-density {
    position: absolute;
    width: 242px;
    background: transparent;
    margin-left: 0px;
    z-index: 2;
  }
  .slider-density.second {
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
  .slider-density::-webkit-slider-thumb {
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
  .fill-density {
    position: relative;
    top: 9px;
    height: 4px;
    background: #FBF7F4;
    width: 10px;
    z-index: 1;
  }
  .fill-density.right {
    top: 0px;
    width: 85px;
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
        minDensity: 48,
        maxDensity: 400
      }
    },
    methods: {
      minDensityChange(){
        const fill = document.querySelector('.fill-density')
        const slider = document.querySelector('.slider-density')
        const coef = (slider.max - slider.min)/98
        this.minDensity = slider.value
        fill.style.width = slider.value/coef + "%"
      },
      maxDensityChange(){
        const fill = document.querySelector('.fill-density.right')
        const slider = document.querySelector('.slider-density.second')
        const coef = (slider.max - slider.min)/98
        this.maxDensity = slider.value
        fill.style.width = 108 - slider.value/coef + "%"
      }
    },
  })
  </script>