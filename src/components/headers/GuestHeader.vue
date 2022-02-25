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
            <router-link to="/login" class="nav-item">
              <a class="nav-link active m-auto" href="#">Login</a>
            </router-link>

            <router-link to="/sign-up" class="nav-item">
              <a class="nav-link active m-auto" href="#">Register</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script></script>

<style>
a:link {
  text-decoration: none;
}
</style>
