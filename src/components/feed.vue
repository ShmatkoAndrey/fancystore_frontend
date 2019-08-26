<template>
  <div id="feed">
    <product
      v-for="(product, index) in products"
      :key="'product' + product.id"
      :product="product"
      :size="((index+1)%5 > 0 && (index+1)%5 < 4) ? 'small' : 'big'"
    />
  </div>
</template>

<script>
import Product from './product';

export default {
  name: 'feed',
  components: { Product },
  computed: {
    products: {
      get() {
        return this.$store.getters.products;
      }
    }
  }
}
</script>

<style>
#feed {
  width: 830px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>