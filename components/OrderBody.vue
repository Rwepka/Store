<template>
  <div class="order__body">
    <div class="order__left">
      <div class="reg__head">Зарегистрироваться</div>
      <div class="border"></div>
      <div class="order__contacts">
        <div>Контактная информация</div>
        <div class="contacts__input">
          <input class="order__input" type="text" name="" id="" placeholder="Телефон">
          <input class="order__input" type="text" name="" id="" placeholder="Email">
        </div>
      </div>
      <div class="order__recipient">
        <div>Получатель</div>
        <div class="recipient__input">
          <input class="order__input" type="text" name="" id="" placeholder="Имя">
          <input class="order__input" type="text" name="" id="" placeholder="Фамилия">
        </div>
      </div>
      <div class="order__adress">
        <div>Адрес доставки</div>
        <div class="adress__input">
          <input class="order__input" type="text" name="" id="" placeholder="Город">
          <input class="order__input" type="text" name="" id="" placeholder="Улица">
          <input class="order__input" type="text" name="" id="" placeholder="Подъезд">
          <input class="order__input" type="text" name="" id="" placeholder="Квартира">
        </div>
      </div>
      <div class="border"></div>
      <div class="order__buy">
        <nuxt-link to="/busket" class="to__busket">Вернуться в корзину</nuxt-link>
        <div class="buy__button order">Продолжить покупку</div>
      </div>
    </div>
    <div class="order__right">
      <div class="order__total">
        <div>
          <div class="total__head">Сумма заказа</div>
          <div class="total__sum">240 000 ₽</div>
        </div>
        <input class="total__discont" type="text" name="" id="" placeholder="Дисконтная карта">
        <div class="total__accept">Применить</div>
        <div class="total__des">Минимальная сумма заказа 500 р</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.order__body {
  display: flex;
  margin-left: 375px;
  gap: 60px;
  margin-bottom: 80px;
}
.order__left {
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
.order__buy {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order__contacts, .order__recipient, .order__adress, .order__buy {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #545155;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
}
.order__adress {
  height: 167px;
}
.order__buy {
  flex-direction: row;
  font-size: 16px
}
.order__input {
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
.buy__button.order{
  padding: 12px 30px 10px 30px;
  margin-left: 0;
}
.to__busket {
  text-decoration: none;
  width: 178px;
  font-size: 16px;
  color: #545155;
}
.order__right {
  width: 334px;
}
.order__total {
  display: flex;
  flex-direction: column;
  background: #FBF7F4;
  padding: 30px;
  border-radius: 10px;
  gap: 16px;
  margin-top: 64px;
  width: 274px;
}
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
  font-size: 12px;
  line-height: 150%;
}
</style>