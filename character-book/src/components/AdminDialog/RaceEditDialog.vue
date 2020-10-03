<template>
  <v-card>
    <v-card-title>Edit Race</v-card-title>
    <v-card-text>
      <v-text-field v-model="controller.race.Name" label="Name" />
      <v-textarea v-model="controller.race.Description" label="Description" />
      <v-text-field v-model="controller.race.SpeedDescription" label="SpeedDescription" />
      <v-text-field v-model="controller.race.SizeDescription" label="SizeDescription" />
      <v-text-field v-model="controller.race.AgeDescription" label="AgeDescription" />
      <v-text-field v-model="controller.race.LanguageDescription" label="LanguageDescription" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="controller.onSave" text>Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import RaceDataService from "../../services/RaceDataService";

export class RaceEditDialog {
  raceId = null;

  race = null;

  constructor(raceId) {
    this.raceId = raceId;
    this.getRace(this.raceId);
  }

  getRace = id => {
    RaceDataService.get(id)
      .then(response => {
        this.race = response.data;
        console.log(this.race);
      })
      .catch(e => {
        console.log(e);
      });
  };

  onSave = () => {
    if (this.raceId) return this.updateRace();
    return this.saveRace();
  };

  saveRace = () => {
    RaceDataService.create(this.race)
      .then(response => {
        this.race = response.data;
        console.log(this.race);
      })
      .catch(e => {
        console.log(e);
      });
  };

  updateRace = () => {
    RaceDataService.update(this.raceId, this.race)
      .then(response => {
        this.race = response.data;
        console.log(this.race);
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export default {
  props: {
    raceId: {
      type: Number,
      default: () => null
    }
  },
  data() {
    const controller = new RaceEditDialog(this.raceId);
    return {
      controller
    };
  }
};
</script>
