export default {
  m_setCartData(state, value) {
    state.cart = value;
  },
  m_setSearchData(state, value) {
    state.searchData = value;
  },
  m_clearData(state) {
    state.user.id = "";
    state.user.name = "";
    state.user.token = "";
    sessionStorage.clear();
  },
};
