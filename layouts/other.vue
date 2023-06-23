<template>
    <div class="true__navbar">
        <Nuxt-link to="/">Главная</Nuxt-link>
        <Nuxt-link to="/catalog">Каталог</Nuxt-link>
        <Nuxt-link to="/product">Подробнее</Nuxt-link>
        <Nuxt-link to="/contacts">Контакты</Nuxt-link>
        <Nuxt-link to="/history">История</Nuxt-link>
        <Nuxt-link to="/favorites">Избранные</Nuxt-link>
        <Nuxt-link to="/busket">Корзина</Nuxt-link>
        <Nuxt-link to="/order">Заказ</Nuxt-link>
        <Nuxt-link to="/personal">Личный кабинет</Nuxt-link>
        <Nuxt-link to="/payment">Оплата</Nuxt-link>
        <Nuxt-link to="/delivery">Доставка</Nuxt-link>
    </div>
  <div class="navbar">
      <div class="top">
          <Nuxt-link class="logo" to="/">
              ТКАНИ
          </Nuxt-link>
          <div class="search">
              <img class="search__image" src="@/assets/flag.svg" alt="">
              <div class="search__text">Санкт-Петербург</div>
              <input class="search__area" placeholder="Я ищу">
          </div>
          <div class="phone__graphic">
              <div class="phone">8 800 900 70 90</div>
              <div class="graphic">Пн-вс: 10:00 - 21:00</div>
          </div>
          <div class="user__busket">
              <div class="user__favorite">
                  <Nuxt-link class="favorite__button" to="/favorite">
                      <img src="@/assets/favorite.svg" alt="" class="favorite">
                  </Nuxt-link>
                  <Nuxt-link class="user__button" to="/user">
                      <img src="@/assets/user.svg" alt="" class="user">
                  </Nuxt-link>
              </div>
              <Nuxt-link class="busket__button" to="/busket">
                  <img src="@/assets/busket.svg" alt="">
                  <div class="busket__count">12</div>
              </Nuxt-link>
          </div>
      </div>
      <div class="bottom">
          <Nuxt-link class="for__cloth">Для одежды</Nuxt-link>
          <Nuxt-link class="for__interior">Для интерьера</Nuxt-link>
          <Nuxt-link class="furniture">Мебельные</Nuxt-link>
          <Nuxt-link class="fittings">Фурнитура</Nuxt-link>
          <Nuxt-link class="yarn">Пряжа</Nuxt-link>
          <Nuxt-link class="new__year">Новогодние</Nuxt-link>
          <Nuxt-link class="for__sewing">Для шитья</Nuxt-link>
      </div>
  </div>
  <div class="mini__nav">
    <img class="nav__image" src="/assets/home.svg" alt="">
    <div class="home">Главная</div>
    <div>/</div>
    <div class="nav__catalog">Каталог товаров</div>
  </div>
<slot />
<div class="banner">
    <div class="banner__block">
        <div class="left__block">
            <div class="banner__head">ПОДПИШИТЕСЬ НА РАССЫЛКУ</div>
            <div class="banner__sale">Будьте в курсе наших акций</div>
        </div>
        <div class="subscribe__block">
            <div class="mail__block">
                <input class="mail" placeholder="Ваша почта">
                <div class="subscribe__button">Подписаться <img src="/assets/subscribearrow.svg" alt=""></div>
            </div>
            <div class="agreement">Нажимая кнопку, вы даете согласие на обработку ваших персональных данных в соответствии с <Nuxt-link>Политикой Конфиденциальности</Nuxt-link></div>
        </div>
    </div>
  </div>
  <div class="info">
    <div class="contacts">
        <div class="info__head">Наши контакты</div>
        <div class="info__main">8 800 900 70 90</div>
        <div class="info__main">г. Орск Проспект Ленина 71 / А</div>
        <div class="info__main">Пн-вс: 10:00 - 21:00 <div>без выходных</div></div>
        <div class="icons">
            <img src="/assets/instagramm.png" alt="">
            <img src="/assets/vk.png" alt="">
        </div>
        <div class="info__foot">Политика конфиденциальности</div>
    </div>
    <div class="sections">
      Разделы
      <div class="sections__items">Для одежды</div>
      <div class="sections__items">Для интерьера</div>
      <div class="sections__items">Мебельные</div>
      <div class="sections__items">Фурнитура</div>
      <div class="sections__items">Пряжа</div>
      <div class="sections__items">Новогодние</div>
      <div class="sections__items">Для шитья</div>
    </div>
    <div class="pay">
        <div class="pay__head">Способ оплаты</div>
        <div class="cards">
            <img src="/assets/Visa.png" alt="">
            <img src="/assets/PayPal.png" alt="">
            <img src="/assets/MasterCard.png" alt="">
        </div>
        <div class="info__foot sec">Все права защищены (С)</div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.true__navbar {
    display: flex;
    justify-content: space-around;
}
.navbar {
    display: flex;
    flex-direction: column;
    gap: 17px;
    box-shadow: 0px 11px 35px rgba(86, 52, 71, 0.1);
    width: 1920px;
}
.top {
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 37px;
    margin-left: 375px
}
.logo {
    position: relative;
    width: 174px;
    height: 72px;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 150%;
    color: #BF1E77;
    cursor: pointer;
    text-decoration: none;
}
.search {
    position: relative;
    display: flex;
    width: 492px;
    height: 40px;
    align-items: center;
    margin-left: 77px;
}
.search__image {
    position: relative;
    width: 13px;
    height: 15px;
}
.search__text {
    position: relative;
    font-size: 11.8px;
    width: 107px;
    margin-left: 12px;
    color: rgba(84, 81, 85, 1);
}
.search__area {
    position: relative;
    width: 309px;
    height: 40px;
    box-sizing: border-box;
    margin-left: 50px;
    padding-left: 16px;
    background: rgba(251, 247, 244, 1);
    border: 0;
    border-radius: 4px;
}
.phone__graphic {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 164px;
    margin-left: 61px;
    align-items: flex-end;
}
.phone {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: rgba(84, 81, 85, 1);
}
.graphic {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: rgba(84, 81, 85, 1);
}
.user__busket {
    display: flex;
}
.user__favorite {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 101px;
    background: #FBF7F4;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-left: 28px;
}
.favorite {
    border-right: rgba(191, 30, 119, 1) 1px solid;
    padding-right: 15px;
}
.favorite__button {
    cursor: pointer;
    padding: 10px 0px;
    padding-left: 16px;
}
.user {
    padding-inline-start: 15px;
}
.user__button {
    cursor: pointer;
    padding: 9px 0px;
    padding-right: 22px;
}
.busket__count {
    color: white;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
}
.busket__button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 73px;
    height: 40px;
    background: #BF1E77;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    text-decoration: none;
}
.mini__nav {
  display: flex;
  height: 50px;
  background: #FBF7F4;
  width: 1770px;
  border-radius: 0 0 20px 0;
  align-items: center;
  gap: 20px;
  color: #545155;
  font-size: 12px;
  line-height: 150%;
}
.nav__image {
  margin-left: 374px
}
.nav__catalog {
  opacity: .3;
}

.bottom {
    display: flex;
    gap: 82px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    margin-left: 375px
}
.for__cloth {
    color: rgba(191, 30, 119, 1);
    border-bottom: rgba(191, 30, 119, 1) solid;
}
.for__cloth, .for__interior, .furniture, .fittings, .yarn, .new__year, .for__sewing {
    cursor: pointer;
}
.banner {
    margin-left: 375px;
}
.banner__block {
    display: flex;
    width: 1030px;
    background: url(/assets/Banner.png);
    background-repeat: no-repeat;
    gap: 48px;
    padding: 70px;
}
.banner__head {
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    line-height: 150%;
    color: #FFFFFF;
    margin-bottom: 19px;
    width: 339px;
}
.banner__sale {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #FFFFFF;
}
.subscribe__block {
    height: 104px;
    width: 640px;
    padding-top: 54px;
}
.mail__block {
    display: flex;
    gap: 20px
}
.mail {
    width: 388px;
    height: 50px;
    background: #FBF7F4;
    border-radius: 4px;
    padding-left: 30px;
    border: none;
}
.mail::placeholder {
    color: rgba(191, 30, 119, 1);
}
.mail:active {
    border: none
}
.subscribe__button {
    display: flex;
    background: #545155;
    border-radius: 4px;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    width: 221px;
    padding-left: 30px;
    align-items: center;
    gap: 20px;
}
.agreement {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #FFFFFF;
    margin-top: 17px
}
.info {
    display: flex;
    color: #545155;
    margin-top: 84px;
    width: 1170px;
    margin-left: 375px;
    margin-bottom: 75px;
}
.contacts {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-right: 72px;
    border-right: solid 1px rgba(191, 30, 119, 0.2);
}
.contacts, .pay, .sections {
    padding-right: 72px;
    margin-right: 72px;
    height: 358px;
    width: 293px;
}
.sections {
  border-right: solid 1px rgba(191, 30, 119, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #545155;
}
.sections__items {
  opacity: .5;
}
.icons {
    display: flex;
    margin-top: 62px;
    margin-bottom: 62px;
    gap: 20px
}
.info__main {
    margin-top: 20px
}
.info__head, .pay__head {
    font-weight: 600;
}
.pay {
    margin: 0;
    padding: 0;
}
.info__foot {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #545155;
    opacity: 0.4;
    margin-bottom: 95px
}
.info__foot.sec {
    margin-top: 171px
}
.cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 50px;
    margin-top: 16px
}
.foot__block {
    display: flex;
    gap: 200px;
    margin-left: 373px;
}
.map {
    margin-top: -155px;
    z-index: -1;
}
</style>