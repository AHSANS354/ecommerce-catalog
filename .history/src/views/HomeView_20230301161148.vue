<template>
  <div class="home">
    <navbar-view />
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <h2>Mall Kota Harga <strong>Merakyat</strong></h2>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/undraw_shopping_app_flsj.svg" alt="foto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    NavbarView,
  },
};
</script>
