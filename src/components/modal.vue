<template>
  <div class="modal">
    <div class="modal-content">
      <p>Are you sure want to exit? Your chnages will not be saved?</p>
      <div class="actions flex">
        <button @click="closeModal" class="purple">Return</button>
        <button @click="closeInvoice" class="red">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Modal",
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "TOGGLE_INVOICE"]),
    closeInvoice() {
      this.TOGGLE_INVOICE();
      this.closeModal();
    },
    closeModal() {
      this.TOGGLE_MODAL();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 100;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .modal-content {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;

    p {
      text-align: center;
    }

    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>
