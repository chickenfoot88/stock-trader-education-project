import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '@/store'

Vue.use(VueResource)
Vue.http.options.root = process.env.VUE_APP_REMOTE_HOST

Vue.http.interceptors.push(function(request) {
  if (!request.params.auth) {
    request.url += `?auth=${store.state.auth.user.idToken}`
  } else {
    request.params = null
  }
});