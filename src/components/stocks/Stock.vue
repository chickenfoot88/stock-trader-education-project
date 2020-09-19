<template>
  <div class="card">
    <div class="card-header" :style="{ backgroundColor: stock.quantity ? '#d7edf6' : '#ddf0d7' }">
      <span class="card-title">{{ stock.name }}</span>
      <small>(Price: {{ stock.price / 100 }})</small>
      <small v-if="stock.quantity">| Quantity: {{ stock.quantity }})</small>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': !stock.quantity && insufficiendFunds || stock.quantity && insufficiendQuantity }"
            placeholder="Quantity"
            v-model="quantity"
          />
          <div
            v-show="!stock.quantity && insufficiendFunds"
            class="invalid-feedback"
          >Insufficient Funds</div>

          <div
            v-show="stock.quantity && insufficiendQuantity"
            class="invalid-feedback"
          >Insufficient Quantity</div>
        </div>
        <button
          v-if="stock.quantity"
          class="btn btn-primary ml-5"
          @click="sellStock"
          :disabled="insufficiendQuantity"
        >Sell</button>
        <button
          v-else
          class="btn btn-success ml-5"
          @click="buyStock"
          :disabled="isBuyButtonDisabled"
        >Buy</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Stock',
  props: {
    stock: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      quantity: null,
    }
  },
  computed: {
    ...mapGetters('portfolio', ['funds']),

    isBuyButtonDisabled() {
      return (
        this.quantity <= 0 ||
        !Number.isInteger(+this.quantity) ||
        this.insufficiendFunds
      )
    },

    insufficiendFunds() {
      return this.quantity * (this.stock.price / 100) > this.funds
    },

    insufficiendQuantity() {
      return this.quantity > this.stock.quantity
    },
  },
  methods: {
    ...mapActions('portfolio', {
      buyStockAction: 'BUY_STOCK',
      sellStockAction: 'SELL_STOCK',
    }),

    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity,
      }
      this.buyStockAction(order)
      this.resetQuantity()
    },

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity,
      }
      this.sellStockAction(order)
      this.resetQuantity()
    },

    resetQuantity() {
      this.quantity = null
    },
  },
}
</script>
<style></style>
