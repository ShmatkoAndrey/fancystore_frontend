<template>
  <div id="login">

  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", { email: this.email, password: this.password })
    }
  }
}
</script>

<style>

</style>