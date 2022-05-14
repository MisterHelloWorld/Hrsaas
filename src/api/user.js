// TODO:用户相关请求api
import request from '@/utils/request'

// XXX：axios 登录请求
export const login = (data) =>
  request({
    url: '/sys/login',
    method: 'POST',
    data
  })

// XXX：axios 获取用户基本资料请求
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}
