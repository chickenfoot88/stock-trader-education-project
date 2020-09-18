import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/portfolio',
    name: 'PortfolioPage',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/stocks',
    name: 'StocksPage',
    component: () => import('../views/Stocks.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
