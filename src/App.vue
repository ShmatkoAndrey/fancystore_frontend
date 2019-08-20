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
  }
}
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
}

</style>
