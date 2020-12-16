<template>
  <choose-form-template
    :back-action="controller.onBackEvent"
    :continue-action="controller.onSave"
  >
    <v-item-group v-model="controller.selectedAlignement" mandatory>
      <v-row dense>
        <v-col
          v-for="(alignement, i) in controller.alignements"
          :key="alignement.id"
          cols="4"
        >
          <v-hover v-slot:default="{ hover }">
            <v-item v-slot:default="{ active, toggle }">
              <v-card
                class="d-flex align-center"
                height="100"
                :dark="active"
                :elevation="hover ? 12 : 1"
                :class="{ 'on-hover': hover }"
                :color="active ? alignementColors[i] : ''"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    class="subheading flex-grow-1 text-center"
                    v-text="alignement.name"
                    :class="`${!active ? alignementColors[i] : ''}--text`"
                  />
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-hover>
        </v-col>
      </v-row>
    </v-item-group>
    <template #actions>
      <v-btn @click="controller.onSave" v-text="'save'" />
    </template>
  </choose-form-template>
</template>
<script>
// import ChooseFormTemplate from "./ChooseFormTemplate.vue";

export class Alignement {
  id = null;
  name = "";
  description = "";
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

export class ChooseAlignementFormController {
  onContinue = null;

  alignements = [
    new Alignement(1, "Lawful Good", ""),
    new Alignement(2, "Lawful Neutral", ""),
    new Alignement(3, "Lawful Evil", ""),
    new Alignement(4, "Neutral Good", ""),
    new Alignement(5, "Neutral Neutral", ""),
    new Alignement(6, "Neutral Evil", ""),
    new Alignement(7, "Chaotic Good", ""),
    new Alignement(8, "Chaotic Neutral", ""),
    new Alignement(9, "Chaotic Evil", "")
  ];

  selectedAlignement = null;

  onSave = () => {
    console.log(this.alignements[this.selectedAlignement]);
    this.onSaveEvent(this.alignements[this.selectedAlignement].id);
    return this.alignements[this.selectedAlignement];
  };
}

export default {
  props: {
    value: {
      type: Number,
      default: () => 0
    }
  },
  data() {
    const controller = new ChooseAlignementFormController();
    controller.onSaveEvent = alignementId => {
      this.$emit("input", alignementId);
      this.$emit("next");
    };
    controller.onBackEvent = () => this.$emit("back");
    return {
      controller,
      alignementColors: [
        'green',
        'blue',
        'pink',
        'purple',
        'orange',
        'yellow',
        'beige',
        'teal',
        'red'
      ]
    };
  }
};
</script>
