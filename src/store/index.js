import Vue from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [
      { productId: 1, amount: 2 },
    ],
  },
  mutations: {
    addProductToCart(state, { productId, amount }) {
      state.cartProducts.push({
        productId, amount,
      });
    },
  },
});
