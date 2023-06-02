<template>
    <ul class="catalog__list">
      <li class="catalog__item" v-for="(product, index) of products" :key="index">
        <ProductItem :product="product"></ProductItem>
      </li>
    </ul>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import ProductItem from '@/components/Product/ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
  name: 'ProductList',
};
</script>

<style scoped>

</style>
