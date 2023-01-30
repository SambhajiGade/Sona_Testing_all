import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardPage from '../views/DashboardPage.vue'
import DataPage from '../views/DataPage'
import HomePage from '../views/HomePage'
import FEAContact from '../views/FEAContactPage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: HomeView
  },
  {
    path: '/Data',
    name: 'DataPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DataPage
  },
  {
    path: '/Dashboard/:Project',
    name: 'DashboardPage',
    component: DashboardPage

  },
  {
    path: '/Home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/FEAContact',
    name: 'FEAContactPage',
    component: FEAContact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
