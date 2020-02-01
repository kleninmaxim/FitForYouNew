<template>
  <section class="checkout1">
    <div class="checkout1_wrap">
      <router-link to="#" class="content__saw">
        <img
          src="../../assets/svg/ArrowLeft.svg"
          alt="Посмотреть"
          style="padding-right: 10px"
        />
        Назад
      </router-link>
      <h2 class="checkout1__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="О сервисе"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">
          Оформление заказа
        </p>
      </h2>
      <div class="block">
        <div class="block_cards">
          <div class="block_right">
            <div class="download_photo">
              <div class="logotype">
                Фото
              </div>
              <img
                src="../../assets/svg/Logotype.svg"
                style="padding-left: 125px; padding-right: 125px;"
              />
            </div>
            <div class="text1">
              <img
                src="../../assets/svg/Radio.svg"
                alt="принимаю условия политики конфиденциальности"
                style="padding-right: 10px; vertical-align:middle; display:inline-block;"
              />
              <p
                class="politic"
                style="height:17px; vertical-align:middle; display:inline-block;"
              >
                Женщина
              </p>
              <img
                src="../../assets/svg/Radio.svg"
                alt="принимаю условия политики конфиденциальности"
                style="padding-right: 10px; vertical-align:middle; display:inline-block;"
              />
              <p
                class="politic"
                style="height:17px; vertical-align:middle; display:inline-block;"
              >
                Мужчина
              </p>
            </div>
          </div>
          <div class="block_left">
            <form class="request-form">
              <fieldset class="request__wrap">
                <p class="request__info">
                  <input
                    type="text"
                    name="user-like-to-do"
                    class="request_important"
                    placeholder="ФИО*"
                  />
                </p>
                <p class="request__info">
                  <input
                    type="text"
                    name="user-like-to-do"
                    class="request_important"
                    placeholder="Город*"
                  />
                </p>
                <p class="request__info">
                  <input
                    type="text"
                    name="user-like-to-do"
                    class="request_important"
                    placeholder="Стиль*"
                  />
                </p>
                <p class="request__info">
                  <input
                    type="tel"
                    name="user-like-to-do"
                    class="request_important"
                    placeholder="+ 7 927 798 12 13*"
                  />
                </p>

                <router-link
                  to="#"
                  class="connect content_button"
                  style="vertical-align:middle; display:inline-block; text-decoration: none"
                >
                  Сшить на заказ
                  <img
                    src="../../assets/svg/ButtonBlack.svg"
                    alt="Сшить на заказ"
                    style="padding-left: 20px"
                  />
                </router-link>
              </fieldset>
            </form>
          </div>
          <div style="clear: both;"></div>
        </div>
        <div class="purchases">
          <div class="header_nav">
            <ul class="purchases_up">
              <li class="thing1">
                Кофта
              </li>
              <li class="thing1">
                Платье
              </li>
              <li class="thing1">
                Рубашка
              </li>
            </ul>
            <div style="clear: both;"></div>
          </div>
          <hr style="margin-right: 150px; margin-left: 159px;" />
          <div class="purchases_down">
            <ul class="things">
              <li class="about_thing">
                <div class="image_about_thing">
                  <img src="../../assets/order1/thing1.jpg" />
                </div>
                <div class="thing_name">
                  Название
                </div>
                <div class="thing_material">
                  <h6 class="disable_base">Материал</h6>
                  Денни
                </div>
                <div class="thing_price">
                  1459 руб/м
                </div>
              </li>
              <li class="about_thing">
                <div class="image_about_thing">
                  <img src="../../assets/order1/thing1.jpg" />
                </div>
                <div class="thing_name">
                  Название
                </div>
                <div class="thing_material">
                  <h6 class="disable_base">Материал</h6>
                  Денни
                </div>
                <div class="thing_price">
                  1459 руб/м
                </div>
              </li>
              <li class="about_thing">
                <div class="image_about_thing">
                  <img src="../../assets/order1/thing1.jpg" />
                </div>
                <div class="thing_name">
                  Название
                </div>
                <div class="thing_material">
                  <h6 class="disable_base">Материал</h6>
                  Денни
                </div>
                <div class="thing_price">
                  1459 руб/м
                </div>
              </li>
              <li class="about_thing">
                <div class="image_about_thing">
                  <img src="../../assets/order1/thing1.jpg" />
                </div>
                <div class="thing_name">
                  Название
                </div>
                <div class="thing_material">
                  <h6 class="disable_base">Материал</h6>
                  Денни
                </div>
                <div class="thing_price">
                  1459 руб/м
                </div>
              </li>
              <li class="about_thing">
                <div class="image_about_thing">
                  <img src="../../assets/order1/thing1.jpg" />
                </div>
                <div class="thing_name">
                  Название
                </div>
                <div class="thing_material">
                  <h6 class="disable_base">Материал</h6>
                  Денни
                </div>
                <div class="thing_price">
                  1459 руб/м
                </div>
              </li>
              <li class="about_thing">
                <div class="image_about_thing">
                  <img src="../../assets/order1/thing1.jpg" />
                </div>
                <div class="thing_name">
                  Название
                </div>
                <div class="thing_material">
                  <h6 class="disable_base">Материал</h6>
                  Денни
                </div>
                <div class="thing_price">
                  1459 руб/м
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.disable_base {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #7c7c7c;
  padding-right: 10px;
}
.thing_price {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
}
.thing_material {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  padding-bottom: 20px;
}
.image_about_thing {
  padding-bottom: 20px;
}
.thing_name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  max-width: 350px;
  padding-bottom: 20px;
}
.about_thing {
  margin-bottom: 70px;
}
.things {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1px;
  padding-left: 30px;
}

.purchases_down {
  margin-top: 65px;
}
.header_nav:after {
  content: " ";
  clear: both;
  display: table;
}
.header_nav {
  width: 100%;
}
.thing1 {
  min-width: 100px;
}
.purchases_up {
  float: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1px;
  padding-left: 159px;
  margin-bottom: 10px;
}
.politic {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  padding-right: 30px;
}
.content_button {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  text-decoration: none;
}
.content_button:hover,
.content_button:focus,
.content_button:active {
  opacity: 0.75;
}
.connect {
  float: right;
  margin-top: 50px;
}
.request__info {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 23px;
}
.request_important {
  width: 450px;
  background-size: 20px;
  border: 0;
  border-bottom: 2px solid #bfc0c5;
  /* margin-right: 60px;*/
  padding-left: 20px;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  color: black;
}

.request_important::placeholder {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #7c7c7c;
}
.download_photo {
  background: #f8f8f8;
  min-height: 200px;
  margin-bottom: 10px;
}
.block_left {
  float: left;
}
.block_cards:after {
  content: " ";
  clear: both;
  display: table;
}
.logotype {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #7c7c7c;
  padding: 17px 148px 16px 148px;
}
.block_cards {
  padding-left: 159px;
}
.block_right {
  width: 350px;
  margin-right: 82px;
  float: left;
}
.block {
  padding-left: 509px;
  padding-right: 509px;
  margin-top: 60px;
  margin-bottom: 50px;
}
.content__saw {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  text-decoration: none;
  padding-left: 350px;
  padding-top: 100px;
}
.block {
  padding-left: 350px;
  padding-right: 350px;
  margin-top: 100px;
}

.checkout1 {
  /*width: 1900px;*/
}

.checkout1_wrap {
  background-color: #fff;
  margin: 0 auto;
}

.checkout1__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;

  display: flex;
  align-items: center;
  color: #000000;
  padding-top: 40px;
  padding-left: 200px;
}
</style>
