import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AreaSelect from '@/components/AreaSelect'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/AreaSelect',
      name: 'AreaSelect',
      component: AreaSelect
    }
  ]
})
