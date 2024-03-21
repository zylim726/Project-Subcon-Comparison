import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "@/store";

// router setup
import routes from "./routes/routes";


// Plugins
import GlobalComponents from "./models/globalComponents";
import Dashboard from "./models/dashboard";
import Modal from "./models/modal";
import Error from "./models/error";

import Chartist from "chartist";

// configure router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});



router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = store.state.token !== null;

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(Dashboard);
Vue.use(GlobalComponents);
Vue.use(Modal);
Vue.use(Error);


new Vue({
  store,
  el: "#app",
  render: (h) => h(App),
  router,
  data: {
    Chartist: Chartist,
  },
});

