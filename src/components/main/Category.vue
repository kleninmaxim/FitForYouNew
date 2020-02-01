<template>
  <div class="Category">
    <div class="wrapper">
      <div class="content">
        <h1 class="content__1">Верхняя одежда}</h1>
        <!--<h1 class="content__des">Модельеров</h1><p class="content__des" style="color: #E90566; float: right; text-align: right;">300</p>-->
        <p class="leftstr">Модельеров</p>
        <p class="rightstr">300</p>
        <div style="clear: left; margin-bottom: 20px"></div>

        <p class="leftstr">Стилей</p>
        <p class="rightstr">20</p>
        <div style="clear: left;  margin-bottom: 50px"></div>

        <router-link to="#" class="content__saw">
          Посмотреть
          <img
            src="../../assets/svg/Arrow.svg"
            alt="Посмотреть"
            style="padding-left: 10px"
          />
        </router-link>
      </div>
      <div class="content">
        <h1 class="content__1">Аксессуары</h1>
        <!--<h1 class="content__des">Модельеров</h1><p class="content__des" style="color: #E90566; float: right; text-align: right;">300</p>-->
        <p class="leftstr">Модельеров</p>
        <p class="rightstr">300</p>
        <div style="clear: left; margin-bottom: 20px"></div>

        <p class="leftstr">Стилей</p>
        <p class="rightstr">20</p>
        <div style="clear: left;  margin-bottom: 50px"></div>

        <router-link to="#" class="content__saw">
          Посмотреть
          <img
            src="../../assets/svg/Arrow.svg"
            alt="Посмотреть"
            style="padding-left: 10px"
          />
        </router-link>
      </div>
      <div class="content" style="background: black">
        <h1 class="content__1" style="color: white">Головные уборы</h1>
        <!--<h1 class="content__des">Модельеров</h1><p class="content__des" style="color: #E90566; float: right; text-align: right;">300</p>-->
        <p class="leftstr" style="color: white">Модельеров</p>
        <p class="rightstr">300</p>
        <div style="clear: left; margin-bottom: 20px"></div>

        <p class="leftstr" style="color: white">Стилей</p>
        <p class="rightstr">20</p>
        <div style="clear: left;  margin-bottom: 50px"></div>

        <router-link to="#" class="content__saw">
          Посмотреть
          <img
            src="../../assets/svg/Arrow.svg"
            alt="Посмотреть"
            style="padding-left: 10px"
          />
        </router-link>
      </div>
      <div class="content">
        <h1 class="content__1">Нижнее белье</h1>
        <!--<h1 class="content__des">Модельеров</h1><p class="content__des" style="color: #E90566; float: right; text-align: right;">300</p>-->
        <p class="leftstr">Нижнее белье</p>
        <p class="rightstr">300</p>
        <div style="clear: left; margin-bottom: 20px"></div>

        <p class="leftstr">Стилей</p>
        <p class="rightstr">20</p>
        <div style="clear: left;  margin-bottom: 50px"></div>

        <router-link to="#" class="content__saw" style="z-index: 0;">
          Посмотреть
          <img
            src="../../assets/svg/Arrow.svg"
            alt="Посмотреть"
            style="padding-left: 10px"
          />
        </router-link>
      </div>
      <div class="content">
        <h1 class="content__1">Нижнее белье</h1>
        <!--<h1 class="content__des">Модельеров</h1><p class="content__des" style="color: #E90566; float: right; text-align: right;">300</p>-->
        <p class="leftstr">Модельеров</p>
        <p class="rightstr">300</p>
        <div style="clear: left; margin-bottom: 20px"></div>

        <p class="leftstr">Стилей</p>
        <p class="rightstr">20</p>
        <div style="clear: left;  margin-bottom: 50px"></div>

        <router-link to="#" class="content__saw">
          Посмотреть
          <img
            src="../../assets/svg/Arrow.svg"
            alt="Посмотреть"
            style="padding-left: 10px"
          />
        </router-link>
      </div>
    </div>

    <div class="wrapper">
      <div class="Photo1">
        <img src="../../assets/main/Photo1Figma.png" alt="" />
        <!--<img src="../../assets/main/Photo1Photoshop.png" alt="">-->
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.Photo1 {
  position: absolute;
  /*padding-top: 200px;*/
  padding-top: 153px;
  padding-left: 640px;
}
.wrapper {
  padding-left: 150px;
}
.Category {
  height: 1000px;
  /*width: 1900px;*/
  background: white;
}

.leftstr,
.rightstr {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  float: left;
  width: 50%;
  color: black;
}
.rightstr {
  text-align: right;
  color: #e90566;
  padding-right: 34px;
}

.content__saw {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: #7c7c7c;
  position: relative;
  z-index: 1;
}
.content__saw:hover,
.content__saw:focus,
.content__saw:active {
  opacity: 0.75;
}

.content {
  height: 1000px;
  width: 320px;
  float: left;
  border-right: solid 2px #e5e5e5;
  padding-top: 350px;
  padding-left: 20px;
}

.content__1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: black;
}
</style>
