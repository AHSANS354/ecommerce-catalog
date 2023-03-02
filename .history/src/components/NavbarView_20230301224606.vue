<template>
  <div class="container p-2 fixed-top">
    <b-navbar toggleable="lg" type="light" variant="info">
      <router-link class="navbar-brand" to="/">NavBar</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="List Product" right>
            <router-link class="dropdown-item" to="/">EN</router-link>
            <router-link class="dropdown-item" to="/">ES</router-link>
            <router-link class="dropdown-item" to="/">RU</router-link>
            <router-link class="dropdown-item" to="/">FA</router-link>
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
export default {
  name: "NavbarView",
};
</script>

<style>
</style>