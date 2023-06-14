<template>
  <div class="specials">
        <div class="first">
            <img src="/assets/sale1.png" alt="">
            <div class="specials__line">
                <div class="percent">20%</div>
                <div class="specials__text">на новые ткани</div>
            </div>
        </div>
        <div class="second">
            <img src="/assets/sale2.png" alt="">
            <div class="specials__line">
                <div class="percent">15%</div>
                <div class="specials__text">на <div>ткани</div></div>
            </div>
        </div>
        <div class="third">
            <img src="/assets/sale3.png" alt="">
            <div class="specials__line">
                <div class="percent">6%</div>
                <div class="specials__text">8 марта на ткани</div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
.specials__line {
    display: flex;
    position: relative;
    top: -126px;
    left: 40px;
    gap: 20px;
    align-items: center;
}
.percent {
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 150%;
    display: flex;
    align-items: flex-end;
    color: #FFFFFF;
}
.specials__text {
    width: 125px;
    height: 68px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: #FFFFFF;
}
</style>