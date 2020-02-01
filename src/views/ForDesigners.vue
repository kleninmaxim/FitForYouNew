<template>
  <div class="main">
    <Home title="Fit For You" text="О вашем таланте должен знать весь мир" />
    <Designers />
    <ComfortJob />
    <Rating />
    <Request />
    <Questions />
  </div>
</template>

<script>
import Home from "../components/forDesigners/Home";
import Designers from "../components/main/Designers";
import ComfortJob from "../components/forDesigners/ComfortJob";
import Rating from "../components/forDesigners/Rating";
import Request from "../components/forDesigners/Request";
import Questions from "../components/forDesigners/Questions";

export default {
  components: {
    Home,
    Designers,
    ComfortJob,
    Rating,
    Request,
    Questions
  }
};
</script>

<style scoped>
.main {
  width: 1900px;
}
</style>
