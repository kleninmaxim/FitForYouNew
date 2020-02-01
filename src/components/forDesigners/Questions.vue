<template>
  <section class="questions">
    <div class="questions_wrap">
      <h2 class="questions__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="О сервисе"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">
          У вас остались вопросы?
        </p>
      </h2>
      <div class="block">
        <div class="block_wrap">
          <form class="request-form">
            <fieldset class="request__wrap">
              <p class="request__info">
                <input
                  type="text"
                  name="user-like-to-do"
                  class="request_important"
                  placeholder="Как к вам обращаться*"
                />
              </p>
              <p class="request__info">
                <input
                  type="text"
                  name="user-like-to-do"
                  class="request_important"
                  placeholder="Ваш email*"
                />
              </p>
              <p class="request__info">
                <select name="" id="" class="select">
                  <option value="" class="theme" disabled selected
                    >Тема вопроса*</option
                  >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </p>
              <p class="request__info">
                <input
                  type="tel"
                  name="user-like-to-do"
                  class="request_important"
                  placeholder="Ваше сообщение*"
                />
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

              <router-link
                to="#"
                class="submit content_button"
                style="vertical-align:middle; display:inline-block; text-decoration: none"
              >
                Отправить
                <img
                  src="../../assets/svg/ButtonBlack.svg"
                  alt="Сшить на заказ"
                  style="padding-left: 20px"
                />
              </router-link>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.theme {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #7c7c7c;
}
.select {
  width: 800px;
  background-size: 20px;
  border: 0;
  border-bottom: 2px solid #bfc0c5;
  padding-left: 17px;
  font-weight: 500;
  font-size: 18px;
  color: black;
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
.submit {
  float: right;
  margin-top: 50px;
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
.request__info {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
}
.request_important {
  width: 800px;
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
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #7c7c7c;
}
.block {
  padding-left: 550px;
  padding-right: 550px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.questions {
  /*width: 1900px;*/
  min-height: 700px;
  margin-bottom: 100px;
}

.questions_wrap {
  background-color: #fff;
  margin: 0 auto;
}

.questions__title {
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
