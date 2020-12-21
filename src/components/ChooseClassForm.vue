<template>
  <choose-form-template
    title="Choose Your Class Form"
    :back-action="controller.onBackEvent"
    :continue-action="controller.saveClass"
  >
    <choose-list-details
      v-if="controller.classes.length > 0"
      v-model="controller.selectedClassIndex"
      :items="controller.classes"
    >
      <template #listItem="{ item }">
        {{ item.name }}
      </template>
      <template #content="{ selectedItem }">
        <v-row v-if="selectedItem" dense class="text-left">
          <v-col lg="2">
            <v-img
              src="https://www.placecage.com/150/150"
              aspect-ratio="1"
              width="150"
              height="150"
              contain
            />
          </v-col>
          <v-col cols="10">
            <v-row dense>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Name</h3>
                <p v-text="selectedItem.name" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>
    </choose-list-details>
  </choose-form-template>
</template>
<script>
import ClassDataService from "../services/ClassDataService";
import ChooseListDetails from "./ChooseListDetails.vue";

export class ChooseClassFormController {
  classes = [];

  selectedClassIndex = 0;

  constructor() {
    this.getClasses();
  }

  getClasses = () =>
    ClassDataService.getAll()
      .then(response => {
        this.classes = response.data;
      })
      .catch(e => console.log(e));

  saveClass = () => {
    this.onSaveEvent(this.classes[this.selectedClassIndex].id);
  };
}

export default {
  components: {
    ChooseListDetails
  },
  props: {
    value: {
      type: Number,
      default: () => null
    }
  },
  data() {
    const controller = new ChooseClassFormController();
    controller.onSaveEvent = classId => {
      this.$emit("input", classId);
      this.$emit("next");
    };
    controller.onBackEvent = () => this.$emit("back");
    return { controller };
  }
};
</script>
