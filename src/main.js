import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

localStorage.isDeveloppementMode = false;
if (process.env.NODE_ENV === "developpement")
  localStorage.isDeveloppementMode = true;
console.log("localStorage.isDeveloppementMode "+localStorage.isDeveloppementMode);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  created() {
    window.addEventListener("beforeunload", this.handler);
  },
  methods: {
    handler: () => {
      router.push("/logout");
    }
  }
}).$mount("#app");
