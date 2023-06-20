<template>
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
</template>
<style lang="scss" scoped>
.navbar {
    display: flex;
    flex-direction: column;
    height: 184px;
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
</style>