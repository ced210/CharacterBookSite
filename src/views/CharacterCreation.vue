<template>
  <v-stepper
    v-model="step"
    non-linear
    :vertical="$vuetify.breakpoint.smAndDown"
  >
    <div v-if="isDev">
      {{
        "raceId " +
          raceId +
          "isGenderMale " +
          isGenderMale +
          " classId " +
          classId +
          " alignementId  " +
          alignementId +
          " name " +
          name +
          "skills scores " +
          skillScores
      }}
    </div>
    <v-stepper-header v-if="!$vuetify.breakpoint.smAndDown">
      <v-stepper-step editable step="1">Race</v-stepper-step>
      <v-divider />
      <v-stepper-step editable step="2">Class</v-stepper-step>
      <v-divider />
      <v-stepper-step editable step="3">Skill Score</v-stepper-step>
      <v-divider />
      <v-stepper-step step="4" editable>Alignement</v-stepper-step>
      <v-divider />
      <v-stepper-step step="5" editable>Name Your Character</v-stepper-step>
    </v-stepper-header>
    <div v-else>
      <v-stepper-step editable step="1">Race</v-stepper-step>
      <v-stepper-content step="1">
        <choose-race-form
          v-model="raceId"
          @change-gender="onChangeGender"
          @change-age="onChangeAge"
          @next="onNextStep"
          @back="onBackStep"
        />
      </v-stepper-content>
      <v-stepper-step editable step="2">Class</v-stepper-step>
      <v-stepper-content step="2">
        <choose-class-form
          v-model="classId"
          @next="onNextStep"
          @back="onBackStep"
        />
      </v-stepper-content>
      <v-stepper-step editable step="3">Skill Score</v-stepper-step>
      <v-stepper-content step="3">
        <choose-skill-score-form
          v-if="step == 3"
          v-model="skillScores"
          @next="onNextStep"
          @back="onBackStep"
        />
      </v-stepper-content>
      <v-stepper-step step="4" editable>Alignement</v-stepper-step>
      <v-stepper-content step="4">
        <choose-alignement-form
          v-model="alignementId"
          @next="onNextStep"
          @back="onBackStep"
        />
      </v-stepper-content>
      <v-stepper-step step="5" editable>Name Your Character</v-stepper-step>
      <v-stepper-content step="6">
        <name-character
          v-model="name"
          @create="onCreateCharacter"
          @next="onNextStep"
          @back="onBackStep"
        />
      </v-stepper-content>
    </div>
    <v-stepper-items v-if="!$vuetify.breakpoint.smAndDown">
      <v-stepper-content step="1">
        <choose-race-form
          v-model="raceId"
          @change-gender="onChangeGender"
          @change-age="onChangeAge"
          @next="onNextStep"
          @back="onBackStep"
        />
      </v-stepper-content>
      <v-stepper-content step="2">
        <choose-class-form
          v-model="classId"
          @next="onNextStep"
          @back="onBackStep"
        />
      </v-stepper-content>
      <v-stepper-content step="3">
        <choose-skill-score-form
          v-if="step == 3"
          v-model="skillScores"
          @next="onNextStep"
          @back="onBackStep"
        />
      </v-stepper-content>
      <v-stepper-content step="4">
        <choose-alignement-form
          v-model="alignementId"
          @next="onNextStep"
          @back="onBackStep"
        />
      </v-stepper-content>
      <v-stepper-content step="5">
        <name-character
          v-model="name"
          @create="onCreateCharacter"
          @next="onNextStep"
          @back="onBackStep"
        />
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
import ChooseSkillScoreForm from "../components/ChooseSkillScoreForm.vue";

export default {
  components: {
    ChooseRaceForm,
    ChooseClassForm,
    ChooseAlignementForm,
    NameCharacter,
    ChooseSkillScoreForm
  },
  name: "CharacterCreation",
  data() {
    return {
      step: 1,
      name: null,
      raceId: 0,
      classId: 0,
      alignementId: 0,
      isGenderMale: true,
      age: 0,
      skillScores: [],
      isDev: localStorage.isDeveloppementMode
    };
  },
  methods: {
    onNextStep() {
      ++this.step;
    },
    onBackStep() {
      --this.step;
    },
    onChangeGender(isGenderMale) {
      this.isGenderMale = isGenderMale;
    },
    onChangeAge(age) {
      this.age = age;
    },
    onCreateCharacter() {
      console.log(this.skillScores);
      CharacterServices.save({
        userId: localStorage.userId,
        name: this.name,
        raceId: this.raceId,
        classId: this.classId,
        alignementId: this.alignementId,
        isGenderMale: this.isGenderMale,
        age: this.age,
        strenghtScore: this.skillScores.skillScores.find(
          x => x.name === "Strenght"
        ).score,
        constitutionScore: this.skillScores.skillScores.find(
          x => x.name === "Constitution"
        ).score,
        dexterityScrore: this.skillScores.skillScores.find(
          x => x.name === "Dexterity"
        ).score,
        intelligenceScore: this.skillScores.skillScores.find(
          x => x.name === "Intelligence"
        ).score,
        widsomScore: this.skillScores.skillScores.find(x => x.name === "Widsom")
          .score,
        charismaScore: this.skillScores.skillScores.find(
          x => x.name === "Charisma"
        ).score
      })
        .then(() => this.$router.push("/characters"))
        .catch(error => console.error(error));
    }
  }
};
</script>
