<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <h1>Invoice</h1>
      <span>There are 4 total invoices</span>
      <div class="left flex flex-column"></div>

      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex" ref="filter">
          <span>Filter By status</span>
          <img src="../assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="../assets/icon-plus.svg" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  component: {},
  data() {
    return {
      mobile: null,
    };
  },
  methods: {
    toggleFilterMenu() {},
    newInvoice() {},
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;
}
</style>
