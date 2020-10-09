import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CharacterCreation from "../views/CharacterCreation.vue";
import Admin from "../views/Admin.vue";
import Login from "../components/Login.vue";
import auth from "../auth";
const ChooseFormTemplate = () => import("../components/ChooseFormTemplate");
Vue.use(VueRouter);
Vue.component("choose-form-template", ChooseFormTemplate);

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else next();
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: "/character-creation",
    name: "Caracter Creation",
    component: CharacterCreation,
    beforeEnter: requireAuth,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    beforeEnter: requireAuth,
  },
  { path: "/login", component: Login },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    beforeEnter(to, from, next) {
      auth.logout();
      next("/login");
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
