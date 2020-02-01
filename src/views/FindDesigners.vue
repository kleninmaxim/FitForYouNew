<template>
  <div class="main">
    <Home
      title="Fit For You"
      text="Создавайте свой образ только с лучшими модельерами"
    />
    <AllDesigners />
  </div>
</template>

<script>
import Home from "../components/findDesigners/Home";
import AllDesigners from "../components/findDesigners/AllDesigners";

export default {
  components: {
    Home,
    AllDesigners
  }
};
</script>

<style scoped>
.main {
  width: 1900px;
}
</style>
