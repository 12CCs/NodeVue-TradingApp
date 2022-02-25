<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header bg-warning">
        <h3>
          {{ stock.name }}
          <small class="h6">(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              :class="{ danger: insufficientFunds }"
              min="0"
            />
          </div>
          <div class="col-6">
            <button
              class="btn btn-success float-end"
              @click="buyStock"
              :disabled="
                insufficientFunds ||
                quantity <= 0 ||
                !Number.isInteger(quantity)
              "
            >
              {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.danger {
  border: 2px solid red;
}
</style>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>
