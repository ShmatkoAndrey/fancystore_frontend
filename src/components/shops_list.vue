<template>
  <div id="shops-list" class="panel">
    <h3 class="label">Stores</h3>

    <div class="shop-element" v-for="shop in shops" :key="'s-' + shop.id">
      <div class="info">
        <div class="logo"></div>
        <div class="name">{{shop.name}}</div>
      </div>
      <div class="products">
        <img v-for="pr in shop.product_images" :key="'img' + pr.id" :src="pr.url">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "shops-list",
  computed: {
    shops: {
      get() {
        return this.$store.getters.shops;
      },
      deep: true
    },
  },
  mounted() {
    // this.$store.dispatch("fetchShopImages");
  }
}
</script>

<style lang="scss">
#shops-list {
  padding: 10px;
}
.shop-element {
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
  border-radius: 5px;
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  min-height: 50px;
  box-sizing: border-box;
  padding: 9px;
  .info {
    display: flex;
    align-items: flex-start;
    .logo {
      width: 50px;
      height: 50px;
      background: rgb(187, 187, 187);
      margin-right: 8px;
      border-radius: 8px;
    }
    .name {
      padding-top: 8px;
      // color:
    }
  }
  .products {
    display: flex;
    justify-content: space-between;
    margin: 10px 3px;
    img {
      width: 70px;
      height: 60px;
      object-fit: cover;
    }
  }
}
</style>