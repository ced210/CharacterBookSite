<template>
  <div class="home">
    <!-- <v-img
      src="../assets/d20.jpeg"
      max-width="200px"
      max-height="200px"
    ></v-img>-->
    <v-parallax src="../assets/HomeBackGround.jpg" height="700">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1
            class="text-h2 mb-4 secondary--text font-weight-black text-decoration-underline"
            style="text-shadow: 2px 3px 4px #000;"
          >Character Book</h1>
          <h4
            class="text-h5 secondary--text font-weight-black"
            style="text-shadow: 2px 3px 4px #000;"
          >Keep and Manage Your 5e DnD Characters Here!</h4>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
