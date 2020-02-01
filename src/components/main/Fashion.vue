<template>
  <section class="fashion">
    <div class="fashion__wrap">
      <h2 class="fashion__title">
        <img
          src="../../assets/svg/HorLine.svg"
          alt="Быть в центре моды"
          style="padding-right: 30px; vertical-align:middle; display:inline-block;"
        />
        <p style="vertical-align:middle; display:inline-block;">
          Быть в центре моды
        </p>
      </h2>
      <div class="block">
        <div class="block_cards">
          <div class="block_text">
            Подпишитесь, чтобы быть в курсе последних модных тенденциях и новых
            коллекциях лучших модельеров мира.
          </div>
          <form class="search-form">
            <fieldset class="serach-form__wrap">
              <p class="search-form__info">
                <input
                  type="text"
                  name="user-like-to-do"
                  class="search-form__field"
                  placeholder="Email"
                />
                <router-link to="#" class="card_saw">
                  Подписаться
                  <img
                    src="../../assets/svg/Arrow.svg"
                    alt="Посмотреть"
                    style="padding-left: 10px"
                  />
                </router-link>
              </p>
              <img
                src="../../assets/svg/Radio.svg"
                alt="принимаю условия политики конфиденциальности"
                style="padding-right: 10px; vertical-align:middle; display:inline-block;"
              />
              <p
                class="politic"
                style="height:17px; vertical-align:middle; display:inline-block;"
              >
                принимаю условия политики конфиденциальности
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.card_saw:hover,
.card_saw:focus,
.card_saw:active {
  opacity: 0.75;
}
.politic {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
}
.card_saw {
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
  padding-left: 20px;
}

.search-form__info {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
}

.search-form__field {
  width: 525px;
  background-size: 20px;
  border: 0;
  border-bottom: 2px solid #bfc0c5;
  /* margin-right: 60px;*/
  padding-left: 20px;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  color: black;
}

.search-form__field::placeholder {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #7c7c7c;
}

.block_text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #000000;
  padding-bottom: 65px;
  max-width: 525px;
}
.block {
  padding-left: 350px;
  padding-right: 350px;
  margin-top: 100px;
}
.fashion {
  /*width: 1900px;*/
  min-height: 700px;
}
.fashion__wrap {
  background-color: #fff;
  margin: 0 auto;
}

.fashion__title {
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
