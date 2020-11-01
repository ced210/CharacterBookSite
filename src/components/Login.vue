<template>
  <v-container @keyup.enter="login">
    <v-row align-content="center" justify="center">
      <v-card width="50%" :loading="isLoading">
        <v-card-title>
          <h2>Login tt</h2>
          <v-spacer />
          <v-btn color="primary" v-text="'Sign Up'" @click="onSignIn" />
        </v-card-title>
        <v-card-text>
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
              v-if="getAlertInfo"
              :type="getAlertInfo.type"
              text
              v-text="getAlertInfo.text"
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
      <sign-in @save="onSaveSignIn" @close="onCloseSignIn" />
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
      success: false,
      isSignInVisible: false,
      isLoading: false,
      alertInfo: {}
    };
  },
  computed: {
    getAlertInfo() {
      if (this.error) {
        return {
          type: "error",
          text: "Bad login information"
        };
      } else if (this.success) {
        return {
          type: "success",
          text: "Welcome!"
        };
      } else if (this.$route.query.redirect) {
        return {
          type: "info",
          text: "You need to login first."
        };
      }
      return null;
    }
  },
  methods: {
    onSignIn() {
      this.isSignInVisible = true;
    },
    onCloseSignIn() {
      this.isSignInVisible = false;
    },
    onSaveSignIn() {
      this.onCloseSignIn();
    },
    login() {
      if (!this.username || !this.password) return;
      this.isLoading = true;
      auth.login(this.username, this.password, loggedIn => {
        if (!loggedIn) this.error = true;
        else {
          this.success = true;
          this.$router.replace(this.$route.query.redirect || "/");
        }
        this.isLoading = false;
      });
    }
  }
};
</script>
