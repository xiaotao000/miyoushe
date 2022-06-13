import request from '@/utils/requer'

// 用户注册
export const reqRegister = (data) => request({ method: 'post', url: '/api/reguser', data })
// 验证码
export const getCode = data => request({ method: 'post', url: '/api/sendCode', data })
// 上传头像
export const getImage = data => request({ method: 'post', url: '/my/update/avatar', data })
// 获取用户信息
export const getUser = () => request({ method: 'get', url: '/my/userinfo' })
