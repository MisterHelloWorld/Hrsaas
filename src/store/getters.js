// TODO:配置getters快捷访问
const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  // token的快捷访问方式
  token: (state) => state.user.token,
  // 用户名的快捷访问方式
  name: (state) => state.user.userInfo.username,
  // 用户ID的快捷访问方式
  userId: (state) => state.user.userInfo.userId,
  // 用户头像的快捷访问方式
  staffPhoto: (state) => state.user.userInfo.staffPhoto
}
export default getters
