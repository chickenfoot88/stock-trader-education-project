export default {
  'SET_STOCKS'(state, value) {
    state.stocks = value
  },
  'RND_STOCKS'(state) {
    state.stocks.forEach(stock => {
      const ratio = Math.round(stock.price * ((Math.floor(Math.random() * (20 - 5)) + 5) / 100))
      const priceChange = Math.random() >= 0.5
      console.log('ratio', ratio, 'change side', priceChange)
      stock.price += priceChange ? +ratio: -ratio
    })
  }
}