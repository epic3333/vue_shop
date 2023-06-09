<template>
  <li class="catalog__item">
    <ProductImage :productId="product.id" :image="product.image" :title="product.title"></ProductImage>
    <ProductTitle :title="product.title"></ProductTitle>
    <ProductPrice :price="product.price"></ProductPrice>
    <ProductColor :colorId="product.colorId"
                  :colorVal="product.colorVal"></ProductColor>
  </li>
</template>

<script>
import ProductImage from './ProductImage.vue';
import ProductTitle from './ProductTitle.vue';
import ProductPrice from './ProductPrice.vue';
import ProductColor from './ProductColor.vue';
import gotoPage from '../../helpers/gotoPage';

export default {
  components: {
    ProductImage, ProductTitle, ProductPrice, ProductColor,
  },
  name: 'ProductItem',
  props: ['product'],
  methods: {
    gotoPage,
  },
};
</script>

<style scoped></style>
