import requer from '@/utils/requer'

// 发布文章
export const reqArticle = () => requer({ method: 'post', url: '/my/add/article' })
