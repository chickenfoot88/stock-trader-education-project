import Vue from 'vue'

export default Vue.filter('dollarSign', function (value) {
  if (!value) return ''
  return `$${value.toLocaleString()}`
})
