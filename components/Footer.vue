<template>
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
    <div class="pay">
        <div class="pay__head">Способ оплаты</div>
        <div class="cards">
            <img src="/assets/Visa.png" alt="">
            <img src="/assets/PayPal.png" alt="">
            <img src="/assets/MasterCard.png" alt="">
        </div>
        <div class="info__foot sec">Все права защищены (С)</div>
    </div>
    <img class="map" src="/assets/Map.png" alt="">
</div>
    
</template>

<script>
</script>

<style lang="scss">
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
    gap: 145px
}
.contacts {
    margin-left: 373px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
}
.contacts, .pay {
    margin-top: 84px;
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