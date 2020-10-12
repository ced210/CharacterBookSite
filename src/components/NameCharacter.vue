<template>
  <choose-form-template
    title="Name Yout Character"
    :back-action="onBack"
    :continue-action="onSave"
  >
    <v-row align="center" justify="center">
      <v-col lg="8">
        <v-text-field
          v-model="value"
          solo
          shaped
          prepend-inner-icon="edit"
          placeholder="type the name..."
        />
      </v-col>
    </v-row>
  </choose-form-template>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: () => ({})
    }
  },
  data() {
    return { };
  },
  methods: {
    onBack() {
      return;
    },
    onSave() {
      this.$emit("input", this.value);
    }
  }
};
</script>
