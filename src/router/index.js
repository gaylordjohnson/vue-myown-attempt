import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import SomeOtherComponent from '@/components/AnotherComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/AnotherComponent',
      name: 'AnotherCompoent',
      component: SomeOtherComponent
    },
  ]
})
