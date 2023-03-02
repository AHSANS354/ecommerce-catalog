<template>
  <div class="product">
    <navbar-view />
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-4 border">
          <img :src="product.image" alt="foto" width="300" align="center" />
        </div>
        <div class="col-md-8">
          <h2>{{ product.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import axios from "axios";
export default {
  name: "ProductDetail",
  components: { NavbarView },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>