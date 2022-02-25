<template>
  <app-header v-if="isLoggedIn()" />
  <app-header-guest v-else />

  <div class="container">
    <router-view />
  </div>

  <app-footer />
</template>

<script>
import Header from "./components/headers/Header.vue";
import GuestHeader from "./components/headers/GuestHeader.vue";
import Footer from "./components/footers/Footer.vue";

export default {
  components: {
    appHeaderGuest: GuestHeader,
    appHeader: Header,
    appFooter: Footer,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
  methods: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>
