<template>
  <b-breadcrumb>
    <b-breadcrumb-item href="/">
      <b-icon
        icon="house-fill"
        scale="1.25"
        shift-v="1.25"
        aria-hidden="true"
      ></b-icon>
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item>Product</b-breadcrumb-item>
    <b-breadcrumb-item>{{ $route.params.list }}</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
export default {
  name: "BreadCrumb",
};
</script>

<style>
</style>