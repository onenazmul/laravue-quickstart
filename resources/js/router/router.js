import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
  })
import About from '../components/pages/About'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
const routes = [
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

  export default router