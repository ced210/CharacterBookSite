<template>
  <v-row>
    <v-col v-for="(skill, i) in skills.skillScores" :key="i" md="2" cols="12">
      <v-menu offset-y close-on-content-click bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-sheet elevation="3" rounded width="15vw" v-bind="attrs" v-on="on">
            <v-row no-gutters>
              <v-col cols="12" align-self="center">
                <span
                  :class="$vuetify.breakpoint.smAndDown ? 'caption' : 'body-2'"
                  v-text="skill.name"
                />
              </v-col>
              <v-col cols="12" align-self="center">
                {{ skill.score + getScoreModifier(skill.score) }}
              </v-col>
            </v-row>
          </v-sheet>
        </template>
        <v-list>
          <v-list-item dense @click="clearPoint(skill)">
            <v-list-item-title v-text="'clear'" />
          </v-list-item>
          <v-list-item v-for="(point, i) in points" :key="i" dense @click="onSelectPoint(skill, point)">
            <v-list-item-title v-text="point" />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
    <v-col align-self="center">
      {{ "Points Left: " }}
      <span class="text-decoration-underline font-weight-bold">
        {{ points }}
      </span>
    </v-col>
  </v-row>
</template>
<script>
import { SkillScores } from "../components/ChooseSkillScoreForm.vue";
export default {
  props: {
    value: {
      type: SkillScores,
      default: () => new SkillScores()
    }
  },
  data() {
    return {
      points: [15, 14, 13, 12, 10, 8],
      skills: this.value
    };
  },
  methods: {
    onSelectPoint(skill, point) {
      const currentScoreIndex = this.skills.skillScores.findIndex(s => s.name == skill.name);
      if (this.skills.skillScores[currentScoreIndex].score != 0) {
        this.points.push(this.skills.skillScores[currentScoreIndex].score);
      }
      this.skills.skillScores[currentScoreIndex].score = point;
      const pointIndex = this.points.findIndex(p => p === point);
      this.points.splice(pointIndex, 1);
    },
    clearPoint(skill) {
      const currentScoreIndex = this.skills.skillScores.findIndex(s => s.name == skill.name);
      if (this.skills.skillScores[currentScoreIndex].score != 0) {
        this.points.push(this.skills.skillScores[currentScoreIndex].score);
      }
      this.skills.skillScores[currentScoreIndex].score = 0;
    },
    getScoreModifier(score) {
      const mod = Math.floor((score - 10) / 2);
      return (mod >= 0 ? "+" : "") + mod;
    }
  }
};
</script>
