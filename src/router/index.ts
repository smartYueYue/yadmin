import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Demo from '@/components/demo.vue'
import Login from '../page/LoginIn/index.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router: Router = new Router({
  mode: 'history',
  routes
})

export default router
