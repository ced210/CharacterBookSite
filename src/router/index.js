import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CharacterCreation from "../views/CharacterCreation.vue";
import Admin from "../views/Admin.vue";
const ChooseFormTemplate = () => import("../components/ChooseFormTemplate");

Vue.use(VueRouter);
Vue.component("choose-form-template", ChooseFormTemplate);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/character-creation",
    name: "Caracter Creation",
    component: CharacterCreation,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
