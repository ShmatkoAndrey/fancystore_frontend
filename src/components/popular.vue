<template>
  <div class="panel">
    <h3 class="label">Popular</h3>
    <div class="popular-list">
      <div class="image" v-for="product in popular" :key="'p-' + product.id">
        <img :src="product.images[0].url" alt />
      </div>
    </div>
    <div class="link" @click="size = 8">See more</div>
  </div>
</template>

<script>
export default {
  name: "popular-panel",
  data() {
    return {
      size: 4,
    };
  },
  computed: {
    products: {
      get() {
        return this.$store.getters.products;
      }
    },
    popular() {
      return this.shuffle(this.products).slice(0, this.size)
    }
  },
  methods: {
    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  }
};
</script>

<style lang="scss">
.popular-list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .image {
    width: 150px;
    height: 150px;
    margin: 3px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>