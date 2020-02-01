<template>
  <section class="designers">
    <div class="designers__wrap">
      <h2 class="designers__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="Fit For You"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">Модельеры</p>
      </h2>
      <div class="block">
        <div class="block_cards">
          <ul class="block_two_cards">
            <li class="t card_1">
              <div class="block_card_left">
                <div class="card_img">
                  <img src="../../assets/main/Macquin.png" />
                </div>
                <div class="card_name">
                  Александр Маккуин
                </div>
                <div class="card_text">
                  После окончания школы 16-летний Маккуин начал работать
                  подмастерьем в ателье Андерсен и Шеферд (Anderson and
                  Shepherd), потом портным в мастерских Севил-роу (англ.). В
                  ателье специализировался на мужских костюмах, сшитых по
                  индивидуальному заказу для высшего света.
                </div>
                <router-link to="#1" class="card_saw">
                  Посмотреть
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </div>
              <div class="block_card_right">
                <div class="" style="position: center">
                  <img
                    src="../../assets/main/Westwood.svg"
                    style="position: center"
                  />
                </div>
              </div>
            </li>

            <li class="t card_2">
              <div class="block_card_left">
                <div class="card_img">
                  <img src="../../assets/main/Macquin.png" />
                </div>
                <div class="card_name">
                  Дмитрий Иванов
                </div>
                <div class="card_text">
                  Практический опыт показывает, что рамки и место обучения
                  кадров позволяет выполнить важнейшие задания по разработке
                  модели развития. С другой стороны дальнейшее развитие
                  различных форм деятельности позволяет выполнить важнейшие
                  задания по разработке системы обучения кадров, соответствующей
                  насущным потребностям.
                </div>
                <router-link to="#2" class="card_saw">
                  Посмотреть
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </div>
              <div class="block_card_right">
                <div class="" style="position: center">
                  <img
                    src="../../assets/main/Westwood.svg"
                    style="position: center"
                  />
                </div>
              </div>
            </li>

            <li class="t card_3">
              <div class="block_card_left">
                <div class="card_img">
                  <img src="../../assets/main/Macquin.png" />
                </div>
                <div class="card_name">
                  Владимир Гречков
                </div>
                <div class="card_text">
                  Дорогие друзья, постоянный количественный рост и сфера нашей
                  активности представляет собой интересный эксперимент проверки
                  позиций, занимаемых участниками в отношении поставленных
                  задач.
                </div>
                <router-link to="#3" class="card_saw">
                  Посмотреть
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </div>
              <div class="block_card_right">
                <div class="" style="position: center">
                  <img
                    src="../../assets/main/Westwood.svg"
                    style="position: center"
                  />
                </div>
              </div>
            </li>

            <div style="clear: both;"></div>
          </ul>
          <!--                    <div class="block_two_cards card_2">
                        <div class="block_card_left">
                            <div class="card_img">
                                <img src="../../assets/main/Macquin.png">
                            </div>
                            <div class="card_name">
                                Дмитрий Иванов
                            </div>
                            <div class="card_text">
                                Практический опыт показывает, что рамки и место обучения кадров позволяет выполнить
                                важнейшие задания по разработке модели развития. С другой стороны дальнейшее развитие
                                различных форм деятельности позволяет выполнить важнейшие
                                задания по разработке системы обучения кадров, соответствующей насущным потребностям.
                            </div>
                            <router-link to="#2" class="card_saw">
                                Посмотреть
                                <img src="../../assets/svg/Arrow.svg" alt="Посмотреть" style="padding-left: 10px">
                            </router-link>
                        </div>

                        <div class="block_card_right">
                            <div class="" style="position: center">
                                <img src="../../assets/main/Westwood.svg" style="position: center">
                            </div>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                    <div class="block_two_cards card_3">
                        <div class="block_card_left">
                            <div class="card_img">
                                <img src="../../assets/main/Macquin.png">
                            </div>
                            <div class="card_name">
                                Владимир Гречков
                            </div>
                            <div class="card_text">
                                Дорогие друзья, постоянный количественный рост и сфера нашей активности
                                представляет собой интересный эксперимент проверки позиций,
                                занимаемых участниками в отношении поставленных задач.
                            </div>
                            <router-link to="#3" class="card_saw">
                                Посмотреть
                                <img src="../../assets/svg/Arrow.svg" alt="Посмотреть" style="padding-left: 10px">
                            </router-link>
                        </div>

                        <div class="block_card_right">
                            <div class="" style="position: center">
                                <img src="../../assets/main/Westwood.svg" style="position: center">
                            </div>
                        </div>
                        <div style="clear: both;"></div>
                    </div>-->

          <hr style="margin-bottom: 20px;" />
          <div class="card_bottom">
            <router-link
              to="/all_designers"
              class="content_button"
              style="vertical-align:middle; display:inline-block; text-decoration: none"
            >
              Все модельеры
              <img
                src="../../assets/svg/ButtonBlack.svg"
                alt="Все модельеры"
                style="padding-left: 20px"
              />
            </router-link>
            <div class="card_nav" style="float: right">
              <button id="back"><img src="../../assets/svg/Left.svg" /></button>
              <button id="forward">
                <img src="../../assets/svg/Right.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//скрипт отвечающий за переключение модельеров
window.addEventListener(
  "load",
  function() {
    var b = document.getElementById("back");
    var f = document.getElementById("forward");
    var S = document.getElementsByClassName("t").length;
    var k = 1;
    var i = 1;

    b.onclick = function() {
      i = k;
      k = k - 1;

      if (k <= 0) {
        k = S;
      }

      var image_now = "card_" + i;
      var image_next = "card_" + k;

      document.getElementsByClassName("t")[0].style.visibility = "collapse";
      document.getElementsByClassName("t")[0].style.position = "absolute";

      document.getElementsByClassName(image_now)[0].style.visibility =
        "collapse";
      document.getElementsByClassName(image_now)[0].style.position = "absolute";

      document.getElementsByClassName(image_next)[0].style.visibility =
        "visible";
      document.getElementsByClassName(image_next)[0].style.position =
        "relative";
    };

    f.onclick = function() {
      i = k;
      k = k + 1;
      if (k >= S + 1) {
        k = 1;
      }
      var image_now = "card_" + i;
      var image_next = "card_" + k;

      document.getElementsByClassName(image_now)[0].style.visibility =
        "collapse";
      document.getElementsByClassName(image_now)[0].style.position = "absolute";

      document.getElementsByClassName(image_next)[0].style.visibility =
        "visible";
      document.getElementsByClassName(image_next)[0].style.position =
        "relative";
    };
  },
  false
);
</script>

<style scoped>
button:hover {
  opacity: 0.4;
  color: #8c8c8c;
}
#back,
#forward {
  border: none;
  outline: none;
  background: white;
}

.t:first-child {
  visibility: visible;
  position: relative;
}

.t {
  visibility: collapse;
  position: absolute;
}

.block_two_cards:after {
  content: " ";
  clear: both;
  display: table;
}
.card_saw:hover,
.card_saw:focus,
.card_saw:active,
.content_button:hover,
.content_button:focus,
.content_button:active {
  opacity: 0.75;
}
.content_button {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  /* Black */

  color: #000000;
}
.card_saw {
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
}
.card_text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 20px;
  width: 600px;
}
.card_name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #7c7c7c;
  margin-bottom: 30px;
}
.card_img {
  margin-bottom: 60px;
}
.block_card_left {
  width: 55%;
  float: left;
  min-height: 465px;
}
.block_card_right {
  width: 45%;
  float: left;
  padding-top: 140px;
  padding-left: 165px;
  min-height: 465px;
}
.block {
  padding-left: 350px;
  padding-right: 350px;
  margin-top: 100px;
}
.designers {
  /*width: 1900px;*/
  height: 1000px;
}

.designers__wrap {
  background-color: #fff;
  margin: 0 auto;
}

.designers__title {
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
