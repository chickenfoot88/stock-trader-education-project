export default {
  'BUY_STOCK'({ commit }, order) {
    commit('BUY_STOCK', order)
  },
  'SELL_STOCK'({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}