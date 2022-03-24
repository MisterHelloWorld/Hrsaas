// TODO:用户相关请求api
import request from '@/utils/request'

// XXX：axios 登录请求
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
