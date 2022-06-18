import Axios from 'axios'
const request = Axios.create({
  baseURL: '/mock',
  timeout: 5000
})

export default ({ method, url, data }) => {
  return request({
    method,
    url,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  })
}
