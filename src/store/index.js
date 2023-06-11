import Vue from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [
      { productId: 1, amount: 1 },
    ],
  },
  mutations: {
    addProductToCart(state, { productId, amount }) {
      // eslint-disable-next-line no-shadow
      const item = state.cartProducts.find((item) => item.productId === productId);

      if (item) {
        item.amount += amount;
      } else {
        state.cartProducts.push({
          productId, amount,
        });
      }
    },
  },
});
