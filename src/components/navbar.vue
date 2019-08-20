<template>
  <nav id="navbar">
    <div class="content">
      <router-link to="/" class="logo">FANCY STORE</router-link>
      <ul class="categories">
        <li v-for="cat in categories" :key="cat.id">{{cat.name | capitalize}}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {

    }
  },
  computed: {
    categories: {
      get() {
        return this.$store.getters.categories;
      }
    }
  }

}
</script>

<style lang="scss">
  #navbar {
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    .content {
      width: 1260px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 32px;
      letter-spacing: 4px;
      color: dimgray;
      text-decoration: none;
    }
    .categories {
      li {
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 1px;
        color: dimgray;
        display:inline;
        margin-right: 12px;
        cursor: pointer;
        transition: .3s all;
        &:hover {
          color: rgba(105, 105, 105, 0.705);
        }
      }
    }
  }
</style>