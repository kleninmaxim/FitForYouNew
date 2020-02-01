<template>
  <div class="main">
    <Home title="Fit For You" text="Тестовая страница" />
    <Test />
  </div>
</template>

<script>
import Home from "../components/takeSizes/Home";
import Test from "../components/test/Test";

export default {
  components: {
    Home,
    Test
  }
};
</script>

<style scoped>
.main {
  width: 1900px;
}
</style>
