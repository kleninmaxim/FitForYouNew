<template>
  <section class="exact_size">
    <div class="exact_size__wrap">
      <h2 class="exact_size__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="О сервисе"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">
          Размер в размер
        </p>
      </h2>
      <div class="block">
        <div class="block_cards">
          <div class="block_up">
            <div class="block_up_text">
              <div class="block_up_text_up">
                Благодаря нашим подсказкам вы всегда можете быть уверены, что
                одежда вам подойдет!
              </div>
              <router-link
                to="/take_sizes"
                class="content_button"
                style="vertical-align:middle; display:inline-block; text-decoration: none"
              >
                Снять мерки
                <img
                  src="../../assets/svg/ButtonBlack.svg"
                  alt="Сшить на заказ"
                  style="padding-left: 20px"
                />
              </router-link>
            </div>
            <div class="block_up_img">
              <img src="../../assets/main/ExactSize1.jpg" />
            </div>
          </div>
          <div class="block_down">
            <div class="block_down_pic">
              <img src="../../assets/main/ExactSizeMain.jpg" />
            </div>
            <div class="block_down_text">
              Носите удобную и стильную одежду, в котором вам будет комфортно
              каждый день
            </div>
            <router-link
              to="#"
              class="content_button block_down_text_button"
              style="vertical-align:middle; display:inline-block; text-decoration: none"
            >
              Выбрать
              <img
                src="../../assets/svg/ButtonBlack.svg"
                alt="Сшить на заказ"
                style="padding-left: 20px"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.content_button:hover,
.content_button:focus,
.content_button:active {
  opacity: 0.75;
}
.block_down_text_button {
  width: 45%;
  margin-left: 25%;
  margin-right: 25%;
}
.block_down_text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #000000;
  width: 45%;
  margin-left: 25%;
  margin-right: 25%;
  padding-bottom: 40px;
}
.block_down_pic {
  padding-bottom: 40px;
}
.block_up {
  margin-bottom: 100px;
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
  padding-top: 60px;
  max-width: 400px;
}
.block_up_img {
  width: 50%;
  float: left;
  padding-left: 60px;
}
.block {
  padding-left: 350px;
  padding-right: 350px;
  margin-top: 100px;
}
.exact_size {
  /*width: 1900px;*/
  min-height: 1500px;
}
.exact_size__wrap {
  background-color: #fff;
  margin: 0 auto;
}

.exact_size__title {
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
