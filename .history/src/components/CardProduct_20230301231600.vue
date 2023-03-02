<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="rounded shadow">
          <b-card
            :img-src="product.image"
            img-alt="Image"
            img-top
            tag="article"
            class="card mb-2"
          >
            <h3 class="title">{{ product.title }}</h3>
            <b-card-text class="deskripsi">
              {{ product.description }}
            </b-card-text>

            <router-link to="/"
              ><b-icon-eye></b-icon-eye> Lihat Detail</router-link
            >
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
</style>