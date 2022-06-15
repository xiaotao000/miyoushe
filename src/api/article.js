import request from '@/utils/request'

// 发布文章
export const reqAddArticle = data => request({ method: 'post', url: '/my/add/article', data, headers: { 'Content-Type': 'multipart/form-data' } })

// 发布图片
export const reqAddPicture = data => request({ method: 'post', url: '/my/user/addPicture', data, headers: { 'Content-Type': 'multipart/form-data' } })
