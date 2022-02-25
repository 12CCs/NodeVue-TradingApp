<template>
  <footer
    class="bg-dark text-center text-lg-start text-light"
    style="min-height: 5vh"
  >
    <div class="text-center p-3">© {{ year }} Copyright</div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
