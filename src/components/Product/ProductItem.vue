<template>
  <li class="catalog__item" @click.prevent="$emit('gotoPage', 'product', {id: product.id})">
    <ProductImage :image="product.image" :title="product.title"></ProductImage>
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

export default {
  components: {
    ProductImage, ProductTitle, ProductPrice, ProductColor,
  },
  name: 'ProductItem',
  props: ['product'],
};
</script>

<style scoped></style>
