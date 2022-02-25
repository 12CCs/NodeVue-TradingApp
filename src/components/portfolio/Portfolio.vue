<template>
  <div style="min-height: 90vh">
    <div class="row pb-4">
      <app-stock
        class="pt-4"
        v-for="stock in stocks"
        :stock="stock"
        v-bind:key="stock"
      ></app-stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
  components: {
    appStock: Stock,
  },
};
</script>
