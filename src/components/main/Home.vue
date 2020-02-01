<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <h1 class="content__title">
          <img
            src="../../assets/svg/HorLine.svg"
            alt="Fit For You"
            style="padding-right: 30px; vertical-align:middle; display:inline-block;"
          />
          <p style="vertical-align:middle; display:inline-block;">
            Fit For You
          </p>
        </h1>
        <p class="content__subtitle">
          Одежда, которая подойдет только вам
        </p>
        <router-link
          to="/all_designers"
          class="content__button"
          style="vertical-align:middle; display:inline-block; text-decoration: none"
        >
          Все модельеры
          <img
            src="../../assets/svg/Button.svg"
            alt="Все модельеры"
            style="padding-left: 20px"
          />
        </router-link>
      </div>
    </div>

    <div class="wrapper">
      <div class="social">
        <a href="https://vk.com" target="_blank"
          ><img src="../../assets/svg/VK.svg" alt="" style="margin-right: 30px"
        /></a>
        <a href="https://yandex.ru/" target="_blank"
          ><img
            src="../../assets/svg/Instagram.svg"
            alt=""
            style="margin-right: 30px"
        /></a>
        <a href="https://mail.ru/" target="_blank"
          ><img src="../../assets/svg/TheFacebook.svg" alt="" style=""
        /></a>
      </div>
    </div>

    <section class="intro"></section>
  </div>
</template>

<script></script>

<style scoped>
.content {
  /*    background: black;
            height: 1000px;
            width: 444px;
            float: left;*/
  position: absolute;
  padding-top: 352px;
  padding-left: 350px;
  z-index: 1;
}

.content__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 88px;
  color: white;
  max-width: 600px;
  margin-bottom: 30px;
}

.content__subtitle {
  padding-left: 40px;
  max-width: 350px;
  color: #7c7c7c;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  margin-bottom: 60px;
}

.content__button {
  padding-left: 40px;
  max-width: 350px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  color: #ffffff;
}
@media (min-width: 1000px) {
  .social {
    position: absolute;
    padding-top: 915px;
    padding-left: 1065px;
  }
}

@media (min-width: 1640px) {
  .social {
    position: absolute;
    padding-top: 915px;
    padding-left: 1630px;
  }
}
a:hover,
a:focus,
a:active {
  opacity: 0.75;
}
.main {
  height: 1000px;
  background: black;
}

.intro {
  height: 1000px;
  width: 1456px;
  float: right;
  background: url(../../assets/main/Main.png) no-repeat center;
}
</style>
