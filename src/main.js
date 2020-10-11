import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  created() {
    window.addEventListener("beforeunload", this.handler);
  },
  methods: {
    handler: event => {
      console.log("beforePageDestroyed");
      console.log(event);
      router.push("/logout");
    }
  }
}).$mount("#app");
