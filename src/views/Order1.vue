<template>
  <div class="main">
    <Home title="Fit For You" text="О вашем таланте должен знать весь мир" />
    <CheckOut1 />
    <ResultsOfDesigners />
    <Styles />
  </div>
</template>

<script>
import Home from "../components/order1/Home";
import CheckOut1 from "../components/order1/CheckOut1";
import ResultsOfDesigners from "../components/order1/ResultsOfDesigners";
import Styles from "../components/order1/Styles";

export default {
  components: {
    Home,
    CheckOut1,
    ResultsOfDesigners,
    Styles
  }
};
</script>

<style scoped>
.main {
  width: 1900px;
}
</style>
