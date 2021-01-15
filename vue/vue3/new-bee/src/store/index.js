import { createStore } from 'vuex'
import { getCart } from '@/service/cart'

export default createStore({
  state: {
    cartCount: 0 // 购物车角标商品数量
  },
  mutations: {
    addCart (state, payload) {
      state.cartCount = payload.count
    }
  },
  actions: {
    async updateCart (ctx) {
      const { data } = await getCart() // 当前购物车中有多少条数据
      // console.log(data);
      ctx.commit('addCart', {
        count: data.length || 0
      })
    }
  },
  modules: {
  }
})
