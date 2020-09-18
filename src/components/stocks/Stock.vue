<template>
  <div class="card">
    <div class="card-header" style="background-color: #ddf0d7;">
      <span class="card-title">
        {{ stock.name }}
      </span>
      <small>(Price: {{ stock.price / 100 }})</small>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <input type="text" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <button class="btn btn-success ml-5" @click="buyStock" :disabled="isBuyButtonDisabled">Buy</button>
      </div>
    </div>
  </div>
</template>
<script>
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
      quantity: null
    }
  },
  computed: {
    isBuyButtonDisabled() {
      return this.quantity <= 0 || !Number.isInteger(+this.quantity)
      // return this.quantity <= 0 || !Number.isInteger(parseInt(this.quantity))
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrise: this.stock.price,
        quantity: this.quantity
      }
      console.log(order);
      this.resetQuantity()
    },
    resetQuantity() {
      this.quantity = null
    }
  }
}
</script>
<style></style>
