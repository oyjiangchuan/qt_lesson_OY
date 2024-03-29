import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  routes
})

export default router
