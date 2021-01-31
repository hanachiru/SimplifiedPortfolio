import Vue from 'vue'
import Router from 'vue-router'
import Links from '@/components/Links'
import Profile from '@/components/Profile'
import Works from '@/components/Works'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Links',
      name: 'Links',
      component: Links
    },
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
  ]
})
