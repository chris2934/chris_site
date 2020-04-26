import Vue from 'vue'
import VueRouter from 'vue-router'

//main site view
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [ 
    {
        path: '/',
        name: 'home',
        component: Home,  
    }
]

const router = new VueRouter({
    routes
})

export default router