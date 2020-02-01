<template>
  <section class="actual">
    <div class="actual_wrap">
      <h2 class="actual__title">
        Актуально
      </h2>
      <img src="../../assets/svg/VerLine.svg" alt="" />
      <div class="block">
        <div class="block_wrap">
          <ul class="block_cards">
            <li class="t card_1">
              <div class="wrapper">
                <div class="text-inner">
                  <div class="card_name">
                    Джинсовые куртки
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
              </div>
              <div class="card_img">
                <img src="../../assets/findDesigners/actual1.jpg" />
              </div>
            </li>

            <li class="t card_2">
              <div class="wrapper">
                <div class="text-inner">
                  <div class="card_name">
                    Брюки
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
              </div>
              <div class="card_img">
                <img src="../../assets/findDesigners/actual1.jpg" />
              </div>
            </li>

            <li class="t card_3">
              <div class="wrapper">
                <div class="text-inner">
                  <div class="card_name">
                    Зимние шапки
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
              </div>
              <div class="card_img">
                <img src="../../assets/findDesigners/actual1.jpg" />
              </div>
            </li>

            <div style="clear: both;"></div>
          </ul>

          <div class="card_nav" style="float: right">
            <button id="back"><img src="../../assets/svg/Left.svg" /></button>
            <button id="forward">
              <img src="../../assets/svg/Right.svg" />
            </button>
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
.block_wrap {
  margin-bottom: 40px;
}
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
.text-inner {
  position: absolute;
  padding-top: 90px;
  padding-left: 70px;
}

.t:first-child {
  visibility: visible;
  position: relative;
}

.t {
  visibility: collapse;
  position: absolute;
}
.block_cards:after {
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
.card_name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 20px;
}
.card_img {
  margin-bottom: 60px;
}
.block {
  padding-top: 30px;
}
.actual_wrap {
  background-color: #fff;
  margin: 0 auto;
}

.actual__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  padding-bottom: 10px;
}
</style>
