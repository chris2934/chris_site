<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png" alt="Vue js official logo" />
    <Header />
    <MainContent />
  </div>
</template>

<script>
import MainContent from "./components/MainContent";
import Header from "./components/Header"

export default {
  name: "App",
  components: {
    MainContent,
    Header
  }
};
</script>

<style>
body {
  background-color: grey;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 10px auto;
  width: 600px;
  background-color: white;
  height: 100%;
}
.logo {
  width: 25%;
}
</style>
