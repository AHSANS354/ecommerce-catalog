<template>
  <div class="home">
    <navbar-view />
    <div class="container mt-5 pt-4">
      <div class="row">
        <div class="col-md-6">
          <h2>Mall Kota Harga <strong>Merakyat</strong></h2>
          <p>Mulai carilah fasion kesukaan anda disini!</p>

          <b-button class="mt-3"> pesan sekarang </b-button>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/images/undraw_web_shopping_re_owap.svg"
            alt="foto"
            width="350"
          />
        </div>
      </div>

      <div class="row border-bottom m-3 p-2">
        <div class="col d-flex justify-content-between mt-4">
          <h2><strong>Semua Produk</strong></h2>
          <h3>
            Jumlah :
            {{ products.length }}
          </h3>
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
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    NavbarView,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
