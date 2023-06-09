import Vue from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import VueRouter from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import ProductPage from '../pages/ProductPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import CartPage from '../pages/CartPage.vue';

Vue.use(VueRouter);
const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'product', component: ProductPage, path: '/product/:id' },
  { name: 'cart', component: CartPage, path: '/cart' },
  { name: 'notFound', component: NotFoundPage, path: '*' },
];
const router = new VueRouter({
  routes,
});
export default router;
