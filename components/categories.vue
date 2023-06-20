<template>
  <div class="categories">
        <div class="categories__name">
            <div class="popular">ПОПУЛЯРНЫЕ КАТЕГОРИИ</div>
        </div>
        <div class="first__line">
            <div>
                <img src="/assets/linen.png" alt="">
                <div class="line__text">Лен и полулен</div>
            </div>
            <div>
                <img src="/assets/cotton.png" alt="">
                <div class="line__text">Хлопок</div>
            </div>
        </div>
        <div class="second__line">
            <div>
                <img src="/assets/viscose.png" alt="">
                <div class="line__text">Вискоза</div>
            </div>
            <div>
                <img src="/assets/christmas__fabrics.png" alt="">
                <div class="line__text">Новогодние ткани</div>
            </div>
        </div>
        <div class="third__line">
            <div>
                <img src="/assets/linen2.png" alt="">
                <div class="line__text">Лен и полулен</div>
            </div>
            <div>
                <img src="/assets/cotton2.png" alt="">
                <div class="line__text">Хлопок</div>
            </div>
            <div>
                <img src="/assets/viscose2.png" alt="">
                <div class="line__text">Вискоза<img class="line__img" src="/assets/Arrow.svg" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.first__line, .second__line, .third__line {
    display: flex;
    height: 300px;
    margin-left: 223px;
    gap: 30px
}
.second__line, .third__line {
    margin-top: 30px;
}
.line__text {
    position: relative;
    top: -71px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #FFFFFF;
    margin-left: 40px;
}
.line__img {
    margin-left: 10px;
    margin-bottom: 2px;
}
.categories {
    background: rgba(251, 247, 244, 1);
    width: 1768px;
    height: 1000px;
    margin-left: 247px;
    margin-top: 100px;

}
.popular {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 150%;
    color: #545155;
    padding-top: 83px;
}
.categories__name {
    width: 1170px;
    height: 196px;
    margin-left: 223px;
    text-align: center;
    background-image: url(@/assets/categories.png);
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 30px;
}
</style>