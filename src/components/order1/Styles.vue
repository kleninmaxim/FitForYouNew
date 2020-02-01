<template>
  <section class="styles">
    <div class="styles__wrap">
      <h2 class="styles__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="Fit For You"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">Стили</p>
      </h2>
      <div class="block">
        <div class="block_cards">
          <div class="block_up">
            <div class="block_up_text">
              <div class="block_up_text_up">
                В нашем каталоге представлена одежда более чем 30 разных стилей
              </div>
              <router-link
                to="/all_designers"
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
              <img src="../../assets/order1/styles1.png" />
            </div>
            <div class="block_down_pic">
              <img src="../../assets/order1/styles2.png" />
            </div>

            <div style="clear: both;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Styles"
};
</script>

<style scoped>
.block_down:after {
  content: " ";
  clear: both;
  display: table;
}
.content_button:hover,
.content_button:focus,
.content_button:active {
  opacity: 0.75;
}
.block_down_pic:first-child {
  padding-right: 59px;
}
.block_down_pic {
  padding-bottom: 40px;
  width: auto;
  float: left;
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
.styles {
  background-color: #fff;
  margin: 0 auto;
}

.styles__title {
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
