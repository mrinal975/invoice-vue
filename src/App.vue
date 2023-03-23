<template>
  <div>
    <div v-if="!mobile" class="app flex">
      <Navigation />
      <router-view />
    </div>
    <div v-else class="mobile-message flex flex-column">
      <h2>Sorry, this app is not suppored on mobile Device</h2>
      <p>To use this app,please use a computer or tablet</p>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: { Navigation },
  data() {
    return {
      mobile: null,
    };
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.app {
  background-color: #141625;
  min-height: 100vh;
  @media (min-width: 900px) {
    flex-direction: row !important;
  }
}
.app-content {
  padding: 0 20px;
  flex: 1;
  position: relative;
}
.mobile-message {
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #141625;
  color: #fff;
}
</style>
