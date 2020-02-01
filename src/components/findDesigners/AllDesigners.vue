<template>
  <section class="all_designers">
    <div class="all_designers_wrap">
      <h2 class="all_designers__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="О сервисе"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">
          Подбор модельеров
        </p>
      </h2>
      <div class="block">
        <div class="block_wrap">
          <div class="filters">
            <div class="filter_text">
              Выберите параметры
            </div>
            <form class="filter-form">
              <fieldset class="filter__wrap">
                <p class="filter__info">
                  <select name="gender" id="gender" class="select">
                    <option value="" class="theme" disabled selected>Пол</option>
                    <option value="1">Мужской</option>
                    <option value="2">Женский</option>
                  </select>
                </p>
                <p class="filter__info">
                  <select name="town" id="town" class="select">
                    <option value="" class="theme" disabled selected
                      >Город</option
                    >
                    <option value="1">Москва</option>
                    <option value="2">Санкт-Петербург</option>
                    <option value="3">Волгоград</option>
                    <option value="4">Воронеж</option>
                    <option value="5">Брянск</option>
                  </select>
                </p>
                <p class="filter__info">
                  <select name="style" id="style" class="select">
                    <option value="" class="theme" disabled selected
                      >Стиль</option
                    >
                    <option value="1">Авангард</option>
                    <option value="2">Денди</option>
                    <option value="3">Бохо</option>
                  </select>
                </p>
                <p class="filter__info">
                  <select name="type_clothes" id="type_clothes" class="select">
                    <option value="" class="theme" disabled selected
                      >Тип одежды</option
                    >
                    <option value="1">Верхняя одежда</option>
                    <option value="2">Аксессуары</option>
                    <option value="3">Головные уборы</option>
                    <option value="4">Нижнее белье</option>
                  </select>
                </p>
              </fieldset>
            </form>
          </div>
          <div class="content">
            <ul class="designers">
              <li class="about_designers">
                <div class="genderF">
                  М
                </div>
                <div class="genderM">
                  Ж
                </div>
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="genderM">
                  Ж
                </div>
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="genderF" style="padding-left: 311px;">
                  М
                </div>
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="genderF">
                  М
                </div>
                <div class="genderM">
                  Ж
                </div>
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="genderF">
                  М
                </div>
                <div class="genderM">
                  Ж
                </div>
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="genderF">
                  М
                </div>
                <div class="genderM">
                  Ж
                </div>
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
            </ul>
          </div>
          <Relevant />
          <div class="content">
            <ul class="designers">
              <li class="about_designers">
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
            </ul>
          </div>
          <Popular />
          <div class="content">
            <ul class="designers">
              <li class="about_designers">
                <div class="genderF">
                  М
                </div>
                <div class="genderM">
                  Ж
                </div>
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="genderF">
                  М
                </div>
                <div class="genderM">
                  Ж
                </div>
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
              <li class="about_designers">
                <div class="genderF">
                  М
                </div>
                <div class="genderM">
                  Ж
                </div>
                <div class="image_about_designers">
                  <img src="../../assets/findDesigners/logo.jpg" />
                </div>
                <div class="designers_name">
                  Константинов Константин Константинович
                </div>
                <div class="rating">
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarActive.svg" alt="" />
                  <img src="../../assets/svg/StarDisable.svg" alt="" />
                </div>
                <div class="designer_town">
                  <h6 class="disable_base">Город</h6>
                  Москва, Санкт-Петербург
                </div>
                <div class="designer_style">
                  <h6 class="disable_base">Стиль</h6>
                  Авангард, Денди, Бохо
                </div>
                <router-link to="#" class="content__saw">
                  Коллекции
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Relevant from "../things/RelevantForAllDesigners";
import Popular from "../things/PopularForAllDesigners";

export default {
  components: {
    Relevant,
    Popular
  }
};
</script>

<style scoped>
.radioclass {
  margin-bottom: 35px;
}
.radiobutton {
  margin-right: 10px;
}
.genderM,
.genderF {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #7c7c7c;
  position: absolute;
  padding-top: 163px;
}
.genderM {
  padding-left: 311px;
}
.genderF {
  padding-left: 287px;
}
.content {
  margin-top: 30px;
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
}
.content__saw:hover,
.content__saw:focus,
.content__saw:active {
  opacity: 0.75;
}
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
.designer_style,
.designer_town {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  margin-top: 10px;
}
.designer_style {
  margin-bottom: 30px;
}
.image_about_designers {
  padding-bottom: 20px;
}
.designers_name {
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
  margin-bottom: 10px;
}
.about_designers {
  margin-bottom: 75px;
}
.designers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1px;
}
.filters {
  margin-bottom: 50px;
}
.filter_text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  padding-top: 75px;
  padding-bottom: 30px;
}
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
  width: 450px;
  background-size: 20px;
  border: 0;
  border-bottom: 2px solid #bfc0c5;
  padding-left: 17px;
  font-weight: 500;
  font-size: 18px;
  color: black;
}
.filter__info {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  float: left;
  width: 50%;
}
.block {
  padding-left: 350px;
  padding-right: 350px;
}
.all_designers {
  /*width: 1900px;*/
  min-height: 1000px;
}

.all_designers_wrap {
  background-color: #fff;
  margin: 0 auto;
}

.all_designers__title {
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
