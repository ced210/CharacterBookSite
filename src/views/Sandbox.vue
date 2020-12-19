<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <skill-score-choice-point-pool />
      </v-col>
      <v-col cols="12">
        <skill-score-choice-standard-array />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SkillScoreChoicePointPool from "../components/SkillScoreChoicePointPool.vue";
import SkillScoreChoiceStandardArray from "../components/SkillScoreChoiceStandardArray.vue";
export default {
  components: {
    SkillScoreChoicePointPool,
    SkillScoreChoiceStandardArray
  },
  data() {
    return {};
  }
};
</script>
