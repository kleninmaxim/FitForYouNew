<template>
  <div>
    <header class="header">
      <div class="wrapper">
        <div class="header__wrapper">
          <div class="header__logo">
            <router-link to="/" class="header__logo-link">
              <img
                src="../assets/svg/FitForYouLogo.svg"
                alt=""
                class="header__logo-pic"
              />
            </router-link>
          </div>

          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__item1">
                <router-link to="#" class="header__link"
                  >ВЫБРАТЬ ОДЕЖДУ</router-link
                >
              </li>
              <li class="header__item1">
                <router-link
                  to="/for_designers"
                  class="header__link"
                  style="color: #E90566;"
                  >МОДЕЛЬЕРАМ</router-link
                >
              </li>
              <li class="header__item1">
                <router-link to="/take_sizes" class="header__link"
                  >СНЯТЬ МЕРКИ</router-link
                >
              </li>
            </ul>
          </nav>

          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__item2">
                <router-link to="/choose_clothes" class="header__link">
                  <img
                    src="../assets/svg/Favorites.svg"
                    alt=""
                    class="header__logo-pic"
                  />
                </router-link>
              </li>
              <li class="header__item2">
                <router-link to="/for_designers" class="header__link">
                  <img
                    src="../assets/svg/Login.svg"
                    alt=""
                    class="header__logo-pic"
                  />
                </router-link>
              </li>
              <li class="header__item2">
                <router-link to="/take_measurements" class="header__link">
                  <img
                    src="../assets/svg/Shop.svg"
                    alt=""
                    class="header__logo-pic"
                  />
                  <img
                    src="../assets/svg/Line.svg"
                    alt=""
                    class="header__logo-pic"
                    style="padding: 0px 10px 0px 10px"
                  />
                  3540 &#8381;
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div class="up_page">
      <div class="wrapper">
        <div class="header__wrapper"><button id="up">UP</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};

//скрытие шапки
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  /*const scrollable = document.documentElement.scrollHeight - window.innerHeight; По высоте main*/

  if (Math.ceil(scrolled) > 910) {
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementsByClassName("up_page")[0].style.opacity = "1";
  } else {
    document.getElementsByTagName("header")[0].style.display = "";
    document.getElementsByClassName("up_page")[0].style.opacity = "0";
  }
});

//кнопочка вверх
window.onload = function() {
  var b = document.getElementById("up");
  b.onclick = function() {
    window.scroll(0, 0);
  };
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#up {
  border: none;
  outline: none;
  background: none;
}
.up_page:hover,
.up_page:focus,
.up_page:active {
  opacity: 0.75;
}
.up_page {
  opacity: 0;
  z-index: 2;
  position: fixed;
  top: 60px;
  left: 60px;
  /*width: 100%;*/
  width: 150px;
  color: blue;
}
.wrapper {
  max-width: 100%;
  /*width: 1900px;*/
  margin: 0 auto;
}

/* Header styles start */

.header {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  /*width: 100%;*/
  width: 1900px;
}
.header__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 42px;
}
.header__logo-link {
}
.header__logo {
  margin-left: 150px;
  /*margin-left: 7.89%;*/
}
.header__list {
  display: flex;
  flex-wrap: wrap;
}
.header__item1 {
  margin-right: 50px;
  /*margin-right: 2.63%;*/
}

@media (min-width: 1640px) {
  .header__item1:last-child {
    margin-right: 613px;
  }
}
/*    @media (min-width: 1900px){
        .header__item1:last-child{
            margin-right: 613px;
            !*margin-right: 32.26%;*!
        }
    }*/

.header__item2 {
  margin-right: 20px;
  /*margin-right: 1.05%;*/
}
.header__item2:last-child {
  margin-right: 150px;
  /*margin-right: 7.89%;*/
}
.header__link {
  font-family: Montserrat;
  font-size: 12px;
  line-height: 60px;
  color: white;
  text-decoration: none;
}
.header__link:hover,
.header__link:focus,
.header__link:active {
  opacity: 0.75;
}
</style>
