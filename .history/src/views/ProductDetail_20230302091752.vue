<template>
  <div class="product">
    <navbar-view />
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col">
          <card-detail />
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