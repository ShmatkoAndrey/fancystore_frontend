<template>
  <div id="store-right">
    <popular />
    <shops-list />
  </div>
</template>

<script>
import Popular from './popular';
import ShopsList from './shops_list';

export default {
  name: "store-right",
  components: { Popular, ShopsList },

}
</script>

<style>
#store-right {
  width: 330px;
}
</style>