<template>
  <div class="product-list">
    <div class="card" v-for="(product, index) in products" :key="index"><!--Уникальный key должен быть обезательным-->
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>
      <div>
<!--        <input type="number" ref="amount" v-model="values[product.id]" :id="product.id">-->
        <input type="number" v-model="values[product.id]">
        <span>кг</span>
      </div>
      <button @click="addToCart(product)"> В корзину </button>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations, mapState} from 'vuex'
export default {
  props: {
    currency: String,
  },
  data() {
    return {
       //products лутше завести в глобальном состояний и
      // запрос на продукты делать в корневом компоненте
     // чтобы продукты один раз  запросить и через глабальный store будет доступ к продуктам из любого комонента через mapState
      // products: [],
      values: {}
    };
  },
  computed: {
      ...mapState({
          products: state => state.products
      })
    // Зачем вычислять если можно сделать при помощи css @media
    // cardsWidth() {
    //   let width = window.innerWidth;
    //   console.log(width, 'width')
    //   let count = 1;
    //   let test = 'new'
    //   if (width > '840px') {
    //     count = 3;
    //   } else if ((width > '420px' && width < '840px')) {
    //     count = 2;
    //     test = 'medium'
    //   }
    //   return 100 / count;
    // },
  },
  methods: {
    ...mapActions(['getProductsList']),
    ...mapMutations(['SET_PRODUCT_TO_CART']),
    // startPricesMonitoring() {
    //   setInterval(this.getList, 1000);
    // },
    // async getList() {
    //   let data = await this.getProductsList()
    //
    //   this.products = data;
    // },
    addToCart(product) {
      //  зачем по refs использовать если можно завести в data объект values и с вязать с v-model  пример v-model='values[product.id]'
      // let amount = this.$refs.amount.find((input) => input.id === product.id).value;
      // проверить на 0
      if(this.values[product.id] === "0" || !this.values[product.id]){
          return
      } else {
          let data = {
              amount: this.values[product.id],
              price: product.price,
              title: product.title,
              id: product.id
          };
          // this.$parent.cart.push(data); cart в глобальном стейте здесь вызываем мутацию

          this.SET_PRODUCT_TO_CART(data)
      }

    },
  },
  // created() {
  //   this.startPricesMonitoring();
  // },
};
</script>

<style>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }

  .card {
    width: 33%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  @media (min-width: 420px) and (max-width: 840px) {
    .card {
      width: 50%;
      margin-top: 10px;
    }
  }
  @media (max-width: 400px) {
    .card {
      width: 100%;
      margin-top: 10px;
    }
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
