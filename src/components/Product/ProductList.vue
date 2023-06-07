<template>
    <ul class="catalog__list">
        <ProductItem :product="product" v-for="product of products" :key="product.id"
        @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"></ProductItem>
    </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
  name: 'ProductList',
};
</script>

<style scoped>

</style>
