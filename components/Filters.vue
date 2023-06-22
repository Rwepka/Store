<template>
  <div class="filters">
    <div class="filters__head">Фильтры</div>
    <div class="filters__price">Цена за метр
      <PriceSlider/>
    </div>
    <div class="filters__width">Ширина
      <WidthSlider/>
    </div>
    <div class="filters__density">Плотность
      <DensitySlider/>
    </div>
    <div class="filters__type"><div class="type__text">Тип ткани<img class="filter__arrow" src="/assets/arrow__bot.svg" alt="" @click="filterClick()"></div>
      <FabricType/>
    </div>
    <div class="filters__drawning">Рисунок<img src="/assets/arrow__bot.svg" alt=""></div>
    <div class="filters__specification">Назначение<img src="/assets/arrow__bot.svg" alt=""></div>
    <div class="filters__color">Цвет<img src="/assets/arrow__bot.svg" alt=""></div>
    <div class="filters__specials">Особенности<img src="/assets/arrow__bot.svg" alt=""></div>
    <div class="filters__compound">Состав<img src="/assets/arrow__bot.svg" alt=""></div>
    <div class="filters__manufacter">Страна производитель<img src="/assets/arrow__bot.svg" alt=""></div>
    <div class="accept">Применить</div>
    <div class="reset">Сбросить</div>
  </div>
</template>
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss" scoped>
$padding: 20px 0px;
$border: solid 1px rgba(191, 30, 119, 0.1);
$width: 240px;
$color: #545155;
$dcolor: #BF1E77;
.filters {
  margin-left: 375px;
  width: $width;
  color: $color
}
.filters__head {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #000000;
  border-bottom: $border;
  padding: $padding;
  width: $width;
}
.filters__price, .filters__width, .filters__density,
.filters__drawning, .filters__specification, .filters__color, 
.filters__specials, .filters__compound, .filters__manufacter {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  border-bottom: $border;
  padding: $padding;
  width: $width;
}
.filters__drawning, .filters__specification, .filters__color, 
.filters__specials, .filters__compound, .filters__manufacter {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.filters__type {
  padding: $padding;
  border-bottom: $border;
}
.type__text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
.filter__arrow {
  cursor: pointer;
}
.filter__arrow.closed {
  transform: rotate(180deg);
}
.accept, .reset {
  padding: 12px 71.5px 14px 71.5px;
  background: $dcolor;
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
  color: $dcolor;
}
</style>
<script lang="ts" setup>
import PriceSlider from '/components/PriceSlider.vue'
import WidthSlider from '/components/WidthSlider.vue'
import DensitySlider from '/components/DensitySlider.vue';
import FabricType from './FabricType.vue';
</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {

    }
  },
  methods: {
    filterClick(){
      const arrow = document.querySelector('.filter__arrow')
      const list = document.querySelector('.fabric')
      if (arrow != null) {
        arrow.classList.toggle('closed')
      }
      if (list != null) {
        list.classList.toggle('closed')
      }
    }
  }
})
</script>
