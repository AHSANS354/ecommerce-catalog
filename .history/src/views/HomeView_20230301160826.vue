<template>
  <div class="home">
    <navbar-view />
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <h2>Mall Kota Harga<strong>Merakyat</strong></h2>
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
