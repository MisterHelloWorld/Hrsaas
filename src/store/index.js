// TODO:Vuex根文件
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // 配置子模块，对象形式的简写方式
    app,
    settings,
    user
  },
  // 根级别书写 getters，用于创建快捷访问各个子模块的state数据
  getters
})

export default store
