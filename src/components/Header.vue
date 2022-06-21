<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ getPrice }} {{ currency }}</h3>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
  name: 'Header',
  props: {
    // cart: Array,
    // required не сработает cart его надо установить для объекта  cart : {type: Array, required true}
    //required не нужен если есть default значение
    // required: true,
    // 1 default должны возвращатся из функций
    // 2 cart тип Array значит по умолчанию должно возвращатся пустой массив
    // default: {},
    currency: String,
  },

  // watch: {
  //   cart(cart) {
  //     let val = 0;
  //     cart.forEach((item) => {
  //       val += item.price * item.amount;
  //     });
  //     this.cartPrice = val;
  //   },
  // },
  //
 // Computed Лучше подходит здесь
  computed: {
    ...mapState({
      cart: state => state.cart
    }),
    getPrice() {
      let val = 0
      this.cart.forEach((item) => val += item.price * item.amount);
      return val
    }
  },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>
<!--Темплате надо поднять на верх не понятно где Header-->
<!--<template>-->
<!--  <div class="header">-->
<!--    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>-->
<!--  </div>-->
<!--</template>-->
