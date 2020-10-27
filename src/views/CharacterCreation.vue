<template>
  <v-stepper
    v-model="step"
    non-linear
    :vertical="$vuetify.breakpoint.smAndDown"
  >
  {{ 'raceId '+ raceId + ' classId '+ classId + ' alignementId  '+ alignementId + ' name '+ name}}
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
        <choose-race-form v-model="raceId" />
      </v-stepper-content>
      <v-stepper-step editable step="2">Choose Your Class</v-stepper-step>
      <v-stepper-content step="2">
        <choose-class-form v-model="classId" />
      </v-stepper-content>
      <v-stepper-step editable step="3">Choose Your Background</v-stepper-step>
      <v-stepper-content step="3">
        <v-card>
          <v-card-title>Choose Your Background</v-card-title>
          <v-text-field v-text="'Work in progress...'" />
        </v-card>
      </v-stepper-content>
      <v-stepper-step step="4" editable>Choose Your Alignement</v-stepper-step>
      <v-stepper-content step="4">
        <choose-alignement-form v-model="alignementId" />
      </v-stepper-content>
      <v-stepper-step step="5" editable>Name Your Character</v-stepper-step>
      <v-stepper-content step="5">
        <name-character v-model="name" />
      </v-stepper-content>
    </div>
    <v-stepper-items v-if="!$vuetify.breakpoint.smAndDown">
      <v-stepper-content step="1">
        <choose-race-form v-model="raceId" />
      </v-stepper-content>
      <v-stepper-content step="2">
        <choose-class-form v-model="classId" />
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card>
          <v-card-title>Choose Your Background</v-card-title>
          <v-text-field v-text="'Work in progress...'" />
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="4">
        <choose-alignement-form v-model="alignementId" />
      </v-stepper-content>
      <v-stepper-content step="5">
        <name-character v-model="name" @create="onCreateCharacter" />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import ChooseRaceForm from "../components/ChooseRaceForm.vue";
import ChooseClassForm from "../components/ChooseClassForm.vue";
import ChooseAlignementForm from "../components/ChooseAlignementForm.vue";
import NameCharacter from "../components/NameCharacter.vue";
import CharacterServices from "../services/CharacterServices";

export default {
  components: {
    ChooseRaceForm,
    ChooseClassForm,
    ChooseAlignementForm,
    NameCharacter
  },
  name: "CharacterCreation",
  data() {
    return {
      step: 1,
      name: null,
      raceId: 0,
      classId: 0,
      alignementId: 0
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
    },
    onCreateCharacter() {
      console.log(localStorage.userId);
      CharacterServices.create({
        userId: localStorage.userId,
        name: this.name,
        raceId: this.raceId,
        classId: this.classId,
        alignementId: this.alignementId
      })
        .then(() => this.$router.push("/characters"))
        .catch(error => console.error(error));
    }
  }
};
</script>
