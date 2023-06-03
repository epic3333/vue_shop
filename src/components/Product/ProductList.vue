<template>
    <ul class="catalog__list">
        <ProductItem :product="product" v-for="product of products" :key="product.id"></ProductItem>
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
