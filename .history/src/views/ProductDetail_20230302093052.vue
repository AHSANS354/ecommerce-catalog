<template>
  <div class="product">
    <navbar-view />
    <div class="container mt-5 pt-5">
      <div class="row">
        <div
          class="col d-flex justify-content-center"
          v-for="product in products"
          :key="product.id"
        >
          <card-detail :product="product" />
          {JSON.parse(product)}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import axios from "axios";
import CardDetail from "@/components/CardDetail.vue";
export default {
  name: "ProductDetail",
  components: { NavbarView, CardDetail },
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