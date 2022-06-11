import request from '@/utils/requer'

// 用户注册
export const reqRegister = (data) => request({ method: 'post', url: '/api/reguser', data })
