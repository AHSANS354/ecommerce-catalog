<template>
  <div class="productList">
    <navbar-view />
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col">
          <h1>ini Product {{ $route.params.list }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import axios from "axios";

export default {
  name: "productList",
  components: { NavbarView },
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
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>