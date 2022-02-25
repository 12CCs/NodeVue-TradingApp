import { createStore } from "vuex";

import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";
import auth from "./modules/auth";

import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  strict: true,
  plugins: [
    createPersistedState({
      paths: ["auth"],
    }),
  ],
  modules: {
    auth,
    stocks,
    portfolio,
  },
});
