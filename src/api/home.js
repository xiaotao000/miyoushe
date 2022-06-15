import request from '@/utils/request'

// 轮播图
export const reqRotation = (data) => request({ method: 'get', url: '/api/home/rotation', data })
