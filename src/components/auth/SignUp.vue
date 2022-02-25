<template>
  <div
    class="container-fluid"
    style="padding-top: 10vh; padding-bottom: 10vh; min-height: 90vh"
  >
    <div class="rounded d-flex justify-content-center">
      <div class="col-md-5 col-sm-12 shadow-lg p-5 bg-light">
        <div class="text-center">
          <h3 class="text-primary fw-bold">Register</h3>
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
                placeholder="Full name"
                required
                v-model="fullName"
              />
            </div>
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
                ><i class="bi bi-person-plus-fill text-white"></i
              ></span>
              <input
                type="email"
                class="form-control"
                placeholder="E-mail"
                required
                v-model="email"
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
            <div class="input-group mb-3">
              <span class="input-group-text bg-primary"
                ><i class="bi bi-key-fill text-white"></i
              ></span>
              <input
                type="password"
                class="form-control"
                placeholder="Repeat password"
                required
                v-model="password_repeat"
              />
            </div>
            <div class="form-check pt-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
                @click="toggleTerms()"
              />
              <label class="form-check-label" for="flexCheckDefault">
                I agree all statements in
                <a href="#!">Terms of service</a>
              </label>
            </div>
            <button
              class="btn btn-primary text-center mt-4"
              type="submit"
              :disabled="checkTerms()"
              @click="signUp()"
            >
              Register
            </button>
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
      fullName: "",
      username: "",
      email: "",
      password: "",
      password_repeat: "",
      terms: true,
    };
  },
  methods: {
    toggleTerms() {
      this.terms = !this.terms;
    },
    checkTerms() {
      return this.terms;
    },
    async signUp() {
      try {
        const credentials = {
          fullname: this.fullName,
          username: this.username,
          email: this.email,
          password: this.password,
          password_repeat: this.password_repeat,
        };
        if (
          this.username &&
          this.password &&
          this.password_repeat &&
          this.fullName &&
          this.email
        ) {
          const response = await AuthService.signUp(credentials);

          this.$swal({
            title: "Registration was successful",
            text: response.msg,
            type: "warning",
            confirmButtonText: "Okey",
            showCloseButton: true,
            showLoaderOnConfirm: true,
            icon: "success",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-success",
            },
          }).then(() => {
            this.$router.push("/login");
          });
        }
      } catch (error) {
        this.$swal({
          title: "Invalid register credentials",
          text: error.response.data.msg,
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
