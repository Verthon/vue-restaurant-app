import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import { useAuthStore } from '@/store/auth/authStore'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "homepage" */ '@/views/Home/Home.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menupage" */ '@/views/Menu/Menu.vue')
  },
  {
    path: '/book-table',
    name: 'Book Table',
    component: () => import(/* webpackChunkName: "booktablepage" */ '@/views/BookTable/BookTable.vue')
  },
  {
    path: '/review-booking',
    name: 'Review Booking',
    component: () => import(/* webpackChunkName: "reviewbookingpage" */ '@/views/ReviewBooking/ReviewBooking.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "loginpage" */ '@/views/Login/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "adminpage" */ '@/views/Admin/Admin.vue'),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      const isUnautorized = !authStore.user
      if (isUnautorized) next({ name: 'Login' })
      else next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
