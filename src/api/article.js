import request from '@/utils/request'

// 发布文章
export const reqArticle = () => request({ method: 'post', url: '/my/add/article' })
