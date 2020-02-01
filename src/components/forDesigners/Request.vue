<template>
  <section class="request">
    <div class="request_wrap">
      <div class="block">
        <div class="block_cards">
          <div class="block_right">
            <div class="download_logotype">
              <div class="logotype">
                Логотип
              </div>
              <img
                src="../../assets/svg/Logotype.svg"
                style="padding-left: 125px; padding-right: 125px;"
              />
            </div>
            <div class="text1">
              Начните принимать заказы уже сегодня
            </div>
            <div class="text2">
              оставьте заявку на подключение и мы свяжемся с вами в ближайшее
              время
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
                    placeholder="Фамилия*"
                  />
                </p>
                <p class="request__info">
                  <input
                    type="text"
                    name="user-like-to-do"
                    class="request_important"
                    placeholder="Имя*"
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
                  <the-mask
                    :mask="['+7 ### ### ## ##']"
                    name="tel"
                    class="request_important"
                    placeholder="+ 7 987 123 45 67"
                  />
                </p>
                <p class="request__info">
                  <input
                    type="email"
                    name="user-like-to-do"
                    class="request_important"
                    placeholder="Email*"
                  />
                </p>

                <router-link
                  to="#"
                  class="connect content_button"
                  style="vertical-align:middle; display:inline-block; text-decoration: none"
                >
                  Подключиться
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
      </div>
    </div>
  </section>
</template>

<script>
import { TheMask } from "vue-the-mask";

export default {
  components: { TheMask }
};
</script>

<style scoped>
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

.text1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  padding-bottom: 20px;
}
.text2 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
}
.download_logotype {
  background: #f8f8f8;
  min-height: 200px;
  margin-bottom: 10px;
}
.block_left {
  float: left;
}
.block_right {
  float: left;
  width: 50%;
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
.block_right {
  width: 350px;
  margin-right: 82px;
}
.block {
  padding-left: 509px;
  padding-right: 509px;
  margin-top: 60px;
  margin-bottom: 50px;
}
.request {
  /*width: 1900px;*/
  min-height: 450px;
}

.request_wrap {
  background-color: #fff;
  margin: 0 auto;
}
</style>
