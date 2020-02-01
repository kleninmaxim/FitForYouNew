<template>
  <div class="main">
    <ForHome v-bind:title="title" v-bind:text="text" />

    <section class="intro"></section>
  </div>
</template>

<script>
import ForHome from "../things/ForHome";

export default {
  props: {
    title: String,
    text: String
  },
  components: {
    ForHome
  }
};
</script>

<style scoped>
.main {
  height: 1000px;
  background: black;
}

.intro {
  height: 1000px;
  width: 1456px;
  float: right;
  background: url(../../assets/order2/Main.png) no-repeat center;
}
</style>
