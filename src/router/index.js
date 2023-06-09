import Vue from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import VueRouter from 'vue-router';
import MainPage from '../pages/MainPage.vue';

Vue.use(VueRouter);
const routes = [
  { name: 'main', component: MainPage, path: '/' },
];
const router = new VueRouter({
  routes,
});
export default router;
