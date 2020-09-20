<template>
  <transition-group class="container pt-4" tag="div" name="fade" mode="out-in">
    <div class="row" v-if="stocks.length" key="content">
      <div class="col col-sm6 col-md-4 mb-4" v-for="stock in stocks" :key="stock.id">
        <stock :stock="stock" />
      </div>
    </div>
    <div class="row" v-else key="preloader">
      <div class="col col-sm6 col-md-4 mb-4" v-for="card in [ 1, 2, 3, 4, 5, 6 ]" :key="card">
        <div class="preloader-card"></div>
      </div>
    </div>
  </transition-group>
</template>
<script>
import Stock from '@/components/stocks/Stock'
import { mapActions, mapGetters } from 'vuex'
// import db from '@/firebase/init'

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
      stocks: 'stocks',
    }),
  },
  created() {
    this.fetchStocks()
  },
  methods: {
    ...mapActions('stocks', {
      setStocks: 'SET_STOCKS',
    }),

    async fetchStocks() {
      const stocks = await this.$http.get('stocks.json').then(({ body }) => body) 
      this.setStocks(stocks)
    },
  },
}
</script>
<style>
.preloader-card {
  background: #d7edf6;
  width: 100%;
  border-radius: 0.25rem;
  height: 127px;
  position: relative;
  z-index: 0;
}

.preloader-card:after {
  content: '';
  top: 0;
  transform: translateX(100%);
  width: 100%;
  height: 220px;
  position: absolute;
  z-index: 1;
  animation: slide 4s infinite;
  background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 1) 50%,
    rgba(128, 186, 232, 0) 75%,
    rgba(125, 185, 232, 0) 100%
  );
}

@keyframes slide {
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateX(80%);
    opacity: 0;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s ease 1s;
}

.fade-leave-active {
  transition: opacity .5s ease .5s;
}
</style>
