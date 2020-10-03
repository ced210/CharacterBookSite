<template>
  <choose-form-template
    title="Choose Your Race Form"
    :back-action="controller.onBack"
    :continue-action="controller.saveRace"
  >
    <v-row dense>
      <v-col lg="2">
        <v-list>
          <v-list-item-group v-model="controller.selectedRaceIndex" mandatory>
            <v-list-item
              v-for="(race, i) in controller.races"
              :key="i"
              :class="
                `elevation-${controller.selectedRaceIndex === i ? 10 : 0}`
              "
              @click="controller.onHoverRace(i)"
            >
              <v-list-item-content>
                <v-list-item-title class="text-left" v-text="race.Name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <!-- style="background-color:#E0E0E0" -->
      <v-col lg="10" class="elevation-10">
        <v-row v-if="controller.hoverRace" class="text-left">
          <v-col lg="2">
            <v-img
              src="https://www.placecage.com/150/150"
              aspect-ratio="1"
              width="150"
              height="150"
              contain
            />
          </v-col>
          <v-col lg="10">
            <v-row dense>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Description</h3>
                <p v-text="controller.hoverRace.Description"></p>
              </v-col>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Size</h3>
                <p>{{ controller.hoverRace.SizeDescription }}</p>
              </v-col>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Age</h3>
                <p>{{ controller.hoverRace.AgeDescription }}</p>
              </v-col>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Speed</h3>
                <p>{{ controller.hoverRace.SpeedDescription }}</p>
              </v-col>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Languages</h3>
                <p>{{ controller.hoverRace.LanguageDescription }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </choose-form-template>
</template>
<script>
export class Ability {}

export class AbilityScoreIncrease {
  value = 0;

  ability = null;
}

export class Size {}

export class Races {
  name = null;

  description = null;

  age = null;

  size = null;

  speed = null;

  age = null;

  abilityScoreIncreases = [];

  subRaces = [];

  languages = null;
}

export class RacialTrait {}

import RaceDataService from "../services/RaceDataService";

export class ChooseRaceFormController {
  hoverRace = null;

  selectedRaceIndex = 0;

  constructor() {
    this.getRaces().then(() => this.onHoverRace(0));
  }

  getRaces = () =>
    RaceDataService.getAll()
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.races = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

  onHoverRace = index => {
    this.hoverRace = this.races[index];
  };

  saveRace = () => {
    console.log(this.selectedRaceIndex);
    console.log(this.races[this.selectedRaceIndex]);
    this.onSaveEvent(this.races[this.selectedRaceIndex].id);
  };
}

export default {
  data() {
    const controller = new ChooseRaceFormController();
    controller.onSaveEvent = raceId => this.$emit("save", raceId);
    return { controller };
  }
};
</script>
