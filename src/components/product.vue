<template>
  <div class="product" :class="'product-' + size">
    <div class="image">
      <img :src="product.images[0].url">
    </div>
    <div class="description">
      <div class="text-side">{{product.name}}</div>
      <div class="price-side">
        <small v-if="product.discount">{{product.price}}</small>
        <b :class="{'discount': product.discount}">${{product.discount ? product.discount : product.price}}</b>
      </div>
    </div>
    <!-- <div class="likes"></div> -->
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['product', 'size'],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.product {
  width: 406px;
  height: 488px;
  margin-bottom: 18px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 1px 0px 0px rgba(0,0,0,0.07), 0 0px 0px 1px rgba(0,0,0,0.03);
  &:hover {
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.07);
  }
  .image {
    width: 100%;
    height: 406px;
    cursor: pointer;
    transition:  .15s all;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    &:hover {
      filter: contrast(0.7);
    }
  }
  .description {
    height: 82px;
    // height: 62px;
    width: 100%;
    background: white;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .text-side {
      width: 280px;
    }
  }
  .price-side {
    display: flex;
    justify-self: flex-end;

    small {
      font-size: 14px;
      color: #8a8f9c;
      text-decoration: line-through;
      margin-right: 8px;
      font-weight: 400;
      margin-top: 5px;
    }
    b {
      display: inline-block;
      color: #65C07D;
      padding: 2px 8px;
      line-height: 19px;
      border-radius: 12px;
      border: 1px solid rgba(101,192,125,0.7);
      height: fit-content;
      font-weight: 500;
      cursor: pointer;
    }
    b.discount {
      color: #ec3f3f;
      border-color: rgba(236,63,63,0.7);
    }
  }
  &.product-small {
    width: 265px;
    height: 325px;
    .image {
      height: 265px;
    }
    .description {
      height: 62px;
      padding: 8px;
      font-size: 14px;
      line-height: 18px;
    }
  }
}
</style>