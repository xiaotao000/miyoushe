import request from '@/utils/request'

// 轮播图
export const reqAdtdm = (data) => request({ method: 'get', url: '/api/home/rotation', data })
