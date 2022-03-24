// TODO:request请求
import axios from 'axios'
// 创建一个axios实例对象request，并配置基地址
const request = axios.create()

// 请求拦截器，在请求发送之前携带token
request.interceptors.request.use()

// 响应拦截器，在请求数据返回之后，对数据进行一些处理
request.interceptors.response.use()

// 默认导出request实例
export default request
