<template>
  <section class="test">
    <div class="test_wrap">
      <h2 class="test__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="О сервисе"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">
          Тестовая страница
        </p>
      </h2>
      <div class="block">
        <div class="block_cards">



  <!--        <div class="filter__info">
            <b-dropdown id="dropdown-offset" offset="25" text="Пол">
              <b-dropdown-item href="#"><p class="radioclass"><input name="type_material" type="radio" value="female" class="radiobutton"/>Мужской</p></b-dropdown-item>
              <b-dropdown-item href="#"><p class="radioclass"><input name="type_material" type="radio" value="male" class="radiobutton"/>Мужской</p></b-dropdown-item>
            </b-dropdown>
          </div>-->



          <div>
            <b-card no-body>
              <b-tabs card>
                <b-tab title="Tab 1" active>
                  <b-card-text>Tab contents 1</b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                  <b-card-text>Tab contents 2</b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>



        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
  .filter__info {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 40px;
    float: left;
    width: 50%;
  }
  .radioclass {
    margin-bottom: 35px;
  }
  .radiobutton {
    margin-right: 10px;
  }











.block {
  padding-left: 350px;
  padding-right: 350px;
  margin-top: 100px;
}
.test {
  /*width: 1900px;*/
  min-height: 1000px;
}

.test_wrap {
  background-color: #fff;
  margin: 0 auto;
}

.test__title {
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
