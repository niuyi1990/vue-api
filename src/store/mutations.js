export default {
  changeNetwork (state, hasNetwork) {
    state.network = hasNetwork
  },
  loginSuccess (state, isSuccess) {
    state.loginSuccess = isSuccess
  }
}
