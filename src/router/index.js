import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
// 登录组件
import Login from '@/components/Login'
// 后台组件
import Home from '@/components/Home'
// 后台首页组件
import HomeIndex from '@/components/homeChild/HomeIndex'
// 地区情况组件
import HomeArea from '@/components/homeChild/area/HomeArea.vue'
// 其他详细项总览组件
import HomeDetails from '@/components/homeChild/details/HomeDetails.vue'
// 地震模拟组件
import HomeEarthQuake from '@/components/homeChild/earthquake/HomeEarthQuake.vue'
// 物资情况组件
import HomeGoods from '@/components/homeChild/goods/HomeGoods.vue'
// 物资点情况组件
import HomeRescue from '@/components/homeChild/rescue/HomeRescue.vue'
// 物资点物资情况组件
import HomeRescueGoods from '@/components/homeChild/rescue/rescueGoods/HomeRescueGoods.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '/home/index',
        name: 'homeindex',
        component: HomeIndex
      }, {
        path: '/home/area',
        name: 'HomeArea',
        component: HomeArea
      }, {
        path: '/home/details',
        name: 'HomeDetails',
        component: HomeDetails
      }, {
        path: '/home/earthquake',
        name: 'HomeEarthQuake',
        component: HomeEarthQuake
      }, {
        path: '/home/goods',
        name: 'HomeGoods',
        component: HomeGoods
      }, {
        path: '/home/rescue',
        name: 'HomeRescue',
        component: HomeRescue
      }, {
        path: '/home/rescueGoods/:id',
        name: 'HomeRescueGoods',
        component: HomeRescueGoods
      }]
    }
  ]
})
