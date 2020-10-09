<template>
  <v-card :loading="isLoading">
    <v-card-title>
      <h2>Sign In</h2>
      <v-spacer />
      <v-btn icon @click="close">
        <v-icon color="secondary">close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form>
          <v-col cols="12">
            <v-text-field
              v-model="username"
              label="Username"
              placeholder="Username"
              counter="16"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              type="email"
              label="Email"
              placeholder="Email"
              :rules="[rules.required, rules.email]"
              counter="255"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              label="Password"
              placeholder="Password"
              type="password"
              counter="32"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="confirmationPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              counter="32"
              :color="getConfirmationMatchColor"
            />
          </v-col>
        </v-form>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="" v-text="'close'" @click="close" />
      <v-btn color="primary" v-text="'Sign In'" @click="createUser" />
    </v-card-actions>
  </v-card>
</template>

<script>
import UserServices from "../services/UserServices";

export default {
  name: "SignIn",
  data() {
    return {
      username: null,
      email: null,
      password: null,
      confirmationPassword: null,
      error: false,
      isLoading: false,
      rules: {
        required: value => !!value || "Required.",
        counter: value => value.length <= 20 || "Max 20 characters",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  computed: {
    getConfirmationMatchColor() {
      return this.confirmationPassword &&
        this.password === this.confirmationPassword
        ? "succes"
        : "error";
    }
  },
  methods: {
    createUser() {
      UserServices.create({
        username: this.username,
        password: this.password,
        email: this.email
      }).then(() => this.close());
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>
