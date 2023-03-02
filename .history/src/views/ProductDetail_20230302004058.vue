<template>
  <div class="product">
    <navbar-view />
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-4">
          <img src="" alt="" />
        </div>
        <div class="col-md-8"></div>
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
      .get("https://fakestoreapi.com/products/" + this.$route.params.id)
      .then((response) => this.setProducts(response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>