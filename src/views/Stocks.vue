<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col col-sm6 col-md-4 mb-4" v-for="stock in stocks" :key="stock.id">
        <stock :stock="stock" />
      </div>
    </div>
  </div>
</template>
<script>
import Stock from '@/components/stocks/Stock'

export default {
  name: 'StocksPage',
  components: {
    Stock,
  },
  data() {
    return {
      stocks: [
        {
          id: 1,
          name: 'AMD',
          price: 7655,
        },
        {
          id: 2,
          name: 'INTC',
          price: 5032,
        },
        {
          id: 3,
          name: 'NVDA',
          price: 49854,
        },
        {
          id: 4,
          name: 'TSLA',
          price: 42343,
        },
      ],
    }
  },
}
</script>
<style></style>
