import Mock from 'mockjs'
import homeApi from './home'

// 设置200-2000ms延时
Mock.setup({
  timeout: '200-2000'
})

// 拦截的是 /home/getData ,转义
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)