<template>
  <div v-if="currentInvoice" class="invoice-view container">
    <router-link class="nav-link flex" :to="{ name: 'Home' }">
      <img src="../assets/icon-arrow-left.svg" alt="" /> Go Back
    </router-link>
    <!-- Header -->
    <div class="header flex">
      <div class="left flex">
        <span>Status</span>
        <div
          class="status-button flex"
          :class="{
            paid: currentInvoice.invoicePaid,
            draft: currentInvoice.invoiceDraft,
            pending: currentInvoice.invoicePending,
            pending:
              !currentInvoice.invoicePaid &&
              !currentInvoice.invoiceDraft &&
              !currentInvoice.invoicePending,
          }"
        >
          <span v-if="currentInvoice.invoicePaid">Paid</span>
          <span v-else-if="currentInvoice.invoiceDraft">Draft</span>
          <span v-else="currentInvoice.invoicePending">Pending</span>
        </div>
      </div>
      <div class="right flex">
        <button
          @click="toggleEditInvoice(currentInvoice.docId)"
          class="dark-purple"
        >
          Edit
        </button>
        <button @click="deleteInvoice(currentInvoice.docId)" class="red">
          Delete
        </button>
        <button
          v-if="currentInvoice.invoiceDraft || currentInvoice.invoicePaid"
          @click="updateStatusToPending"
          class="orange"
        >
          Mark as Pending
        </button>
      </div>
    </div>

    <!-- Invoice Details -->
    <div class="invoice-details flex flex-column">
      <div class="top flex">
        <div class="left flex">
          <p><span>#</span> {{ currentInvoice.invoiceId }}</p>
          <p>{{ currentInvoice.productDescription }}</p>
        </div>
        <div class="right flex flex-column">
          <p>{{ currentInvoice.billerStreetAddress }}</p>
          <p>{{ currentInvoice.billerCity }}</p>
          <p>{{ currentInvoice.billerZipCode }}</p>
          <p>{{ currentInvoice.billerCountry }}</p>
        </div>
      </div>
    </div>
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
  },
  methods: {
    ...mapMutations(["SET_CURRENT_INVOICE"]),
    getCurrentInvocie() {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
    },
    toggleEditInvoice() {},
  },
  computed: {
    ...mapState(["currentInvoiceArray"]),
  },
};
</script>
