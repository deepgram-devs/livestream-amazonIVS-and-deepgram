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
    verifyCode(state, code) {
      if (code === "cat") {
        state.allowAccess = true;
        console.log("store", "allowAccess updated to", state.allowAccess);
      } else {
        console.log("Incorrect code, allowAccess:", state.allowAccess);
        alert("Please enter the correct code");
      }
    },
  },
});
export default store;
