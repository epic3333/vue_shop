// eslint-disable-next-line
<template>
  <section class="catalog">
    <ProductList :products="products"></ProductList>
    <BasePagination v-model="page"
                    :count="countProducts"
                    :per-page="productsPerPage"
                    :lastPage="lastPage"
                    :fistPage="fistPage"></BasePagination>
  </section>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import products from '@/data/products';
// eslint-disable-next-line import/no-unresolved
import ProductList from '@/components/Product/ProductList.vue';
// eslint-disable-next-line import/no-unresolved
import BasePagination from '@/components/BasePagination.vue';

export default {
  name: 'App',
  components: { ProductList, BasePagination },
  data() {
    return {
      page: 1,
      productsPerPage: 6,
      fistPage: 1,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return products.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return products.length;
    },
    lastPage() {
      return Math.ceil(this.countProducts / this.productsPerPage);
    },
  },
};
</script>
