export default {
  'SET_STOCKS'({ commit }, value) {
    commit('SET_STOCKS', value)
  },
  'RANDOMIZE_STOCKS'({ commit }) {
    commit('RND_STOCKS')
  }
}