<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="sector1">
        <h2 class="foote__logo">
          <img src="../assets/svg/LogoFooter.svg" />
        </h2>
      </div>

      <div class="sector2">
        <div class="block">
          <div class="block_cards">
            <a href="#" class="text">
              Все модельеры
            </a>
            <a href="#" class="text">
              Доставка
            </a>
            <a href="#" class="text">
              Условия использования
            </a>
            <a href="#" class="text">
              Модельерам
            </a>
            <a href="#" class="text">
              Оплата
            </a>
            <a href="#" class="text">
              Политика конфиденциальности
            </a>
            <a href="#" class="text">
              Снять мерки
            </a>
            <a href="#" class="text">
              Возврат
            </a>
            <a href="#" class="text">
              Куки
            </a>
          </div>
        </div>
        <div class="pay">
          <img src="../assets/svg/Pay.svg" />
        </div>
      </div>

      <div class="sector3">
        <div class="icons">
          <a href="https://vk.com"><img src="../assets/svg/VK.svg"/></a>
          <a href="https://yandex.ru/"
            ><img src="../assets/svg/InstagramForFooter.svg"
          /></a>
          <a href="https://mail.ru/"
            ><img src="../assets/svg/TheFacebook.svg"
          /></a>
        </div>
      </div>

      <hr />
      <div class="sector4">
        <div class="text1">C2019 Fit For You. Все права защищены</div>
      </div>
      <div class="sector5"><div class="text1">JS Corp</div></div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
a:hover,
a:focus,
a:active {
  opacity: 0.75;
}
.sector5 > .text1 {
  padding-left: 67px;
}
.sector4 {
  width: 1430px;
  float: left;
  padding-left: 350px;
}
.sector5 {
  float: left;
  width: 470px;
}
.text1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding-top: 10px;
}
.pay {
  padding-top: 15px;
}
.icons > a > img {
  padding-right: 30px;
}
.icons {
  padding-top: 50px;
}
.sector1 {
  width: 350px;
  float: left;
  min-height: 240px;
}
.sector2 {
  float: left;
  width: 1080px;
  min-height: 240px;
}
.sector3 {
  float: left;
  width: 470px;
  min-height: 240px;
}
.text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding-bottom: 10px;
  text-decoration: none;
}
.block {
  padding-right: 350px;
  padding-top: 50px;
}
.block_cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.footer {
  width: 1900px;
  min-height: 300px;
  background-color: black;
}
.footer__wrap {
  margin: 0 auto;
}
.foote__logo {
  padding-top: 50px;
  padding-left: 150px;
  width: 100px;
}
</style>
