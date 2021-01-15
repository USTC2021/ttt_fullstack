import axios from '../utils/axios'

// 添加购物车数据
export function addCart(params) {
  return axios.post('/shop-cart', params)
}

// 获取购物车数据
export function getCart(params) {
  return axios.get('/shop-cart', {params})
}

// 修改购物车
export function modifyCart(params) {
  return axios.put('/shop-cart', params)
}

// 购物车删除商品
export function deleteCartItem(id) {
  return axios.delete(`/shop-cart/${id}`)
}

// 获取商品信息
export function getByCartItemIds(params) {
  return axios.get('/shop-cart/settle', { params })
}
