import request from '@/utils/request'
import mockRequest from '@/utils/mockRequest'
// 轮播图
export const reqAdtdm = (data) => request({ method: 'get', url: '/api/home/rotation', data })

// 获取文章列表
export const articleList = (data) => request({ method: 'get', url: '/api/home/article', data })

// 获取推荐话题
export const miHuYoList = (data) => request({ method: 'get', url: '/api/home/subject', data })

// 获取推荐作者
export const miHuYoApp = (data) => request({ method: 'get', url: '/api/home/author', data })

// 战绩
export const getRecord = (data) => mockRequest({ method: 'get', url: '/record', data })

// 获取文章详情
export const getDetailsList = (data) => request({ method: 'get', url: '/api/home/articledDetails', data })

// 删除文章
export const removeArticle = (id) => request({ method: 'delete', url: `/my/user/removeArticle/${id}` })
