// TODO:配置getters快捷访问
const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  // 创建token的快捷访问方式
  token: (state) => state.user.token
}
export default getters
