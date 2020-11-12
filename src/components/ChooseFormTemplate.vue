<template>
  <v-card class="mx-auto" width="100%" :loading="isLoading">
    <v-card-title>
      {{ title }}
      <v-spacer />
      <template v-if="!$vuetify.breakpoint.smAndDown">
        <v-btn v-if="backAction" text @click="backAction">
          <v-icon v-text="'keyboard_arrow_left'" />
          {{ "back" }}
        </v-btn>
        <v-btn
          v-if="continueAction"
          color="primary"
          text
          @click="continueAction"
        >
          {{ "continue" }}
          <v-icon v-text="'keyboard_arrow_right'" />
        </v-btn>
      </template>
    </v-card-title>
    <v-card-text>
      <slot />
    </v-card-text>
    <v-card-actions v-if="$vuetify.breakpoint.smAndDown">
      <v-spacer />
      <v-btn v-if="backAction" text @click="backAction">
        <v-icon v-text="'keyboard_arrow_left'" />
        {{ "back" }}
      </v-btn>
      <v-btn v-if="continueAction" color="primary" text @click="continueAction">
        {{ "continue" }}
        <v-icon v-text="'keyboard_arrow_right'" />
      </v-btn>
    </v-card-actions>
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
