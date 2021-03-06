/* eslint-disable no-undef */
export default {
  stockPortfolio(state, getters, rooteState, rootGetters) {
    return state.stocks.map(stock => {
      const record = rootGetters['stocks/stocks'].find(item => item.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price  
      }
    })
  },

  funds: state => Math.floor(state.funds)
}