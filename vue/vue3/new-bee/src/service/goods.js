// 商品详情接口
import axios from '../utils/axios'

export function getDetail(id) {
  return axios.get(`/goods/detail/${id}`)
}