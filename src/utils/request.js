// TODO:request请求
import axios from 'axios'
// 引入element里的消息提示方法
import { Message } from 'element-ui'
// 创建一个axios实例对象request，并配置基地址
const request = axios.create({
  // 当处于开发环境（npm run dev)，基地址为 '/api'，当处于生产环境（npm run build），基地址为 '/prod-api'
  baseUrl: process.env.VUE_APP_BASE_API,
  // 请求五秒超时
  timeout: 5000
})

// 请求拦截器，在请求发送之前携带token
request.interceptors.request.use()

// 响应拦截器，在请求数据返回之后，对数据进行一些处理
request.interceptors.response.use(
  // response是请求返回的数据
  (response) => {
    // 解构出数据里面的内容
    const { success, message, data } = response.data
    // 如果success为true，表示请求成功，返回真正的数据data
    if (success) {
      return data
    } else {
      // 如果请求状态失败，提示错误，并终止请求的执行
      Message.error(message)
      // 没有error对象，可以new一个新的error实例对象
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 如果响应拦截器处理失败，提示错误，并终止请求的执行
    Message.error(error.message)
    return Promise.reject(error)
  }
)

// 默认导出request实例
export default request
