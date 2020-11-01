<template>
  <choose-form-template
    title="Choose Your Race Form"
    :continue-action="controller.saveRace"
    :is-loading="controller.isLoading"
  >
    <v-row dense>
      <v-col cols="4" md="2" class="elevation-2">
        <v-list shaped>
          <v-list-item-group v-model="controller.selectedRaceIndex" mandatory>
            <v-list-item
              v-for="(race, i) in controller.races"
              :key="i"
              color="primary"
              @click="controller.onHoverRace(i)"
            >
              <v-list-item-content>
                <v-list-item-title class="text-left" v-text="race.Name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="8" md="10">
        <v-container fluid>
          <v-row v-if="controller.hoverRace" class="text-left">
            <v-col cols="2">
              <v-img
                src="https://www.placecage.com/300/500"
                aspect-ratio="1"
                width="150"
                height="150"
                contain
              />
            </v-col>
            <v-col cols="10">
              <v-row dense>
                <v-col cols="6">
                  <h3 class="text-decoration-underline">Description</h3>
                  <p v-text="controller.hoverRace.Description" />
                </v-col>
                <v-col cols="6">
                  <h3 class="text-decoration-underline">Size</h3>
                  <p v-text="controller.hoverRace.SizeDescription" />
                </v-col>
                <v-col cols="6">
                  <h3 class="text-decoration-underline">Age</h3>
                  <p v-text="controller.hoverRace.AgeDescription" />
                </v-col>
                <v-col cols="6">
                  <h3 class="text-decoration-underline">Speed</h3>
                  <p v-text="controller.hoverRace.SpeedDescription" />
                </v-col>
                <v-col cols="6">
                  <h3 class="text-decoration-underline">Languages</h3>
                  <p v-text="controller.hoverRace.LanguageDescription" />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-btn-toggle v-model="controller.isGenderMale">
                <v-btn :value="true" v-text="'Male'" />
                <v-btn :value="false" v-text="'Female'" />
              </v-btn-toggle>
            </v-col>
            <v-col cols="8">
              <v-slider
                v-model="controller.age"
                label="Age"
                class="align-center"
                :max="controller.hoverRace.maxAge"
                :min="controller.hoverRace.minAge"
                hide-details
                thumb-label="always"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </choose-form-template>
</template>
<script>
import RaceDataService from "../services/RaceDataService";

export class ChooseRaceFormController {
  hoverRace = null;

  selectedRaceIndex = 0;

  isLoading = false;

  isGenderMale = true;

  age = 0;

  constructor() {
    this.getRaces().then(() => this.onHoverRace(0));
  }

  getRaces = () => {
    this.isLoading = true;
    return RaceDataService.getAll()
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.races = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => (this.isLoading = false));
  };

  onHoverRace = index => {
    this.hoverRace = this.races[index];
  };

  saveRace = () => {
    this.onSaveEvent(this.races[this.selectedRaceIndex].id);
  };
}

export default {
  props: {
    value: {
      type: Number,
      default: () => ({})
    }
  },
  data() {
    const controller = new ChooseRaceFormController();
    controller.onSaveEvent = raceId => {
      this.$emit("input", raceId);
      this.$emit("change-gender", this.controller.isGenderMale);
      this.$emit("change-age", this.controller.age);
      this.$emit("next");
    };
    return { controller };
  }
};
</script>
