// 封装请求库
import Axios from 'axios'
// import store from '@/store'
import { GET_TOKEN } from '@/utils/userToken'

// 通过create创建axios实例
const request = Axios.create({
  // 配置公共请求地址
  // 'http://172.19.10.137:3000'
  baseURL: 'http://172.19.10.137:3000',
  // 请求超时时间
  timeout: 5000
})

request.interceptors.request.use(
  // 请求成功
  config => {
    const token = GET_TOKEN()
    if (token) {
      // 添加用户凭证
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  // 请求失败
  err => Promise.reject(err)
)
// 定义响应拦截器
request.interceptors.response.use(
  // 响应成功
  async res => {
    // console.log(res)
    // 取出响应结果
    const data = res.data
    // console.log(data)
    // 判断响应码
    if (data.status !== 0) {
      alert(data.message || '响应错误')
      return Promise.reject(new Error(data.message))
    }
    return data.data
  },
  // 响应失败
  err => new Promise(new Error(err))
)

// 导入创建的axios实例
export default ({ method, url, data, ...options }) => {
  return request({
    method,
    url,
    // 如果方法为get则使用 params传值 否则使用data传值
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data,
    ...options
  })
}
