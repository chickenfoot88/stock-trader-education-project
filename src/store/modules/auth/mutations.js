export default {
  'SET_USER'(state, { idToken, refreshToken, localId, expiresIn }) {
    const user = {
      idToken,
      refreshToken,
      localId,
      expiresIn
    }
    state.user = user
    localStorage.setItem('user', JSON.stringify(user))
  },
  'SET_REFRESHED_TOKEN'(state, { id_token, user_id }) {
    if (!state.user.localId === user_id) return
    state.user.idToken = id_token
    localStorage.setItem('user', JSON.stringify(state.user))
  }
}