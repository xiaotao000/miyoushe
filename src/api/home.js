import request from '@/utils/request'

// 轮播图
export const reqAdtdm = (data) => request({ method: 'get', url: '/api/home/rotation', data })

// 获取文章列表
export const articleList = (data) => request({ method: 'get', url: '/api/home/article', data })
