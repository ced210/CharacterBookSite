<template>
  <v-card class="mx-auto" width="90%" :loading="isLoading">
    <v-card-title>
      {{ title }}
      <v-spacer />
      <v-btn v-if="backAction" text @click="backAction" v-text="'back'" />
      <v-btn
        v-if="continueAction"
        color="primary"
        text
        @click="continueAction"
        v-text="'continue'"
      />
    </v-card-title>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => null
    },
    isLoading: {
      type: Boolean,
      default: () => false
    },
    backAction: {
      type: Function,
      default: null
    },
    continueAction: {
      type: Function,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>
