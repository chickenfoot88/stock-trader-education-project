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
import { mapGetters } from 'vuex'

export default {
  name: 'StocksPage',
  components: {
    Stock,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('stocks', {
      stocks: 'stocks'
    })
  }
}
</script>
<style></style>
