<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home"

export default {
  name: 'App',

  components: {
    Home
  }
};
</script>
<style scoped>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
