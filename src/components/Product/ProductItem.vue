<template>
  <li class="catalog__item" @click.prevent="gotoPage('product', {id: product.id})">
    <ProductImage :image="product.image" :title="product.title"></ProductImage>
    <ProductTitle :title="product.title"></ProductTitle>
    <ProductPrice :price="product.price"></ProductPrice>
    <ProductColor :colorId="product.colorId"
                  :colorVal="product.colorVal"></ProductColor>
  </li>
</template>

<script>
import eventBus from '../../eventBus';
import ProductImage from './ProductImage.vue';
import ProductTitle from './ProductTitle.vue';
import ProductPrice from './ProductPrice.vue';
import ProductColor from './ProductColor.vue';

export default {
  components: {
    ProductImage, ProductTitle, ProductPrice, ProductColor,
  },
  name: 'ProductItem',
  props: ['product'],
  methods: {
    gotoPage(pageName, pageParams) {
      eventBus.$emit('gotoPage', pageName, pageParams);
    },
  },
};
</script>

<style scoped></style>
