<template>
  <div>
    <ProductImage :image="product.image" :title="product.title"></ProductImage>
    <ProductTitle :title="product.title"></ProductTitle>
    <ProductPrice :price="product.price"></ProductPrice>
    <ProductColor></ProductColor>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import ProductImage from '@/components/Product/ProductImage.vue';
// eslint-disable-next-line import/no-unresolved
import ProductTitle from '@/components/Product/ProductTitle.vue';
// eslint-disable-next-line import/no-unresolved
import ProductPrice from '@/components/Product/ProductPrice.vue';
// eslint-disable-next-line import/no-unresolved
import ProductColor from '@/components/Product/ProductColor.vue';

export default {
  components: {
    ProductImage, ProductTitle, ProductPrice, ProductColor,
  },
  name: 'ProductItem',
  props: ['product'],
};
</script>

<style scoped></style>
