import Vue from 'vue'
import Router from 'vue-router'
import MainContent from './Blog/MainContent'
import About from './components/Blog/About'

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