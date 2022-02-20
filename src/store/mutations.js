export default {
  m_setUserName(state, value) {
    state.user.name = value;
  },

  m_clearUserData(state) {
    state.user.id = "";
    state.user.name = "";
    state.user.token = "";
    sessionStorage.removeItem("authData");
  },
};
