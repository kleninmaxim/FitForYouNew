<template>
  <section class="make_sizes">
    <div class="make_sizes_wrap">
      <h2 class="make_sizes__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="О сервисе"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">
          Как делать замеры?
        </p>
      </h2>
      <div class="block">
        <div class="block_wrap">
          <ul class="article">
            <li class="about_article">
              <div class="image_about_article">
                <img src="../../assets/takeSizes/neck.jpg" />
              </div>
              <div class="image_about_text">
                Замеряем шею
              </div>
            </li>
            <li class="about_article">
              <div class="image_about_article">
                <img src="../../assets/takeSizes/waist.jpg" />
              </div>
              <div class="image_about_text">
                Замеряем талию
              </div>
            </li>
            <li class="about_article">
              <div class="image_about_article">
                <img src="../../assets/takeSizes/wrist.jpg" />
              </div>
              <div class="image_about_text">
                Замеряем запястье
              </div>
            </li>
            <li class="about_article">
              <div class="image_about_article">
                <img src="../../assets/takeSizes/neck.jpg" />
              </div>
              <div class="image_about_text">
                Замеряем шею
              </div>
            </li>
            <li class="about_article">
              <div class="image_about_article">
                <img src="../../assets/takeSizes/waist.jpg" />
              </div>
              <div class="image_about_text">
                Замеряем талию
              </div>
            </li>
            <li class="about_article">
              <div class="image_about_article">
                <img src="../../assets/takeSizes/wrist.jpg" />
              </div>
              <div class="image_about_text">
                Замеряем запястье
              </div>
            </li>
            <li class="about_article">
              <div class="image_about_article">
                <img src="../../assets/takeSizes/neck.jpg" />
              </div>
              <div class="image_about_text">
                Замеряем шею
              </div>
            </li>
            <li class="about_article">
              <div class="image_about_article">
                <img src="../../assets/takeSizes/waist.jpg" />
              </div>
              <div class="image_about_text">
                Замеряем талию
              </div>
            </li>
            <li class="about_article">
              <div class="image_about_article">
                <img src="../../assets/takeSizes/wrist.jpg" />
              </div>
              <div class="image_about_text">
                Замеряем запястье
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.image_about_article {
  padding-bottom: 20px;
}
.image_about_text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #000000;
}
.about_article {
  margin-bottom: 70px;
}
.article {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1px;
}
.block {
  padding-left: 350px;
  padding-right: 350px;
  margin-top: 100px;
}

.make_sizes {
  /*width: 1900px;*/
}

.make_sizes_wrap {
  background-color: #fff;
  margin: 0 auto;
}

.make_sizes__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;

  display: flex;
  align-items: center;
  color: #000000;
  padding-top: 100px;
  padding-left: 200px;
}
</style>
