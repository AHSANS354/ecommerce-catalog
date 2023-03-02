<template>
  <div class="product">
    <navbar-view />
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col border"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
export default {
  name: "ProductDetail",
  components: { NavbarView },
};
</script>

<style>
</style>