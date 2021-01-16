import axios from '../utils/axios'

// 创建订单
export function createOrder(params) {
  return axios.post('/saveOrder', params)
}

export function payOrder(params) {
  return axios.get('/paySuccess', {params})
}

export function getOrderList(params) {
  return axios.get('/order', { params })
}