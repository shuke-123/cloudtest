import Vue from 'vue'
import Router from 'vue-router'
import basic from '@/components/basic'
import data from '@/components/data'
import index from '@/components/index'
import system from '@/components/system'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/basic',
      name: 'basic',
      component: basic,
    
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/system',
      name: 'system',
      component: system
    }
  ]
})
