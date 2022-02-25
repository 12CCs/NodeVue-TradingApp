<template>
  <div style="min-height: 90vh">
    <div class="text-center" style="padding-top: 10vh; padding-bottom: 10vh">
      <h1 class="m-4">Stock trade simulator</h1>
      <hr />
      <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<script>
import { curreny } from "../middleware/filters";
import AuthService from "../services/AuthService.js";

export default {
  data() {
    return {
      posts: [],
      secretMessage: "",
      username: "",
    };
  },
  async created() {
    this.username = this.$store.getters.getUser.username;

    this.token = this.$store.getters.isLoggedIn;
    this.secretMessage = await AuthService.getSecretContent();
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    curreny,
  },
  async mounted() {
    const response = await this.$axios.get("/");

    console.log(response);
    this.posts = response.data;
  },
};
</script>
