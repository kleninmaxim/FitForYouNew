<template>
  <div class="main">
    <Home title="Fit For You" text="О вашем таланте должен знать весь мир" />
    <CheckOut2 />
    <ResultsOfDesigners />
    <Styles />
  </div>
</template>

<script>
import Home from "../components/order2/Home";
import CheckOut2 from "../components/order2/CheckOut2";
import ResultsOfDesigners from "../components/order1/ResultsOfDesigners";
import Styles from "../components/order1/Styles";

export default {
  components: {
    Home,
    CheckOut2,
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
