// TODO：权限设置，路由守卫
// 引入路由实例
import router from '@/router'
// 引入Vuex store实例
import store from '@/store'
// 引入进度条插件
import NProgress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

// 定义白名单
const whiteList = ['/login', '/404']

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // 首先开启进度条
  NProgress.start()
  // 如果存在token
  if (store.getters.token) {
    if (to.path === '/login') {
      // 进一步判断，如果去往的是登录页，强制跳转到主页
      next('/')
    } else {
      // 其余正常放行
      next()
    }
  } else {
    // 如果不存在token
    if (whiteList.indexOf(to.path) > -1) {
      // 进一步判断，如果去往的路径在白名单内，正常放行
      next()
    } else {
      // 如果去往的路径不在白名单内，强制跳转到登录页
      next('/login')
    }
  }
  // 当手动切换地址时，进度条无法关闭，此时需要强制手动关闭进度条
  NProgress.done()
})

// 路由后置守卫
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
