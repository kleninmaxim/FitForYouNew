<template>
  <section class="about_service">
    <div class="about_service_wrap">
      <h2 class="about_service__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="О сервисе"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">О сервисе</p>
      </h2>
      <div class="block">
        <div class="block_cards">
          <div class="block_up">
            <div class="block_up_img">
              <img src="../../assets/main/AboutServeMain.jpg" />
            </div>
            <div class="block_up_text">
              <div class="block_up_text_up">
                Сервис пошива одежды у модельеров со всего мира. Пришло время
                носить одежду, сшитую только для вас.
              </div>
              <router-link
                to="#"
                class="content_button"
                style="vertical-align:middle; display:inline-block; text-decoration: none"
              >
                Сшить на заказ
                <img
                  src="../../assets/svg/ButtonBlack.svg"
                  alt="Сшить на заказ"
                  style="padding-left: 20px"
                />
              </router-link>
            </div>
          </div>
          <ForAboutService />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ForAboutService from "../things/ForAboutService";

export default {
  components: {
    ForAboutService
  }
};
</script>

<style scoped>
.content_button:hover,
.content_button:focus,
.content_button:active {
  opacity: 0.75;
}
.block_up {
  margin-bottom: 70px;
}
.block_up:after {
  content: " ";
  clear: both;
  display: table;
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
.block_up_text_up {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #000000;

  padding-bottom: 65px;
}
.block_up_text {
  width: 50%;
  float: left;
  padding-left: 60px;
  padding-top: 60px;
  max-width: 400px;
}
.block_up_img {
  width: 50%;
  float: left;
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
  padding-top: 150px;
  padding-left: 200px;
}
</style>
