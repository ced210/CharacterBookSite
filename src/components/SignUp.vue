<template>
  <v-card :loading="isLoading">
    <v-card-title>
      <h2>Sign Up</h2>
      <v-spacer />
      <v-btn icon @click="close">
        <v-icon v-text="'close'" />
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form">
          <v-col cols="12">
            <v-text-field
              v-model="username"
              :rules="[rules.required]"
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
              :rules="[rules.required]"
              label="Password"
              placeholder="Password"
              type="password"
              counter="32"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="confirmationPassword"
              :rules="[rules.required, rules.confirmationPasswordRule]"
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
      <v-btn text v-text="'close'" @click="close" />
      <v-btn color="primary" v-text="'Sign Up'" @click="validateForm" />
    </v-card-actions>
  </v-card>
</template>

<script>
import UserServices from "../services/UserServices";

export default {
  name: "SignUp",
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
        counter: value => value.length <= 20 || "Max characters",
        confirmationPasswordRule: () =>
          this.password === this.confirmationPassword || "Not Matching",
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
    validateForm() {
      if (this.$refs.form.validate()) this.createUser();
      else alert("asdd");
    },
    createUser() {
      this.isLoading = true;
      return UserServices.create({
        username: this.username,
        password: this.password,
        email: this.email
      })
        .then(() => this.close())
        .finally(() => (this.isLoading = false));
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>
