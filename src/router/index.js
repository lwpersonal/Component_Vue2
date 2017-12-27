import Vue from 'vue'
import Router from 'vue-router'
import ShowComponent from '@/components/showComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowComponent',
      component: ShowComponent
    }
  ]
})
