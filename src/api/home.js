import request from '@/utils/request'

// 轮播图
export const reqAdtdm = (data) => request({ method: 'get', url: '/api/home/rotation', data })

// 获取文章列表
export const articleList = (data) => request({ method: 'get', url: '/api/home/article', data })

// 获取推荐话题
export const miHuYoList = (data) => request({ method: 'get', url: 'api/home/subject', data })

// 获取推荐作者
export const miHuYoApp = (data) => request({ method: 'get', url: 'api/home/author', data })
