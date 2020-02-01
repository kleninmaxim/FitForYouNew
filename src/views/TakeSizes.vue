<template>
  <div class="main">
    <Home title="Fit For You" text="Снимите свои размеры" />
    <MakeSizes />
    <Questions />
    <Designers />
  </div>
</template>

<script>
import Home from "../components/takeSizes/Home";
import MakeSizes from "../components/takeSizes/MakeSizes";
import Questions from "../components/forDesigners/Questions";
import Designers from "../components/main/Designers";

export default {
  components: {
    Home,
    MakeSizes,
    Questions,
    Designers
  }
};
</script>

<style scoped>
.main {
  width: 1900px;
}
</style>
