// TODO:配置getters快捷访问
const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  // token的快捷访问方式
  token: (state) => state.user.token,
  // 用户名的快捷访问方式
  name: (state) => state.user.userInfo.username
}
export default getters
