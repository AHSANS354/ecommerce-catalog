import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list/:list",
    name: "productList",
    component: ProductList,
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
