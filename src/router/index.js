import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if is logged in
    // if(isLoggedIn) next() 
    // else redirect to '/' and require to log in
    next()
  } else {
    next()
  }
})

export default router
