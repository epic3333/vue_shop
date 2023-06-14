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
import products from '../data/products';
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
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price > this.filterPriceFrom);
      }
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.filterPriceTo);
      }
      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter((product) => product.categoryId === this.filterCategoryId);
      }
      if (this.filterColorId) {
        filteredProducts = filteredProducts.filter((product) => product.colorId === this.filterColorId);
      }

      return filteredProducts;
    },
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
      axios.get(`https://vue-study.skillbox.cc/api/products?page=${this.page}&limit=${this.productsPerPage}`)
        .then((response) => { this.productsData = response.data; });
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
