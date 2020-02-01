<template>
  <section class="about_service">
    <div class="about_service_wrap">
      <h2 class="about_service__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="О сервисе"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">
          Комфортная работа
        </p>
      </h2>
      <div class="block">
        <div class="block_cards">
          <div class="block_up">
            <div class="block_up_text">
              <div class="block_text">
                Принимайте заказы с Fit For You. Вы занимаетесь любимы делом, а
                мы рассказываем всем о вас.
              </div>
              <form class="telephone-form">
                <fieldset class="telephone__wrap">
                  <p class="telephone__info">
                    <the-mask
                      :mask="['+7 ### ### ## ##']"
                      name="tel"
                      class="telephone"
                      placeholder="+ 7 987 123 45 67"
                    />
                    <router-link to="#" class="card_saw">
                      Отправить
                      <img
                        src="../../assets/svg/Arrow.svg"
                        alt="Посмотреть"
                        style="padding-left: 10px"
                      />
                    </router-link>
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
                    принимаю условия политики конфиденциальности
                  </p>
                </fieldset>
              </form>
            </div>
            <div class="block_up_img">
              <img src="../../assets/main/AboutServeMain.jpg" />
            </div>
          </div>
          <ForAboutService />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { TheMask } from "vue-the-mask";
import ForAboutService from "../things/ForAboutService";

export default {
  components: { TheMask, ForAboutService }
};
</script>

<style scoped>
.serach-form__wrap {
  /*max-width: 400px;*/
}
.card_saw:hover,
.card_saw:focus,
.card_saw:active {
  opacity: 0.75;
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
}
.card_saw {
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
  padding-left: 20px;
}

.telephone__info {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
}

.telephone {
  width: 270px;
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

.telephone::placeholder {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #7c7c7c;
}

.block_text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #000000;
  padding-bottom: 65px;
  max-width: 525px;
}
.block_up {
  margin-bottom: 100px;
}
.block_up:after {
  content: " ";
  clear: both;
  display: table;
}
.block_up_text {
  width: 50%;
  float: left;
  padding-top: 60px;
  max-width: 400px;
}
.block_up_img {
  width: 50%;
  float: right;
  margin-right: 40px;
}
.block {
  padding-left: 350px;
  padding-right: 350px;
  margin-top: 100px;
}
.about_service {
  /*width: 1900px;*/
  min-height: 1000px;
}

.about_service_wrap {
  background-color: #fff;
  margin: 0 auto;
}

.about_service__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;
  /* identical to box height */

  display: flex;
  align-items: center;
  color: #000000;
  padding-top: 100px;
  padding-left: 200px;
}
</style>
