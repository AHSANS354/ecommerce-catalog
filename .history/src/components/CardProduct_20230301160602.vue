<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="rounded shadow">
          <b-card
            :title="product.nama"
            :img-src="'/assets/images/' + product.gambar"
            img-alt="Image"
            img-top
            tag="article"
            img-height="200rem"
            class="mb-2"
          >
            <b-card-text>Harga : Rp. {{ product.harga }} </b-card-text>

            <router-link :to="'/foods/' + product.id" class="btn btn-info">
              <b-icon-cart-check></b-icon-cart-check> Pesan</router-link
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
};
</script>

<style>
</style>