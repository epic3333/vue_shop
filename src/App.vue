<template>
  <div>
    <MainPage v-if="currentPage == 'main'"></MainPage>
    <ProductPage v-else-if="currentPage == 'product'"></ProductPage>
    <NotFoundPage v-else></NotFoundPage>
  </div>
</template>

<script>
import MainPage from './components/pages/MainPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue';

export default {
  name: 'app',
  components: { MainPage, ProductPage, NotFoundPage },
  data() {
    return {
      currentPage: 'main',
    };
  },
};
</script>
