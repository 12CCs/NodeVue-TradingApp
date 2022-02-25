<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      style="min-height: 5vh"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img
            src="@/assets/logo.png"
            alt=""
            width="30"
            height="30"
            class="d-inline-block align-text-top"
          />
          Stock Trader</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="nav navbar-nav ms-auto">
            <b
              class="nav-item text-white mt-auto mb-auto"
              tag="li"
              style="margin-right: 70px"
              >User: {{ this.$store.getters.getUser.username }}</b
            >

            <p class="nav-item text-white mt-auto mb-auto" tag="li">
              Funds: {{ curreny(funds) }}
            </p>

            <router-link to="" class="nav-item nav-text" tag="li">
              <a @click="endDay" class="nav-link">End Day</a>
            </router-link>
            <router-link to="/portfolio" class="nav-item nav-text" tag="li">
              <a class="nav-link">Portfolio</a>
            </router-link>
            <router-link to="/stocks" class="nav-item" tag="li">
              <a class="nav-link">Stocks</a>
            </router-link>
            <router-link to="/" class="nav-item">
              <a class="nav-link active m-auto" href="#" @click="logout"
                >Logout</a
              >
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { curreny } from "../../middleware/filters.js";
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    curreny,
    endDay() {
      this.randomizeStocks();
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
a:link {
  text-decoration: none;
}
</style>
