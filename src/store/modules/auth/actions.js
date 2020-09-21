import Vue from 'vue'

export default {
  async 'SIGN_IN_ANON'({ commit }) {
    const key = process.env.VUE_APP_FIREBASE_API_KEY
    const url = process.env.VUE_APP_USER_SIGN_IN_URL
    const user = await Vue.http.post(
      `${url}/accounts:signUp?key=${key}`,
      {},
      { params: { auth: true } }
    )
    commit('SET_USER', user.body)
    return user
  },

  async 'REFRESH_TOKEN'({ commit,rootState }) {
    const key = process.env.VUE_APP_FIREBASE_API_KEY
    const url = process.env.VUE_APP_REFRESH_TOKEN_URL
    const { refreshToken } = rootState.auth.user
    const { body } = await Vue.http.post(
      `${url}/token?key=${key}`,
      {
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      },
      { params: { auth: true } }
    )
    commit('SET_REFRESHED_TOKEN', body)
    return body
  }
}