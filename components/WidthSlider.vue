<template>
  <div class="slider__container">
    <div class="fill-width"></div><div class="slider__back"><div class="fill-width right"></div></div>
    <div class="slider__box"><input @input="minWidthChange()" step="0.05" min="0.95" max="300" class="slider-width" value="0.95" type="range"></div>
    <div class="slider__box"><input @input="maxWidthChange()" step="0.05" min="0.95" max="300" class="slider-width second" value="250" type="range"></div>
    <div class="value__box"><div class="slider__value">{{ minWidth }}</div><div class="slider__value second">{{ maxWidth }}</div></div>
  </div>
  </template>
  <style scoped>
  .slider__box {
    width: 242px;
    display: flex;
  }
  .slider-width, .slider-width::-webkit-slider-thumb, .slider-width::-webkit-slider-runnable-track {
    appearance: none;
  }
  .slider-width {
    position: absolute;
    width: 242px;
    background: transparent;
    margin-left: 0px;
    z-index: 2;
  }
  .slider-width.second {
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
  .slider-width::-webkit-slider-thumb {
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
  .fill-width {
    position: relative;
    top: 9px;
    height: 4px;
    background: #FBF7F4;
    width: 10px;
    z-index: 1;
  }
  .fill-width.right {
    top: 0px;
    width: 45px;
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
        minWidth: 0.95,
        maxWidth: 250
      }
    },
    methods: {
      minWidthChange(){
        const fill = document.querySelector('.fill-width')
        const slider = document.querySelector('.slider-width')
        const coef = (slider.max - slider.min)/98
        this.minWidth = slider.value
        fill.style.width = slider.value/coef + "%"
      },
      maxWidthChange(){
        const fill = document.querySelector('.fill-width.right')
        const slider = document.querySelector('.slider-width.second')
        const coef = (slider.max - slider.min)/98
        this.maxWidth = slider.value
        fill.style.width = 100 - slider.value/coef + "%"
      }
    },
  })
  </script>