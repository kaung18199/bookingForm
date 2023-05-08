import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import EnterInfo from '../views/EnterInfo.vue'
import Payment from '../views/Payment.vue'
import Detail from '../views/Detail.vue'
import TimeView from '../views/TimeView.vue'
import DateView from '../views/DateView.vue'

const routes: Array<RouteRecordRaw> = [

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
  {
    path: '/',
    name: 'home',
    component : DateView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
