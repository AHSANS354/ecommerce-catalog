<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 800px">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img :src="barang.image" alt="Image" class="p-3"></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-body class="" :title="barang.title">
            <div class="d-flex justify-content-between">
              <h5>{{ barang.category }}</h5>
              <div class="d-flex align-items-center">
                <span>{{ barang.rating.rate }}</span>
                <div class="rate ml-2">
                  <div
                    class="rating"
                    :style="{ width: (barang.rating.rate / 5) * 100 + '%' }"
                  ></div>
                </div>
              </div>
            </div>
            <hr class="mt-2" />
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
