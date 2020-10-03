<template>
  <choose-form-template :back-action="controller.onBack" :continue-action="controller.onSave">
    <v-item-group v-model="controller.selectedAlignement" mandatory>
      <v-row dense>
        <v-col v-for="(alignement, index) in controller.alignements" :key="index" cols="4">
          <v-hover v-slot:default="{ hover }">
            <v-item v-slot:default="{ active, toggle }">
              <v-card
                class="d-flex align-center"
                height="100"
                :dark="active"
                :elevation="hover ? 12 : 1"
                :class="{ 'on-hover': hover }"
                :color="active ? 'primary' : ''"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div class="subheading flex-grow-1 text-center" v-text="alignement.name" />
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
    new Alignement(1, "Lawful Neutral", ""),
    new Alignement(1, "Lawful Evil", ""),
    new Alignement(1, "Neutral Good", ""),
    new Alignement(1, "Neutral Neutral", ""),
    new Alignement(1, "Neutral Evil", ""),
    new Alignement(1, "Chaotic Good", ""),
    new Alignement(1, "Chaotic Neutral", ""),
    new Alignement(1, "Chaotic Evil", "")
  ];

  selectedAlignement = null;

  onSave = () => {
    console.log(this.alignements[this.selectedAlignement]);
    this.onSaveEvent();
    return this.alignements[this.selectedAlignement];
  };
}

export default {
  data() {
    const controller = new ChooseAlignementFormController();
    controller.onSaveEvent = () => this.$emit("save");
    return { controller };
  }
};
</script>
