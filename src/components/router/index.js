import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainConent'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Main',
            component: MainContent
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})