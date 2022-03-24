// TODO:封装好的本地存储方法
import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token'

// 获取本地存储
export function getToken() {
  return Cookies.get(TokenKey)
}

// 设置本地存储
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 移除本地存储
export function removeToken() {
  return Cookies.remove(TokenKey)
}
