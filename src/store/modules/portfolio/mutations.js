export default {
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(item => item.id === stockId)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity,
        stockPrice
      })
    }
    state.funds -= ((stockPrice / 10) * quantity)
  },
  
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(item => item.id === stockId)
    if(record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      const recordIndex = state.stocks.indexOf(record)
      state.stocks.splice(recordIndex, 1)
      state.funds += (stockPrice / 10) * quantity
    }
  }
}