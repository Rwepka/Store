<template>
  <title>Контакты</title>
  <div class="contacts__head">КОНТАКТЫ</div>
  <div class="contacts__map">
    <img src="/assets/contacts__map.png" alt="">
    <div class="contacts__description">
      <div class="des-contacts__head">Интернет-магазин «Ткани-сюрприз»</div>
      <div class="des-contacts__body">
        <div class="body__head">Позвоните нам</div>
        <div class="body__dots">
          <img src="/assets/phone.png" alt="">
          8 800 900 70 90
        </div>
        <div class="body__dots">
          <img src="/assets/pin.png" alt="">
          г. Орск Проспект Ленина 71 / А
        </div>
        <div class="body__dots">
          <img src="/assets/clock.png" alt="">
          Пн-вс: 10:00 - 21:00 <br/> без выходных
        </div>
      </div>
      <div class="body__icons">
        <img src="/assets/vk.png" alt="">
        <img src="/assets/instagramm.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'other'
})

</script>

<style scoped>
.contacts__head, .contacts__map {
  margin-left: 376px;
}
.contacts__head {
  margin-top: 60px;
  font-size: 48px;
  color: #545155;
}
.contacts__map {
  margin-bottom: 145px;
  margin-top: 31px;
  display: flex;
  gap: 51px;
}
.contacts__description, .des-contacts__body {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.des-contacts__head {
  font-size: 24px;
  font-weight: 500;
}
.des-contacts__body {
  font-size: 16px;
  color: #545155;
  gap: 20px;
}
.body__head {
  font-weight: 600;
}
.body__dots, .body__icons {
  display: flex;
  gap: 15px;
  align-items: center;
}
.body__icons {
  gap: 20px;
}
</style>