import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainConent'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: MainContent
        },
        {
            path: '/',
            name: 'About',
            component: About
        }
    ]
})