import axios from 'axios'

const service = axios.create({
  timeout: 3000
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log(err)
  }
)

service.interceptors.response.use(
  response => {
    let res = {}
    // if() 在这里做判断，如果是200就继续，如果是404就跳转到404页面
    res.status = response.status
    res.data = response.data
    return res
  },
  err => {
    console.log(err)
  }
)

export default service