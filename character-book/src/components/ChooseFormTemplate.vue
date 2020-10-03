<template>
  <v-card class="mx-auto" width="90%">
    <v-card-title>
      {{ title }}
      <v-spacer />
      <v-btn @click="backAction" v-text="'back'" />
      <v-btn color="primary" @click="continueAction" v-text="'continue'" />
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
    backAction: {
      type: Function,
      default: () => {}
    },
    continueAction: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {};
  }
};
</script>