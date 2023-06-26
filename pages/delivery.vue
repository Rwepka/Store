<template>
  <title>Доставка</title>
  <div class="delivery">
    <div class="delivery__head">ДОСТАВКА</div>
    <div class="SDEK">
      <div class="SDEK__head">
        <div>Доставка службой СДЭК</div>
        <img src="/assets/sdek.svg" alt="">
      </div>
      <div>Оплата услуг СДЭК включается в общую сумму заказа соразмерно веса и города отправки. В зависимости от региона срок доставки составит от 4 до 20 дней (для
      Дальнего Востока) с момента оплаты.
      Стоимость доставки будет зависеть от региона и веса посылки.
      </div>
      <div>Сайт службы доставки, edostavka.ru</div>
      <div class="another-del__line"><img src="/assets/exclamation-circle.svg" alt="">ВАЖНО: При оформлении заказа правильно указывайте название населённого пункта Доставки (нужно выбрать из списка населенных пунктов), только так</div>
      <div>Cистема опознает доступные для Вас тарифы. Для СДЭКа можно ввести индекс главпочтампа Вашего населённого пункта.
      После отправки трек-номер будет выслан Вам на электронную почту.
      </div>
      <div class="line__block">
        <div class="first-del__line">СДЭК (до пункта выдачи)</div>
        <div>Доставка заказа в один из пунктов самовывоза компании СДЭК.
        Удобный пункт выдачи Вы можете выбрать самостоятельно При оформлении заказа это поле будет доступно.
        </div>
      </div>
      <div class="line__block">
        <div class="first-del__line">СДЭК (доставка курьером до двери)</div>
        <div>При отправке СДЭК - есть возможность доставки до двери Важно правильно указать адрес доставки
        Если Вы желаете осуществить доставку до рабочего места пожалуйста напишите в поле «Комментарий к заказу» 
        <br>удобное время для доставки.</div>
      </div>
    </div>
    <div class="MAIL">
      <div class="MAIL__head">
        <div>Доставка Почтой России</div>
        <img src="/assets/mail.svg" alt="">
      </div>
      <div>В зависимости от региона срок доставки составит от 5 до 25 дней с момента оплаты. Оплата услуг Почты включается в общую сумму заказа соразмерно веса и города
      отправки.
      После отправки трек-номер будет выслан Вам на электронную почту.
      </div>
      <div class="another-del__line"><img src="/assets/exclamation-circle.svg" alt="">
        ВАЖНО: При оформлении заказа правильно указывайте индекс
        населённого пункта Доставки, 
        только так система опознает доступные для Вас тарифы
      </div>
      <div class="line__block">
        <div class="first-del__line">Посылка (обычная)</div>
        <div>
          Посылка весом до 20 кг. 
          Доставляется во все почтовые отделения 
          России и за границу Рекомендуем
          для крупногабаритных заказов и во все населенные пункты.
        </div>
      </div>
      <div class="line__block">
        <div class="first-del__line">Посылка онлайн - такая же посылка только по сниженным ценам!</div>
        <div>
          «Посылка онлайн» - эксклюзивный тариф для интернет-магазина. Ограничение до 10кг. Подходит для заказов не содержащие объемный товар ( например Палки для
          вигвама, синтепон ( свыше 3-х метров) файбер шарики свыше 1кг))
        </div>
      </div>
      <div>Вы получите посылку в Вашем почтовом отделении</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'other'
})
</script>

<style>
.delivery {
  margin-left: 375px;
  margin-bottom: 80px;
  margin-top: 60px;
  width: 1170px;
  color:#545155;
}
.delivery__head {
  font-size: 48px;
  font-weight: 500;
  line-height: 150%;
}
.SDEK, .MAIL {
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  background: #FBF7F4;
}
.MAIL {
  margin-top: 30px;
}
.SDEK__head, .MAIL__head {
  color: #BF1E77;
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  justify-content: space-between;
}
.another-del__line {
  display: flex;
  gap: 20px;
  padding: 20px 30px;
  border-radius: 10px;
  border: #BF1E7780 solid 1px;
}
.first-del__line {
  font-weight: 600;
  margin-bottom: 10px;
}
.line__block {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
}
</style>