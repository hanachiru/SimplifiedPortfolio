<template>
  <div id="app">
    <MyHeader></MyHeader>
    <div class="container">
      <router-view />
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
