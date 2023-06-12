<template>
  <div class="banner">
    <div class="banner__block">
        <div class="left__block">
            <div class="banner__head">ПОДПИШИТЕСЬ НА РАССЫЛКУ</div>
            <div class="banner__sale">Будьте в курсе наших акций</div>
        </div>
        <div class="subscribe__block">
            <div class="mail__block">
                <input type="text" class="mail" placeholder="Ваша почта">
                <div class="subscribe__button">Подписаться <img src="/assets/subscribearrow.svg" alt=""></div>
            </div>
            <div class="agreement">Нажимая кнопку, вы даете согласие на обработку ваших персональных данных в соответствии с <Nuxt-link>Политикой Конфиденциальности</Nuxt-link></div>
        </div>
    </div>
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
    background: #BF1E77;
    gap: 48px;
    padding: 70px;
}
.banner__head {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    line-height: 150%;
    color: #FFFFFF;
    margin-bottom: 19px;
    width: 339px;
}
.banner__sale {
    font-family: 'Montserrat';
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
}
.mail::placeholder {
    color: rgba(191, 30, 119, 1);
}
.subscribe__button {
    display: flex;
    background: #545155;
    border-radius: 4px;
    color: white;
    font-family: "Montserrat";
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #FFFFFF;
    margin-top: 17px
}
</style>