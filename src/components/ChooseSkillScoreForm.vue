<template>
  <choose-form-template
    :back-action="controller.onBackEvent"
    :continue-action="controller.onSaveEvent"
  >
    <v-btn
      color="primary"
      v-text="'change methode'"
      @click="controller.onChangeMethodeClick"
    />
    <v-row>
      <v-col v-if="controller.methodeChoiceIndex === 0" cols="12">
        <skill-score-choice-point-pool
          v-model="controller.skillScores"
          @input="$emit('change', controller.skillScores)"
        />
      </v-col>
      <v-col v-if="controller.methodeChoiceIndex === 1" cols="12">
        <skill-score-choice-standard-array v-model="controller.skillScores" />
      </v-col>
    </v-row>
    <template #actions>
      <v-btn @click="controller.onSaveEvent" v-text="'save'" />
    </template>
    <v-dialog
      v-if="controller.isMethodeSelectionFormVisible"
      v-model="controller.isMethodeSelectionFormVisible"
    >
      <v-card>
        <v-card-title v-text="'Choose a skill score selection methode'" />
        <v-card-text>
          <v-row>
            <v-col
              v-for="(methode, i) in controller.methodeChoices"
              :key="i"
              cols="4"
            >
              <v-card :disabled="i == 2" height="100%">
                <v-card-title v-text="methode.name" />
                <v-card-text v-text="methode.explanation" />
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    text
                    title="select this methode"
                    @click="controller.onSelectMethodeClick(i)"
                  >
                    {{ "select" }}
                    <v-icon right v-html="methode.icon" />
                  </v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </choose-form-template>
</template>
<script>
export class SkillScore {
  name = "";
  score = 0;
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}
export class SkillScores {
  skillScores = [];
  constructor() {
    this.skillScores = [
      new SkillScore("Strenght", 8),
      new SkillScore("Dexterity", 8),
      new SkillScore("Constitution", 8),
      new SkillScore("Intelligence", 8),
      new SkillScore("Widsom", 8),
      new SkillScore("Charisma", 8)
    ];
  }

  reset = () => {
    for (const skillScore of this.skillScores) {
      skillScore.score = 8;
    }
  };
}

import SkillScoreChoicePointPool from "../components/SkillScoreChoicePointPool.vue";
import SkillScoreChoiceStandardArray from "../components/SkillScoreChoiceStandardArray.vue";

export class ChooseSkillScoreFormController {
  isMethodeSelectionFormVisible = true;
  methodeChoiceIndex = 0;
  methodeChoices = [
    {
      index: 1,
      name: "Point Buy",
      icon: "shopping_cart",
      explanation: "you buy point"
    },
    {
      index: 2,
      name: "Standard Array",
      icon: "grid_on",
      explanation: "you choose from previously given points"
    },
    {
      index: 3,
      name: "Dice Roll",
      icon: "casino",
      explanation: "random number"
    }
  ];

  intialSkillScores = [];

  skillScores = [];

  constructor() {
    this.skillScores = new SkillScores();
    this.intialSkillScores = new SkillScores();
  }

  onSelectMethodeClick = index => {
    this.skillScores.reset();
    this.methodeChoiceIndex = index;
    this.isMethodeSelectionFormVisible = false;
  };

  onChangeMethodeClick = () => (this.isMethodeSelectionFormVisible = true);
}

export default {
  components: {
    SkillScoreChoicePointPool,
    SkillScoreChoiceStandardArray
  },
  data() {
    const controller = new ChooseSkillScoreFormController();
    controller.onSaveEvent = () => {
      this.$emit("change", controller.skillScores);
      this.$emit("next");
    };
    controller.onBackEvent = () => this.$emit("back");
    return {
      controller
    };
  }
};
</script>
