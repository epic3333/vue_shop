<template>
    <main class="content container">
        <div class="content__top content__top--catalog">
            <h1 class="content__title">
            Каталог
            </h1>
            <span class="content__info">
            {{ countProducts }} товара
            </span>
        </div>

        <div class="content__catalog">
        <ProductFilter :price-from.sync="filterPriceFrom"
                    :price-to.sync="filterPriceTo"
                    :category-id.sync="filterCategoryId"
                    :color-id.sync="filterColorId"></ProductFilter>

            <section class="catalog">
                <ProductList :products="products"></ProductList>
                <BasePagination v-model="page"
                                :count="countProducts"
                                :per-page="productsPerPage"
                                :lastPage="lastPage"
                                :fistPage="fistPage"></BasePagination>
            </section>
        </div>
    </main>
</template>
<script>
// eslint-disable-next-line
import axios from 'axios';
import ProductList from '../components/Product/ProductList.vue';
import BasePagination from '../components/BasePagination.vue';
import ProductFilter from '../components/Filter/ProductFilter.vue';

export default {
  name: 'MainPage',
  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorId: 0,
      page: 1,
      productsPerPage: 6,
      fistPage: 1,
      productsData: null,
    };
  },
  computed: {
    products() {
      return this.productsData
        ? this.productsData.items.map((product) => ({
          ...product,
          image: product.image.file.url,
        }))
        : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
    lastPage() {
      return Math.ceil(this.countProducts / this.productsPerPage);
    },
  },
  methods: {
    loadProducts() {
      axios.get('https://vue-study.skillbox.cc/api/products', {
        params: {
          page: this.page,
          limit: this.productsPerPage,
          categoryId: this.filterCategoryId,
          minPrice: this.filterPriceFrom,
          maxPrice: this.filterPriceTo,
        },
      })
        .then((response) => { this.productsData = response.data; });
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoryId() {
      this.loadProducts();
    },
    filterColorId() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
