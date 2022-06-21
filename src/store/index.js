import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [],
    cartObJ: {}
  },
  mutations: {
    SET_PRODUCT_TO_CART(state, item) {

      let index
      if(state.cart.length > 0) index = state.cart.map(el => el.id).indexOf(item.id)
      const newCart = [...state.cart]
      if(index >= 0) {
        newCart[index] =  {...item, amount: `${Number( newCart[index].amount) + Number(item.amount)}`}
        state.cart = newCart
      } else state.cart.unshift(item)


    },
    SAVE_PRODUCTS(state, data) {
      state.products = data
    }
  },
  actions: {
    getProductsList({commit}) {
       api.getProductsList().then(res => {
         commit('SAVE_PRODUCTS', res)
       });
    },
  },
  modules: {
  }
})
