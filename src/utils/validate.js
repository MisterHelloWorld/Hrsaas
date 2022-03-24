// TODO:表单格式校验函数封装
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

// 手机号格式校验
export function validMobile(str) {
  const mobileReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  if (mobileReg.test(str)) {
    return true
  }
}
