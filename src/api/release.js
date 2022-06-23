import request from '@/utils/request'

// 获取用户发布帖子
export const reWgyh = () => request({ method: 'get', url: '/my/user/article' })
