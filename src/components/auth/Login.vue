<template>
  <div
    class="container-fluid"
    style="padding-top: 10vh; padding-bottom: 10vh; min-height: 90vh"
  >
    <div class="rounded d-flex justify-content-center">
      <div class="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
        <div class="text-center">
          <h3 class="text-primary fw-bold">Sign In</h3>
        </div>
        <form action="" @submit.prevent>
          <div class="p-4">
            <div class="input-group mb-3">
              <span class="input-group-text bg-primary"
                ><i class="bi bi-person-plus-fill text-white"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                required
                v-model="username"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text bg-primary"
                ><i class="bi bi-key-fill text-white"></i
              ></span>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required
                v-model="password"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Remember Me
              </label>
            </div>
            <button
              class="btn btn-primary text-center mt-2"
              type="submit"
              @click="login()"
            >
              Login
            </button>
            <p class="text-center mt-5">
              Don't have an account?
              <router-link to="/sign-up">
                <span class="text-primary">Sign Up</span>
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "../../services/AuthService.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };

        if (this.username && this.password) {
          const response = await AuthService.login(credentials);

          this.msg = response.msg;
          const token = response.token;
          const user = response.user;

          await this.$store.dispatch("login", { token, user });
          this.$router.push("/");
        }
      } catch (error) {
        this.msg = error.response.data.msg;

        this.$swal({
          title: "Invalid login credentials",
          text: this.msg,
          type: "warning",
          confirmButtonText: "Okey",
          showCloseButton: true,
          showLoaderOnConfirm: true,
          icon: "error",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      }
    },
  },
};
</script>
