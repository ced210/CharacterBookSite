<template>
  <v-stepper
    v-model="step"
    non-linear
    :vertical="$vuetify.breakpoint.smAndDown"
  >
    <v-stepper-header v-if="!$vuetify.breakpoint.smAndDown">
      <v-stepper-step editable step="1">Chose Your Race</v-stepper-step>
      <v-divider />
      <v-stepper-step editable step="2">Choose Your Class</v-stepper-step>
      <v-divider />
      <v-stepper-step step="3" editable>Choose Your Background</v-stepper-step>
      <v-divider />
      <v-stepper-step step="4" editable>Choose Your Alignement</v-stepper-step>
      <v-divider />
      <v-stepper-step step="5" editable>Name Your Character</v-stepper-step>
    </v-stepper-header>
    <div v-else>
      <v-stepper-step editable step="1">Chose Your Race</v-stepper-step>
      <v-stepper-content step="1">
        <choose-race-form @save="onRaceSave" />
      </v-stepper-content>
      <v-stepper-step editable step="2">Choose Your Class</v-stepper-step>
      <v-stepper-content step="2">
        <choose-class-form @save="onClassSave" />
      </v-stepper-content>
      <v-stepper-step editable step="3">Choose Your Background</v-stepper-step>
      <v-stepper-content step="3">
        <v-card>
          <v-card-title>Choose Your Background</v-card-title>
        </v-card>
      </v-stepper-content>
      <v-stepper-step step="4" editable>Choose Your Alignement</v-stepper-step>
      <v-stepper-content step="4">
        <choose-alignement-form @save="onAlignementSave" />
      </v-stepper-content>
      <v-stepper-step step="5" editable>Name Your Character</v-stepper-step>
      <v-stepper-content step="5">
        <v-card>
          <v-card-title>Name Your Character</v-card-title>
        </v-card>
      </v-stepper-content>
    </div>
    <v-stepper-items v-if="!$vuetify.breakpoint.smAndDown">
      <v-stepper-content step="1">
        <choose-race-form @save="onRaceSave" />
      </v-stepper-content>
      <v-stepper-content step="2">
        <choose-class-form @save="onClassSave" />
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card>
          <v-card-title>Choose Your Background</v-card-title>
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="4">
        <choose-alignement-form @save="onAlignementSave" />
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card>
          <v-card-title>Name Your Character</v-card-title>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import ChooseRaceForm from "../components/ChooseRaceForm.vue";
import ChooseClassForm from "../components/ChooseClassForm.vue";
import ChooseAlignementForm from "../components/ChooseAlignementForm.vue";

export default {
  components: {
    ChooseRaceForm,
    ChooseClassForm,
    ChooseAlignementForm
  },
  name: "CharacterCreation",
  data() {
    return {
      step: 1
    };
  },
  methods: {
    onAlignementSave() {
      alert("oh hi mark");
    },
    onRaceSave(raceId) {
      alert("oh hi mark: " + raceId);
    },
    onClassSave(classId) {
      alert("oh hi mark: " + classId);
    }
  }
};
</script>
