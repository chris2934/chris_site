<template>
    <div>
        <nav>
            <router-link class="spacing" v-for="routes in links" 
                         v-bind:key="routes.id" 
                         :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
  name:'Header',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Main',
          page: '/MainContent'
        },
        {
          id: 1,
          text: 'About',
          page: '/About'
        }
      ]
    };
  },
}
</script>
<style scoped>
.spacing {
  margin-right: 10px;
}
</style>
