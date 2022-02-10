import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      allowAccess: false,
    };
  },
  actions: {
    verifyCode({ commit }, status) {
      commit("verifyCode", status);
    },
  },
  mutations: {
    verifyCode(state, status) {
      state.allowAccess = status;
    },
  },
});
export default store;
