<template>
  <div id="login">
    <input type="email" v-model="login_fields.email">
    <input type="password" v-model="login_fields.password">
    <input type="button" value="Login" @click="login">

    <br>
    <br>

    <input type="text" v-model="registration_fields.name" placeholder="Name">
    <input type="text" v-model="registration_fields.username" placeholder="Username">
    <input type="email" v-model="registration_fields.email" placeholder="Email">
    <input type="password" v-model="registration_fields.password" placeholder="Password">
    <!-- <input type="password" v-model="password_confirmation"> -->
    <input type="button" value="Registration" @click="registration">

  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      login_fields: {
        name: '',
        username: '',
        email: '',
        password: ''
      },
      registration_fields: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.login_fields)
    },
    registration() {
      this.registration_fields.password_confirmation = this.registration_fields.password;
      this.$store.dispatch("registration", this.registration_fields)
    },
  }
}
</script>

<style lang="scss">
#login {
  margin-top: 100px;
}
</style>