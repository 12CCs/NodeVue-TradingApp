<template>
  <div style="min-height: 90vh">
    <div class="row pb-4">
      <app-stock
        class="pt-4"
        v-for="stock in stocks"
        :stock="stock"
        v-bind:key="stock"
        >stock</app-stock
      >
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>
