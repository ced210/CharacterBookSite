import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: colors.blue,
        primary: "#6F4E37", //Tuscan Brown Gradient
        // primary: "#66512c",
        secondary: colors.grey.darken2,
        accent: colors.shades.black,
        error: colors.red.accent3,
        succes: colors.green,
        background: "#f0f0d1" //Parchment
      },
      dark: {
        primary: colors.blue.lighten3
      }
    }
  },
  icons: {
    iconfont: "md"
  }
});
