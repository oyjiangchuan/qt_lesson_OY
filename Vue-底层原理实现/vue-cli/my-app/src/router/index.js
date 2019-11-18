import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login.vue'
import Hmoe from '../pages/home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Hmoe
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router