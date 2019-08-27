<template>
  <div id="product" v-if="product">
    <div class="content">
      <div class="image">
        <img :src="full_image">
      </div>
      <div class="details">
        <div class="images">
          <img @click="chooseImage(image)" :src="image.url" v-for="image in product.images" :key="image.id">
        </div>
        <div class="description">
          <h3>Description</h3>
          {{product.description}}
        </div>
      </div>
    </div>
    <div class="price panel">
      <h1 class="name">{{product.name}}</h1>
      <div class="price-num"> <small v-show="product.discount">{{product.price}}</small> ${{product.discount ? product.discount : product.price}}</div>
      <div class="btn btn-green">Add to cart</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-full',
  data() {
    return {
      product: null,
      full_image: ""
    }
  },
  methods: {
    chooseImage(image) {
      this.full_image = image.url;
    }
  },
  created() {
     this.$store.dispatch("fetchProduct", this.$route.params.id).then(res => {
       this.product = res;
       this.full_image = this.product.images[0].url;
     })
  }
}
</script>

<style lang="scss">
#product {
  width: 1200px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  .content {
    width: 720px;
    border-radius: 5px;
    overflow: hidden;
  }
  .price {
    width: 440px;
    min-height: 200px;
    height: fit-content;
    padding: 20px 20px;
    box-sizing: border-box;
    h1 {
      line-height: 25px;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      margin-top: 5px;
    }
    .price-num {
      font-size: 16px;
      font-weight: 400;
      display: flex;
      align-items: center;
    }
    small {
      font-size: 14px;
      color: #8a8f9c;
      text-decoration: line-through;
      margin-right: 8px;
      font-weight: 400;
      // margin-right: 5px;
    }
  }
  .image {
    width: 720px;
    height: 540px;
    background: rgba($color: #000000, $alpha: .03);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .details {
    width: 100%;
    background: white;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    box-sizing: border-box;
    .images {
      width: 210px;
      height: fit-content;
      margin-right: 10px;
      display: flex;
      flex-wrap: wrap;
      img {
        cursor: pointer;
        display: block;
        width: 55px;
        height: 55px;
        object-fit: cover;
        border-radius: 5px;
        margin: 5px;
      }
    }
    .description {
      width: 520px;
      color: dimgray;
    }
  }
}
</style>
