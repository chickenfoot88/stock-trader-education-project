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

    state.funds -= stockPrice * quantity
  },
  
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stock.find(item => item.id === stockId)
    if(record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      const recordIndex = state.stock.indexOf(record)
      state.stock.splice(recordIndex, 1)
      state.funds += stockPrice * quantity
    }
  }
}