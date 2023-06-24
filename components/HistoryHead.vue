<template>
  <div class="history__head">
    <div class="head__head">ИСТОРИЯ ПОКУПОК</div>
    <div class="head__body">
      <div class="body__last">Последние покупки</div>
      <div>Январь</div>
      <div>Февраль</div>
      <div>Март</div>
      <div>Апрель</div>
      <div>Май</div>
      <div>Июнь</div>
      <div>Июль</div>
      <div>Август</div>
      <div>Сентябрь</div>
      <div><img src="/assets/arrow__bot.svg" alt="" class="head__arrow"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.history__head{
  margin-left: 375px;
  margin-top: 60px;
  margin-bottom: 31px;
}
.head__head {
  font-size: 48px;
  color: #545155
}
.head__body {
  display: flex;
  gap: 47px;
  margin-top: 31px;
  margin-bottom: 50px;
  color: #112E4C;
}
.head__arrow {
  transform: rotate(270deg);
}
.body__last {
  color: #BF1E77
}
</style>