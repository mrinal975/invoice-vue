<template>
  <div>
    {{ currentInvoice }}
    - hi
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "InvoiceView",
  date() {
    return {
      currentInvoice: null,
    };
  },
  created() {
    this.getCurrentInvocie();
    this.currentInvoice = this.currentInvoiceArray[0];
    console.log("joy baba loknath");
  },
  methods: {
    ...mapMutations(["SET_CURRENT_INVOICE"]),
    getCurrentInvocie() {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
      console.log(this.$route.params.invoiceId);
    },
  },
  computed: {
    ...mapState(["currentInvoiceArray"]),
  },
};
</script>
