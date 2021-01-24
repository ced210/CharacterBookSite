<template>
  <v-card :loading="isLoading">
    <v-card-title>
      <h3>{{ title }}</h3>
      <v-spacer />
      <slot name="title-actions" />
      <v-btn v-if="closeFunc" icon @click="closeFunc">
        <v-icon dark v-text="'close'" />
      </v-btn>
    </v-card-title>
    <v-card-text>
      <slot name="body" />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <slot name="actions" />
      <v-btn
        v-if="saveFunc"
        color="primary"
        outlined
        v-text="'save'"
        @click="saveFunc"
      />
      <v-btn v-if="closeFunc" outlined v-text="'close'" @click="closeFunc" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    closeFunc: {
      type: Function,
      default: null
    },
    saveFunc: {
      type: Function,
      default: null
    },
    isLoading: {
      type: Boolean,
      default: () => false
    },
    title: {
      type: String,
      default: () => ""
    }
  }
};
</script>
