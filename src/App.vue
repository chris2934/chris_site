<template>
  <div id="app">
    <!-- <img class="logo" src="./assets/logo.png" alt="Vue js official logo" /> -->
    <!-- <Header /> -->
    <!-- <MainContent /> -->
    <Home />
  </div>
</template>

<script>
//import MainContent from "./components/Blog/MainContent"
//import Header from "./components/Blog/Header"
import Home from "./components/MainSite/Home"

export default {
  name: 'App',

  components: {
    //MainContent,
    //Header,
    Home
  }
};
</script>
