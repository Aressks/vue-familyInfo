<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div class="page-container">
    <main class="content">
      <Navbar />
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
