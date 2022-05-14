// TODO:Vuex子模块 用户信息相关

// 按需导入本地存储相关的三个方法
import { getToken, setToken, removeToken } from '@/utils/auth.js'
// 按需导入用户相关请求方法
import { login, getUserInfo } from '@/api/user.js'
const state = {
  // 用户身份令牌
  token: getToken(),
  // 用户信息
  userInfo: {}
}
const mutations = {
  // XXX：更新state里面token值的方法
  setToken(state, token) {
    // 将state里的token值，修改为传入的载荷参数
    state.token = token
    // 同时将传入的载荷参数，存入本地存储
    setToken(token)
  },

  // XXX：移除state里面token值的方法
  removeToken(state) {
    // 将state里的token值，设置为空
    state.token = null
    // 同时移除本地存储
    removeToken()
  },

  // XXX：更新state里面userInfo的方法
  setUserInfo(state, result) {
    state.userInfo = result
  },

  // XXX：删除state里面userInfo的方法
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  // XXX：登录方法
  async login({ commit }, requestData) {
    // 使用登陆方法中传递过来的参数作为调用登录请求的参数，参数格式为 {mobile：xxx，password：xxx}
    const result = await login(requestData)
    // 调用 setToken方法，并传入获取到的token值，更新到state里的token中
    commit('setToken', result)
  },

  // XXX：获取用户信息的方法
  async getUserInfo(context) {
    // 发送axios请求：获取用户信息
    const result = await getUserInfo()
    // 将用户信息结果传递给mutations里的setUserInfo方法中，修改state里userInfo的值
    context.commit('setUserInfo', result)
  }
}
export default {
  // 开启命名空间，上锁
  namespaced: true,
  // 这里无需getters，getters在根级别，作为state的快捷访问方式
  state,
  mutations,
  actions
}
