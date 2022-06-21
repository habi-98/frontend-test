<template>
  <div class="cart-list" v-if="cart.length > 0">
    <div class="cart-list__item">
      <div>Продукт</div>
      <div>Вес</div>
      <div>Цена</div>
    </div>
    <div class="cart-list__item" v-for="(item, index) in listCart" :key="index"><!--key обезателен-->
      <div>{{item.title}}</div>
      <div>{{item.amount}} кг</div>
      <div>{{item.price}} </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      cart: state => state.cart
    }),
    listCart() {
        return this.cart;
    },
  },
};
</script>

<style>
  .cart-list {
    padding: 10px;
  }
  .cart-list__item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 500px;
    border-bottom: 1px solid #ccc;
  }
  @media (max-width: 420px) {
    .cart-list__item {
      width: 100%;
    }
  }
  .cart-list__item:first-child {
    border-bottom: none;
  }
</style>
