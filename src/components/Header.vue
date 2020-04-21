<template>
    <div>
        <h2>Nav Bar</h2>
        <nav>
            <router-link v-for="routes in links" 
                         v-bind:key="routes.id" 
                         :to="`${routes.page}`"></router-link>
        </nav>
    </div>
</template>

<script>
export default {
  name:'Navigation',
  data () {
    return {
      links: [{
          id: 0,
          text: 'Hello World',
          page: '/HelloWorld'
      }]
    };
  },
}
</script>
