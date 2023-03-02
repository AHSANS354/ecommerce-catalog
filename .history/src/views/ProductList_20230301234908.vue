<template>
  <div class="productList">
    <navbar-view />
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col">
          <h1>ini Product</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";

export default {
  name: "productList",
  components: { NavbarView },
};
</script>

<style>
</style>