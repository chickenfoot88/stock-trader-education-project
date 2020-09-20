import Vue from 'vue'

export default {
  'BUY_STOCK'({ commit }, order) {
    commit('BUY_STOCK', order)
  },
  'SELL_STOCK'({ commit }, order) {
    commit('SELL_STOCK', order)
  },
  async 'LOAD_DATA'({ commit }) {
    const { body } = await Vue.http.get('data.json')
    commit('SET_PORTFOLIO_DATA', body)
  }
}