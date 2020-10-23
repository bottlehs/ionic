import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
<<<<<<< HEAD
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
=======

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
>>>>>>> c2b64da... init
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
