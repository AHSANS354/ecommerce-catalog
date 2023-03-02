<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 800px">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img
            :src="barang.image"
            alt="Image"
            class="rounded"
          ></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-body class="" :title="barang.title">
            <b-card-text>
              {{ barang.description }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardDetail",
  props: ["barang"],
};
</script>

<style>
</style>