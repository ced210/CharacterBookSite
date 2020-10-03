<template>
  <div id="app">
    <v-app>
      <v-app-bar
        id="nav"
        color="primary"
        dark
        app
        collapse-on-scroll
        scroll-target="#scrolling-techniques-1"
      >
        <v-app-bar-nav-icon @click="drawer = true" />
        <v-toolbar-title v-text="'Character Book'"></v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary app>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="primary--text text--secondary">
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/character-creation">
              <v-list-item-icon>
                <v-icon>face</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Character Creation</v-list-item-title>
            </v-list-item>
            <v-list-item to="/about">
              <v-list-item-icon>
                <v-icon>info</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
            <v-list-item to="/admin">
              <v-list-item-icon>
                <v-icon>settings</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container id="scrolling-techniques-1" fluid>
          <router-view />
        </v-container>
      </v-main>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  data() {
    return {
      drawer: false,
      group: false
    };
  }
};
</script>
