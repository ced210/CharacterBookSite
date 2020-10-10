<template>
  <v-container>
    <v-row align-content="center" justify="center">
      <v-card width="50%">
        <v-card-title>
          <h2>Login</h2>
          <v-spacer />
          <v-btn color="primary" v-text="'Sign In'" @click="onSignIn" />
        </v-card-title>
        <v-card-text>
          <p v-if="$route.query.redirect">
            You need to login first.
          </p>
          <v-container>
            <v-form>
              <v-text-field
                v-model="username"
                placeholder="Username"
                counter="16"
              />
              <v-text-field
                v-model="password"
                placeholder="Password"
                type="password"
                counter="32"
              />
            </v-form>
            <v-alert
              v-if="error"
              type="error"
              text
              v-text="'Bad login information'"
            />
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            type="submit"
            color="primary"
            v-text="'login'"
            :disabled="!this.username || !this.password"
            @click="login"
          />
        </v-card-actions>
      </v-card>
    </v-row>
    <v-dialog
      v-if="isSignInVisible"
      v-model="isSignInVisible"
      persistent
      max-width="50vw"
    >
      <sign-in @close="onCloseSignIn" />
    </v-dialog>
  </v-container>
</template>

<script>
import auth from "../auth";
import SignIn from "./SignIn.vue";

export default {
  components: {
    SignIn
  },
  data() {
    return {
      username: null,
      password: null,
      error: false,
      isSignInVisible: false
    };
  },
  methods: {
    onSignIn() {
      this.isSignInVisible = true;
    },
    onCloseSignIn() {
      this.isSignInVisible = false;
    },
    login() {
      auth.login(this.username, this.password, loggedIn => {
        if (!loggedIn) this.error = true;
        else this.$router.replace(this.$route.query.redirect || "/");
      });
    }
  }
};
</script>
