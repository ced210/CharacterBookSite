<template>
  <v-card width="50%" :loading="isLoading">
    <v-card-title>
      <h2>Login</h2>
    </v-card-title>
    <v-card-text>
      <p v-if="$route.query.redirect">
        You need to login first.
      </p>
      <v-form>
        <v-text-field v-model="email" placeholder="email" counter="16" />
        <v-text-field
          v-model="pass"
          placeholder="password"
          type="password"
          counter="32"
        />
      </v-form>
      <p v-if="error" color="error">Bad login information</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn type="submit" color="primary" v-text="'login'" @click="login" />
    </v-card-actions>
  </v-card>
</template>

<script>
import auth from "../auth";
export default {
  data() {
    return {
      email: "joe@example.com",
      pass: "",
      error: false,
      isLoading: false
    };
  },
  methods: {
    async login() {
      this.isLoading = true;
      await auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) this.error = true;
        else this.$router.replace(this.$route.query.redirect || "/");
      });
      this.isLoading = false;
    }
  }
};
</script>