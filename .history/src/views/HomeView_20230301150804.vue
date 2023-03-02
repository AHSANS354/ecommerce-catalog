<template>
  <div class="home">
    <navbar-view />
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
