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
            <b-card-text>
              <h3 class="text-truncate">{{ product.title }}</h3>
              <p class="deskripsi">{{ product.description }}</p>
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
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