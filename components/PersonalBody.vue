<template>
  <div class="personal__body">
    <div class="personal__left">
      <div class="reg__head">Зарегистрироваться</div>
      <div class="border"></div>
      <div class="personal__contacts">
        <div>Контактная информация</div>
        <div class="contacts__input">
          <input class="personal__input" type="text" name="" id="" placeholder="Телефон">
          <input class="personal__input" type="text" name="" id="" placeholder="Email">
        </div>
      </div>
      <div class="personal__recipient">
        <div>Получатель</div>
        <div class="recipient__input">
          <input class="personal__input" type="text" name="" id="" placeholder="Имя">
          <input class="personal__input" type="text" name="" id="" placeholder="Фамилия">
        </div>
      </div>
      <div class="personal__adress">
        <div>Адрес доставки</div>
        <div class="adress__input">
          <input class="personal__input" type="text" name="" id="" placeholder="Город">
          <input class="personal__input" type="text" name="" id="" placeholder="Улица">
          <input class="personal__input" type="text" name="" id="" placeholder="Подъезд">
          <input class="personal__input" type="text" name="" id="" placeholder="Квартира">
        </div>
      </div>
      <div class="border"></div>
      <div class="social-net">
        <div>
          <div class="social-net__head">Привязка социальных сетей</div>
          <div class="social-net__head-des">Привяжите учетную запись социальной сети и используйте ее для авторизации</div>
        </div>
        <div class="social-net__block">
          <div class="social-net__vk">
            <div class="vk__des">
              <img class="vk__image" src="/assets/personal__icons/vk.svg" alt="">
              <div>Вконтакте</div>
            </div>
            <div>
              <!-- Привязан -->
            </div>
          </div>
          <img class="x" src="/assets/plus.svg" alt="">
        </div>
        <div class="social-net__block">
          <div class="social-net__facebook">
            <div class="facebook__des">
              <img class="facebook__image" src="/assets/personal__icons/facebook.svg" alt="">
              <div>Facebook</div>
            </div>
            <div>
              <!-- Привязан -->
            </div>
          </div>
          <img class="x" src="/assets/plus.svg" alt="">
        </div>
        <div class="social-net__block">
          <div class="social-net__twitter">
            <div class="twitter__des">
              <img class="twitter__image" src="/assets/personal__icons/twitter.svg" alt="">
              <div>Twitter</div>
            </div>
            <div>
              <!-- Привязан -->
            </div>
          </div>
          <img class="x" src="/assets/plus.svg" alt="">
        </div>
        <div class="save__button">Сохранить</div>
      </div>
    </div>
    <div class="personal__right">
      <div class="personal__bonus">
        <div class="total__sum">100</div>
        <div class="total__head">Количество баллов</div>
        <div class="total__des">1 балл = 1 рубль</div>
      </div>
      <div class="personal__history">
        <div class="history__text">История покупок</div>
        <StoreOfCards 
            v-for="card of cardStore.cards"
            :key="card.id"
            :card="card"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import StoreOfCards from '/components/PersonalStoreOfCards.vue'
import { useCardStore } from '/stores/ProductCards.js'
const cardStore = useCardStore()
</script>

<style scoped>
.total__head {
  color:#545155;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
}
.total__sum {
  color:#BF1E77;
  font-size: 48px;
  font-weight: 500;
  line-height: 150%;
}
.total__discont {
  font-size: 16px;
  height: 50px;
  padding-left: 30px;
  border-radius: 4px;
  border: none;
  outline: none;
}
.total__accept {
  background: #545155;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  padding: 10px 0px;
  border-radius: 4px;
}
.total__des {
  color: #545155;
  font-size: 16px;
  line-height: 150%;
  margin-top: 10px;
}
.history__text {
  margin-bottom: 20px;
}
.personal__body {
  margin-left: 375px;
  display: flex;
  width: 1164px;
}
.personal__body {
  display: flex;
  margin-left: 375px;
  gap: 60px;
  margin-bottom: 80px;
}
.personal__left {
  display: flex;
  flex-direction: column;
  gap: 30px
}
.reg__head {
  color: #BF1E77;
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
}
.border {
  opacity: .1;
  background: #BF1E77;
  height: 1px;
}
.personal__buy {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.personal__contacts, .personal__recipient, .personal__adress, .personal__buy {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #545155;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
}
.personal__adress {
  height: 167px;
}
.personal__buy {
  flex-direction: row;
  font-size: 16px
}
.personal__input {
  width: 352px;
  border: 0;
  background: #FBF7F4;
  padding-left: 16px;
  font-size: 16px;
  outline: 0;
  border-radius: 4px;
}
.contacts__input, .recipient__input, .adress__input {
  display: flex;
  height: 50px;
  width: 770px;
  column-gap: 30px;
}
.adress__input {
  display: grid;
  grid-template-columns: 370px 370px;
  grid-template-rows: 50px 50px;
  row-gap: 20px;
  width: 770px;
}
.buy__button.personal{
  padding: 12px 30px 10px 30px;
  margin-left: 0;
}
.to__busket {
  text-decoration: none;
  width: 178px;
  font-size: 16px;
  color: #545155;
}
.personal__right {
  width: 334px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 64px;
}
.personal__bonus {
  background: #FBF7F4;
  border-radius: 10px;
  padding: 20px 30px 30px 30px;
}
.personal__history {
  display: flex;
  flex-direction: column;
  background: #FBF7F4;
  padding-left: 30px;
  color: #545155;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  border-radius: 10px;
  padding-top: 30px;
  padding-right: 30px;
}
.social-net {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.x {transform: rotate(45deg);}
.social-net__block {
  display: flex;
  gap: 30px;
}
.social-net__vk, .social-net__facebook, .social-net__twitter {
  display: flex;
  justify-content: space-between;
  width: 370px;
  border-radius: 4px;
}
.vk__des, .facebook__des, .twitter__des {
  display: flex;
  gap: 20px;
}
.social-net__head {
  color: #545155;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
}
.social-net__head-des {
  color: #545155;
  font-size: 12px;
  line-height: 150%;
}
.social-net__vk {
  background: #FBF7F4;
  color: #7294C7;
  padding: 12px;
}
.social-net__facebook {
  background: #FBF7F4;
  color: #4E6297;
  padding: 12px;
}
.social-net__twitter {
  background: #FBF7F4;
  color: #55ACE3;
  padding: 12px;
}
.save__button {
  color: #FFF;
  font-size: 16px;
  line-height: 150%;
  background: #BF1E77;
  text-align: center;
  padding: 10px 0px;
  width: 150px;
  border-radius: 4px;
}
</style>