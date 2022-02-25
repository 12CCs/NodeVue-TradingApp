import { createRouter, createWebHistory } from "vue-router";
import { store } from "./store/store.js";

import Home from "./components/Home.vue";
import Portolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

import SignUp from "./components/auth/SignUp.vue";
import Login from "./components/auth/Login.vue";

import NotFound from "./components/errors/NotFound.vue";

// Cleaner routes ?
export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      redirectAuth: false,
      requiresAuth: false,
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portolio,
    meta: {
      redirectAuth: false,
      requiresAuth: true,
    },
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: Stocks,
    meta: {
      redirectAuth: false,
      requiresAuth: true,
    },
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp,
    meta: {
      redirectAuth: true,
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      redirectAuth: true,
      requiresAuth: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: NotFound,
    meta: {
      redirectAuth: false,
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const loggedIn = store.getters.isLoggedIn;
  const requiresAuth = to.meta.requiresAuth;
  const redirectAuth = to.meta.redirectAuth;

  if (requiresAuth && !loggedIn) {
    return {
      path: "/login",
    };
  } else if (loggedIn && redirectAuth) {
    return {
      path: from.fullPath,
    };
  }
});

export default router;
