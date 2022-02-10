import { createRouter, createWebHistory } from "vue-router";
import EnterCode from "../views/EnterCode.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "EnterCode",
    component: EnterCode,
  },
  {
    path: "/channel",
    name: "StreamChannel",
    component: () => import("../views/StreamChannel.vue"),
    beforeEnter(to, from, next) {
      store.state.allowAccess;
      if (store.state.allowAccess === true) {
        console.log("ALLOW ACCESS");
        next();
      } else {
        next({ name: "EnterCode" });
        alert("Please enter the secret code");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
