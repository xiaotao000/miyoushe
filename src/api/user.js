import request from '@/utils/request'

// 用户注册
export const reqRegister = (data) => request({ method: 'post', url: '/api/reguser', data })
// 验证码
export const getCode = data => request({ method: 'post', url: '/api/sendCode', data })
// 上传头像
export const getImage = data => request({ method: 'post', url: '/my/update/avatar', data })
// 获取用户信息
export const getUser = () => request({ method: 'get', url: '/my/userinfo' })

// 修改昵称
export const getUsername = data => request({ method: 'post', url: '/my/user/nickname', data })

// 登录
export const Logon = data => request({ method: 'post', url: '/api/login', data })

// 修改用户信息
export const setData = data => request({ method: 'post', url: '/my/userinfo', data })
