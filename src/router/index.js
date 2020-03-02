import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";

import DemoFour from "../components/DemoFour.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/demo-4",
      name: "DemoFour",
      component: DemoFour
    }
  ]
});
