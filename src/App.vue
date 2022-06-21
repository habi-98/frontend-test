<template>
  <div id="app">
    <Header :currency="currency"></Header>
    <List :currency="currency" @setProduct="setProduct"/>
    <Cart/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Cart from './components/Cart.vue';
import {mapActions} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      // cart это глабальное
      // состояние,  лучше вынисти во vuex если проект будет большим его подерживать будет сложно
      // cart: [],
      currency: 'VGTB',
      interval: null
    };
  },
  methods: {
    ...mapActions(['getProductsList']),
    setProduct(item) {
      this.cart.push(item)
    },
    fetchProducts() {
      this.stopUpdateProducts()
      this.interval = setInterval(this.getProductsList, 2000)

    },
    stopUpdateProducts() {
      clearInterval(this.interval)
    }
  },
  components: {
    Header,
    List,
    Cart,
  },
  created() {
    this.fetchProducts()
  },
  destroyed() {
    //вызывается при удалений компонента
    this.stopUpdateProducts()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
