<template>
  <choose-form-template
    title="Choose Your Race Form"
    :continue-action="controller.saveRace"
    :is-loading="controller.isLoading"
  >
    <choose-list-details
      v-if="controller.races.length > 0"
      v-model="controller.selectedRaceIndex"
      :items="controller.races"
    >
      <template #listItem="{ item }">
        {{ item.Name }}
      </template>
      <template #content="{ selectedItem }">
        <v-row v-if="selectedItem" dense class="text-left">
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
                <p v-text="selectedItem.Description" />
              </v-col>
              <v-col cols="6">
                <h3 class="text-decoration-underline">Size</h3>
                <p v-text="selectedItem.SizeDescription" />
              </v-col>
              <v-col cols="6">
                <h3 class="text-decoration-underline">Age</h3>
                <p v-text="selectedItem.AgeDescription" />
              </v-col>
              <v-col cols="6">
                <h3 class="text-decoration-underline">Speed</h3>
                <p v-text="selectedItem.SpeedDescription" />
              </v-col>
              <v-col cols="6">
                <h3 class="text-decoration-underline">Languages</h3>
                <p v-text="selectedItem.LanguageDescription" />
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
              :max="selectedItem.maxAge"
              :min="selectedItem.minAge"
              hide-details
              thumb-label="always"
            />
          </v-col>
        </v-row>
      </template>
    </choose-list-details>
  </choose-form-template>
</template>
<script>
import RaceDataService from "../services/RaceDataService";
import ChooseListDetails from "./ChooseListDetails.vue";

export class ChooseRaceFormController {
  selectedRaceIndex = 0;

  races = [];

  isLoading = false;

  isGenderMale = true;

  age = 0;

  constructor() {
    this.getRaces();
  }

  getRaces = () => {
    this.isLoading = true;
    return RaceDataService.getAll()
      .then(response => {
        this.races = response.data;
        this.selectedRaceIndex = 0;
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => (this.isLoading = false));
  };

  saveRace = () => {
    this.onSaveEvent(this.races[this.selectedRaceIndex].id);
  };
}

export default {
  components: {
    ChooseListDetails
  },
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
