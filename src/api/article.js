import request from '@/utils/request'

// 发布文章
export const reqAddArticle = data => request({ method: 'post', url: '/my/user/addArticle', data })

// 修改文章
export const reqUpdateArticle = data => request({ method: 'put', url: '/my/user/updateArticle', data })

// 发布图片
export const reqAddPicture = data => request({ method: 'post', url: '/my/user/addPicture', data })

// 修改图片
export const reqUpdatePicture = data => request({ method: 'put', url: '/my/user/updatePicture', data })

// 发布文章的图片
export const uploadImage = data => request({ method: 'post', url: '/my/article/picture', data, headers: { 'Content-Type': 'multipart/form-data' } })
