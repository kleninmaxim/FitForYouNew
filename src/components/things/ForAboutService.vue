<template>
  <ul class="block_down">
    <li class="image_about">
      <div class="image_about_picture">
        <img src="../../assets/main/AboutServe1.jpg" />
      </div>
      <div class="image_about_text">
        Эксклюзивная одежда
      </div>
    </li>
    <li class="image_about">
      <div class="image_about_picture">
        <img src="../../assets/main/AboutServe3.jpg" />
      </div>
      <div class="image_about_text">
        Высококачественное исполнение
      </div>
    </li>
    <li class="image_about">
      <div class="image_about_picture">
        <img src="../../assets/main/AboutServe4.jpg" />
      </div>
      <div class="image_about_text">
        Подбор материалов
      </div>
    </li>
    <li class="image_about">
      <div class="image_about_picture">
        <img src="../../assets/main/AboutServe2.jpg" />
      </div>
      <div class="image_about_text">
        Сшито по фигуре
      </div>
    </li>
  </ul>
</template>

<script></script>

<style scoped>
.image_about_picture {
  padding-bottom: 20px;
}
.image_about_text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #000000;
}
.image_about {
  max-width: 250px;
}
.block_down {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1px;
}
</style>
