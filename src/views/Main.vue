<template>
  <div class="main">
    <Home />
    <Category />
    <Designers />
    <AboutService />
    <ExactSize />
    <Fashion />
  </div>
</template>

<script>
import Category from "../components/main/Category";
import Designers from "../components/main/Designers";
import AboutService from "../components/main/AboutService";
import ExactSize from "../components/main/ExactSize";
import Fashion from "../components/main/Fashion";
import Home from "../components/main/Home";

export default {
  components: {
    Home,
    Category,
    Designers,
    AboutService,
    ExactSize,
    Fashion
  }
};
</script>

<style scoped>
.main {
  width: 1900px;
}
</style>
