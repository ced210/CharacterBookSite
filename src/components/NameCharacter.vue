<template>
  <choose-form-template title="Name Yout Character" :back-action="onBack">
    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-text-field
          v-model="name"
          solo
          shaped
          prepend-inner-icon="edit"
          placeholder="type the name..."
          @input="onSave"
        />
      </v-col>
      <v-col cols="12">
        <v-btn
          x-large
          class="btn btn-lg btn-link button-glow"
          @click="onCreateClick"
          v-text="'Create Character'"
        />
      </v-col>
    </v-row>
  </choose-form-template>
</template>
<style scoped>
button {
  margin: 12px;
}
.btn-default {
  background-color: #000;
  color: #ffe100;
}
.btn-primary {
  background-color: #ffe100;
  color: #000;
}

@keyframes glowing {
  0% {
    box-shadow: 0 0 -10px #c4a300;
  }
  40% {
    box-shadow: 0 0 50px #c4a300;
    color: #c4a300;
  }
  60% {
    box-shadow: 0 0 50px #c4a300;
    color: #c4a300;
  }
  100% {
    box-shadow: 0 0 -10px #c4a300;
  }
}

.button-glow {
  animation: glowing 3000ms infinite;
}
</style>
<script>
export default {
  props: {
    value: {
      type: String,
      default: () => ({})
    }
  },
  data() {
    return {
      name: this.value
    };
  },
  methods: {
    onBack() {
      return;
    },
    onSave() {
      this.$emit("input", this.name);
    },
    onCreateClick() {
      this.$emit("create");
    }
  }
};
</script>
