<template>
  <div class="home">
    <navbar-view />
    <div class="container mt-5">
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
        <card-product />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import CardProduct from "@/components/CardProduct.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    NavbarView,
    CardProduct,
  },
};
</script>
