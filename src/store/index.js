import Vuex from 'vuex'
import Vue from 'vue'
// 用户模块
import User from './modules/user'
// 模拟地震模块
import Earthquake from './modules/earthquake'
// 等待模块
import Loading from './modules/loading'
// 提示模块
import Notification from './modules/notification'
// 使用Vuex
Vue.use(Vuex)

// vuex配置
let store = new Vuex.Store({
  modules: {
    Loading,
    Notification,
    User,
    Earthquake
  }
})

export default store
