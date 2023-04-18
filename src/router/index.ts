import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnterInfo from '../views/EnterInfo.vue'
import Payment from '../views/Payment.vue'
import Detail from '../views/Detail.vue'
import TimeView from '../views/TimeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/enterInfo',
    name: 'enterInfo',
    component : EnterInfo
  },
  {
    path: '/payment',
    name: 'payment',
    component : Payment
  },
  {
    path: '/detail',
    name: 'detail',
    component : Detail
  },
  {
    path: '/time',
    name: 'time',
    component : TimeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
