<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header bg-info">
        <h3>
          {{ stock.name }}
          <small class="h6"
            >(Price: {{ stock.price }} | Quantity {{ stock.quantity }})</small
          >
        </h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-7">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              min="0"
            />
          </div>
          <div class="col-5">
            <button
              class="btn btn-danger float-end"
              @click="sellStock"
              :disabled="
                insufficientQuantity ||
                quantity <= 0 ||
                quantity > stock.quantity ||
                !Number.isInteger(quantity)
              "
            >
              {{ insufficientQuantity ? "Not enough Stocks" : "Sell" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    // Dispatch, overkill for one action, but it is alternative
    // TBD ???
    ...mapActions({
      placeSellOrder: "sellStock",
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    },
  },
};
</script>
