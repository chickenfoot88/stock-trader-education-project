import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-stock-trader-2ffca.firebaseio.com/'