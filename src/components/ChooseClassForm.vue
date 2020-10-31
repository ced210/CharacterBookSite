<template>
  <choose-form-template
    title="Choose Your Class Form"
    :back-action="controller.onBackEvent"
    :continue-action="controller.saveClass"
  >
    <v-row dense>
      <v-col cols="4" md="2">
        <v-list shaped>
          <v-list-item-group v-model="controller.selectedClassIndex" mandatory>
            <v-list-item
              v-for="(c, i) in controller.classes"
              :key="i"
              color="primary"
              @click="controller.onClickClass(i)"
            >
              <v-list-item-content>
                <v-list-item-title class="text-left" v-text="c.Name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="8" md="10" class="elevation-2">
        <v-row v-if="controller.hoverClass" class="text-left">
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
                <p v-text="controller.hoverClass.Name" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </choose-form-template>
</template>
<script>
import ClassDataService from "../services/ClassDataService";

export class ChooseClassFormController {
  hoverClass = null;

  selectedClassIndex = 0;

  constructor() {
    this.getClasses().then(() => this.onClickClass(0));
  }

  getClasses = () =>
    ClassDataService.getAll()
      .then(response => {
        this.classes = response.data;
      })
      .catch(e => console.log(e));

  onClickClass = index => {
    this.hoverClass = this.classes[index];
  };

  saveClass = () => {
    console.log(this.selectedClassIndex);
    console.log(this.classes[this.selectedClassIndex]);
    this.onSaveEvent(this.classes[this.selectedClassIndex].id);
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
