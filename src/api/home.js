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

<<<<<<< HEAD
// 搜索
export const getSearch = (data) => request({ method: 'get', url: '/api/home/search', data })
=======
// 删除文章
export const removeArticle = (id) => request({ method: 'delete', url: `/my/user/removeArticle/${id}` })
>>>>>>> c5a2d3dd03cd2ea2b8298b08f4022c9de43d66d7
