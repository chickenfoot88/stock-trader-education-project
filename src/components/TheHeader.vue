<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link :to="{ name: 'HomePage' }" class="navbar-brand">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link
          :to="{ name: 'PortfolioPage' }"
          tag="li"
          active-class="active"
          class="nav-item"
        >
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link :to="{ name: 'StocksPage' }" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <a class="nav-link ml-auto navbar-text" @click="endDay">End day</a>
      <div class="dropdown">
        <a
          class="nav-link dropdown-toggle navbar-text"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="isDropdownOpen = !isDropdownOpen"
        >Save & Load</a>
        <div
          class="dropdown-menu"
          :class="{ show: isDropdownOpen }"
          aria-labelledby="navbarDropdown"
        >
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </div>
      <strong class="navbar-text ml-5">Funds: {{ funds | dollarSign }}</strong>
    </div>
  </nav>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: '',
  data() {
    return {
      isDropdownOpen: false,
    }
  },
  computed: {
    ...mapGetters('portfolio', ['funds']),
  },
  methods: {
    ...mapActions('stocks', {
      randomizeStocks: 'RANDOMIZE_STOCKS',
    }),

    endDay() {
      this.randomizeStocks()
    },
  },
}
</script>
<style>
.navbar {
  z-index: 1;
}
</style>
