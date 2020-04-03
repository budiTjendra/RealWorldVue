import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User'
import Create from '../views/Create'
import List from '../views/List'
import Show from '../views/Show'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home2',
    name: 'Home2',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About',
    alias: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:username',
    name: 'User',
    component: User,
    props: true
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: Show,
    props: true
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
