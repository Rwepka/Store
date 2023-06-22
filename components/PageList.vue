<template>
  <div class="list-selecter">
    <div class="page__list">
      <div class="list__button"><img src="/assets/page__arrow__left.svg" alt=""></div>
      <div class="list__button">1</div>
      <div class="list__button active">2</div>
      <div class="list__button">3</div>
      <div class="list__button">4</div>
      <div class="list__button">...</div>
      <div class="list__button">11</div>
      <div class="list__button"><img src="/assets/page__arrow__right.svg" alt=""></div>
  </div>
  <div class="page__selecter">
    <div class="selecter__text">Показывать на странице</div>
    <div class="selecter__list">12 <img src="/assets/selector__arrow__down.svg" alt=""></div>
  </div>
  </div>
</template>
<style lang="scss" scoped>
$background: #FBF7F4;
$size: 50px;
$text-color: #545155;

.list-selecter {
  gap: 138px;
  margin-bottom: 100px;
  margin-top: 70px;
}
.page__list, .page__selecter, .list-selecter {
  display: flex;
}
.page__list {
  margin-left: 675px;
  gap: 15px;
}
.list__button {
  width: $size;
  height: $size;
  background: $background;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: $text-color;
}
.list__button.active {
  background: #BF1E77;
  color: #ffffff
}
.selecter__list {
  background: $background;
  height: $size;
  width: 89px;
  color: $text-color;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.selecter__text {
  width: 108px;
  color: $text-color
}
.page__selecter {
  gap: 30px;
}
</style>