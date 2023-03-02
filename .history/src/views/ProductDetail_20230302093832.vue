<template>
  <div class="product">
    <navbar-view />
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col d-flex justify-content-center" :v-model="barang">
          <card-detail :barang="barang" />
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
      barang: {},
    };
  },
  methods: {
    setBarang(data) {
      this.barang = data;
    },
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/" + this.$route.params.id)
      .then((response) => this.setBarang(response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>