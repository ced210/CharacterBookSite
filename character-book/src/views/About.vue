<template>
  <div class="about">
    <h1>le pourquoi que j'ai fait ca, c'est ca que tu peut mettre</h1>
    <p>{{ races }}</p>
  </div>
</template>
<script>
import RaceDataService from "../services/RaceDataService";

export default {
  data() {
    return {
      races: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTutorials() {
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
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    removeAllTutorials() {
      RaceDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      RaceDataService.findByTitle(this.title)
        .then(response => {
          this.races = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>
