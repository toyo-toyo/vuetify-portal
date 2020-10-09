import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PortalPage from "../views/PortalPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "PortalPage",
    component: PortalPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
