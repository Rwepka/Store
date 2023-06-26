<template>
  <title>Оплата</title>
  <div class="payment">
    <div class="payment__head">ОПЛАТА</div>
    <div class="payment__exclamination"> <img class="ex__circle" src="/assets/exclamation-circle.svg" alt=""> Цены, указанные на сайте, являются окончательными и не требуют доплат при стандартных
    <br/>условиях поставки Все налоги включены в стоимость товара.
    </div>
    <div class="payment__attention">
      <div class="attention__head">Внимание!</div>
      <div class="attention__first">Для каждого отдельного заказа возможен только один способ оплаты на ваш выбор. 
      <br>Оплата заказа по частям различными способами невозможна.</div>
      <div class="attention__second">
      После того, как вы сформировали ваш заказ, и наш менеджер подтвердил наличие всех позиций, вы оплачиваете сумму утвержденного заказа любыми из предложенных
      ниже способов После оплаты вы сообщаете нам по телефону или по e-mail способ, которым вы перечислили нам деньги, сумму и ФИО отправителя, если таковые
      указывались при перечислении После получения денег мы сообщаем вам о готовности отправить посылку, а после отправки присылаем вам номер почтового
      идентификатора.
      </div>
    </div>
    <div class="first__way">
      <div class="way__head">СПОСОБ 1: Онлайн-оплата через сайт банковской картой</div>
      <div>При оформлении заказа выбирайте «Оплата банковской картой онлайн». 
      <br>На основании изменений в закон 54-ФЗ «О применении контрольно-кассовой техники» с 01.07.2017
      все интернет-магазины должны быть оборудованы он-лайн кассами. Мы соблюдаем закон.
      </div>
      <div>
        <div class="first__line">Какие преимущества данного способа оплаты?</div>
        <div class="another__line"> <img class="line__circle" src="/assets/ellipse.svg" alt=""> С вас не будет браться комиссия за перевод денег</div>
        <div class="another__line"> <img class="line__circle" src="/assets/ellipse.svg" alt="">Платёж проходит в течение нескольких минут, после чего Вам и нам на электронную 
        <br>почту приходит информация с подтверждением оплаты
        </div>
        <div class="another__line"> <img class="line__circle" src="/assets/ellipse.svg" alt="">Оплату мы видим автоматически</div>
      </div>
      <div>
        <div class="first__line">Как оплачивать</div>
        <div class="another__line"> <img class="line__circle" src="/assets/ellipse.svg" alt="">Действующие платежные системы МИР, Visa, Mastercard, поэтому мы рассказываем только про них</div>
        <div class="another__line"> <img class="line__circle" src="/assets/ellipse.svg" alt="">Для осуществления данного платежа Вам будет необходимо перейти по ссылке в письме, которое Вы получите после утверждения заказа</div>
        <div class="another__line"> <img class="line__circle" src="/assets/ellipse.svg" alt="">Для того, чтобы платёж прошёл без сбоя Вам будет необходимо только устойчивое интернет-соединение и карта. Поэтому плажет лучше всего осуществлять дома,
предварительно подготовив карту и телефон на который придет СМС-код для подтверждения платежа Карта должна быть «привязана» к телефону</div>
        <div class="another__line"> <img class="line__circle" src="/assets/ellipse.svg" alt="">Важно чтобы карты обладали трёхзначным кодом с обратной стороны, используемым при расчетах в интернете. Коды эти нужны для проведения транзакций в интернете,
когда невозможно подтвердить подлинность карты и ее принадлежность пользователю</div>
        <div class="another__line"> <img class="line__circle" src="/assets/ellipse.svg" alt="">При оплате заказа банковской картой. Ваши конфиденциальные данные (реквизиты карты, регистрационные данные и др ) не поступают в интернет-магазин, их обработка
полностью защищена и никто, в том числе наш интернет-магазин, не может их получить</div>
      </div>
      <div>
        <div class="first__line">Как происходит возврат денежных средств?</div>
        <div>В случае возврата, денежные средства возвращаются на ту же карту, с которой производилась оплата</div>
      </div>
    </div>
    <div class="second__way">
      <div class="way__head">СПОСОБ 2: Оплата по квитанции через банк (только для физ. лиц)</div>
      <div>При оформлении заказа выбирайте «Оплата по банковской организации».</div>
      <div>
        <div class="first__line">Как оплачивать по квитанции через банк?</div>
        <div> Оплатить можно в банке через операциониста (квитанцию можно распечатать в личном кабинете на нашем сайте или пройдя 
        <br>по ссылке, которая будет выслана вам письмом
        по электронной почте) или по реквизитам, указанным ниже на этой странице</div>
      </div>
    </div>
    <div class="third__way">
      <div class="way__head">СПОСОБ 3: Оплата на реквизиты от организации или ИП</div>
      <div>Данный способ оплаты возможен только по предварительной договоренности с менеджером. 
      <br>Уточняйте подробности по телефону 8 (800) 700-09-43, с 9 до 19, с
      понедельника по пятницу</div>
    </div>
    <div class="fourth__way">
      <div class="way__head">СПОСОБ 4: Оплата наличными</div>
      <div>Данный способ оплаты возможен только при визите в розничный магазин, расположенный в городе Кирове</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'other'
})
</script>

<style>
.payment {
  margin-left: 375px;
  width: 1170px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #545155;
  line-height: 150%;
  margin-bottom: 80px;
  margin-top: 60px;
}
.payment__head {
  font-size: 48px;
  font-weight: 500;
  line-height: 150%;
}
.payment__exclamination {
  display: flex;
  gap: 20px;
  font-size: 16px;
  line-height: 150%;
  padding: 20px 30px;
  border: solid 1px #BF1E7780;
  border-radius: 10px;
}
.ex__circle {
  width: 36px;
}
.payment__attention {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #FBF7F4;
  padding: 30px;
  border-radius: 10px;
}
.attention__head, .way__head {
  color: #BF1E77;
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
}
.attention__first, .attention__second {
  font-size: 16px;
}
.first__way, .second__way, .third__way, .fourth__way {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background: #FBF7F4;
  border-radius: 10px;
}
.first__line {
  font-weight: 600;
  margin-bottom: 10px;
}
.another__line {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.line__circle {
  margin-top: 5px;
}
</style>