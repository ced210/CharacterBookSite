<template>
  <v-row>
    <v-col v-for="(skill, i) in skills" :key="i" md="2" cols="12">
      <v-sheet elevation="3" rounded width="15vw">
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
          <v-col cols="12">
            <v-btn icon small>
              <v-icon
                v-text="'remove'"
                @click="skill.score -= substractValue(skill.score)"
              />
            </v-btn>
            <v-btn icon small>
              <v-icon
                v-text="'add'"
                @click="skill.score += addValue(skill.score)"
              />
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
    <v-col align-self="center">
      {{ "Point Pool: " }}
      <span class="text-decoration-underline font-weight-bold">
        {{ pointsPool }}
      </span>
    </v-col>
  </v-row>
</template>
<script>
class SkillScore {
  name = "";
  score = 0;
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}
const skillsMock = [
  new SkillScore("Strenght", 8),
  new SkillScore("Dexterity", 8),
  new SkillScore("Constitution", 8),
  new SkillScore("Intelligence", 8),
  new SkillScore("Widsom", 8),
  new SkillScore("Charisma", 8)
];
export default {
  props: {
    value: {
      type: Array,
      default: () => skillsMock
    }
  },
  data() {
    return {
      pointsPool: 27,
      skills: this.value
    };
  },
  methods: {
    addValue(score) {
      if (
        this.pointsPool === 0 ||
        score === 15 ||
        (score >= 13 && this.pointsPool - 2 < 0)
      )
        return 0;
      if (score >= 13) this.pointsPool -= 2;
      else this.pointsPool -= 1;
      return 1;
    },
    substractValue(score) {
      if (score === 1) return 0;
      if (score > 13) this.pointsPool += 2;
      else this.pointsPool += 1;
      return 1;
    },
    getScoreModifier(score) {
      const mod = Math.floor((score - 10) / 2);
      return (mod >= 0 ? "+" : "") + mod;
    }
  }
};
</script>
