<template>
  <div class="container p-2 fixed-top bg-light">
    <b-navbar toggleable="lg" type="light">
      <router-link class="navbar-brand" to="/">NavBar</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown
            text="List Product"
            right
            v-for="list in lists"
            :key="list"
          >
            <router-link class="dropdown-item" to="/">{{ list }}</router-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link to="/"
            ><b-nav-item><b-icon-bag-check></b-icon-bag-check></b-nav-item
          ></router-link>
          <router-link to="/"
            ><b-nav-item
              ><b-icon-person-circle></b-icon-person-circle></b-nav-item
          ></router-link>
          <router-link to="/"
            ><b-nav-item
              ><b-icon-box-arrow-in-right></b-icon-box-arrow-in-right></b-nav-item
          ></router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NavbarView",
  data() {
    return {
      lists: {},
    };
  },
  methods: {
    setLists(data) {
      this.lists = data;
    },
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => this.setLists(response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>