<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar'
export default {
  name: 'app',
  components: { Navbar },
  created() {
    this.$store.dispatch("fetchCategories");

    this.$store.dispatch("setToken", {token: localStorage.getItem('token')});
    this.$store.dispatch("fetchCurrentUser");
  }
}
</script>

<style lang="scss">
@import "./assets/style/main.scss";

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
