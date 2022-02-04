import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      allowAccess: false,
    };
  },
  actions: {
    verifyCode({ commit }, code) {
      commit("verifyCode", code);
    },
  },
  mutations: {
    //TODO: Change this to use fetch to get code from server
    verifyCode(state, code) {
      if (code === "cat") {
        state.allowAccess = true;
      } else {
        alert("Please enter the correct code");
      }
    },
  },
});
export default store;
