<template>
  <div class="productList">
    <navbar-view />
    <div class="container mt-5 pt-5">
      <bread-crumb />
      <div class="row">
        <div class="col">
          <h1>ini Product {{ $route.params.list }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <card-product :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import axios from "axios";
import BreadCrumb from "@/components/BreadCrumb.vue";

export default {
  name: "productList",
  components: { NavbarView, BreadCrumb },
  data() {
    return {
      products: {},
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get(
        "https://fakestoreapi.com/products/category/" + this.$route.params.list
      )
      .then((response) => this.setProducts(response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>