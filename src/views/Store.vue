<template>
  <div id="store">
    <feed />
    <store-right />
  </div>
</template>

<script>
import Feed from './../components/feed';
import StoreRight from './../components/store_right';

export default {
  name: 'store',
  components: {
    Feed,
    StoreRight,
   },
  created() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchShops");
  }
}
</script>

<style lang="scss">
#store {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
</style>