// 封装注册登录
import axios from '../utils/axios'

export function register(params) {
  return axios.post('/user/register', params)
}

export function login(params) {
  return axios.post('/user/login', params)
}

// 获取用户信息
export function getUserInfo() {
  return axios.get('/user/info')
}