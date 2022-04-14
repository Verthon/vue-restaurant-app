import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Menu from '@/views/Menu/Menu.vue'
import BookTable from '@/views/BookTable/BookTable.vue'
import ReviewBooking from '@/views/ReviewBooking/ReviewBooking.vue'
import Login from '@/views/Login/Login.vue'
import Admin from '@/views/Admin/Admin.vue'
import { useAuthStore } from '@/store/auth/authStore'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/book-table',
    name: 'Book Table',
    component: BookTable
  },
  {
    path: '/review-booking',
    name: 'Review Booking',
    component: ReviewBooking
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
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
