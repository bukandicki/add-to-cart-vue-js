<template>
  <div id="app">
    <Header />
    <div class="container-fluid my-4">
      <div class="row">
        <div class="col-md-9">
          <ProductList />
        </div>
        <div class="col-md-3">
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default {
  name: 'App',
  components: {
    Header,
    ProductList,
    Cart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
