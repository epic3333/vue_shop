<template>
  <div>
    <component :is="currentPageRoute"></component>
  </div>
</template>

<script>
import MainPage from './components/pages/MainPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue';

const routes = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  name: 'app',
  components: { MainPage, ProductPage, NotFoundPage },
  data() {
    return {
      currentPage: 'main',
    };
  },
  computed: {
    currentPageRoute() {
      return routes[this.currentPage] || 'NotFoundPage';
    },
  },
};
</script>
