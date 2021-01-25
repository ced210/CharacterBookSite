<template>
  <div v-if="controller.characters">
    <v-slide-group
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="model"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="(character, index) in controller.characters"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'grey lighten-3' : 'grey lighten-5'"
          :width="$vuetify.breakpoint.smAndDown ? '60vw' : '50vw'"
          class="mx-2"
          height="80vh"
          shaped
          @click="toggle"
        >
          <v-card-title>{{ character.name }}</v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="6" class="pt-2 pr-2">
                <v-avatar size="100">
                  <v-img src="https://www.placecage.com/200/200" />
                </v-avatar>
              </v-col>
              <v-col cols="6">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-text-field
                      v-model="character.race.name"
                      label="Race"
                      readonly
                      hide-details
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="character.class.name"
                      label="Class"
                      readonly
                      hide-details
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" class="my-2">
                <!-- <v-toolbar color="transparent" flat dense> -->
                <v-chip class="mr-1" outlined v-text="'Lvl: 4'" />
                <v-chip outlined v-text="'AC: 12'" />
                <v-chip class="ml-1" outlined v-text="'HP: 14'" />
                <!-- </v-toolbar> -->
              </v-col>
              <v-col cols="4" md="12">
                <v-row dense>
                  <v-col cols="12" md="2">
                    <v-text-field
                      :value="'8 - 1'"
                      label="Strength"
                      readonly
                      hide-details
                      dense
                      round
                      filled
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field
                      :value="'16 + 2'"
                      label="Dexterity"
                      readonly
                      hide-details
                      dense
                      round
                      filled
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field
                      :value="'10 + 0'"
                      label="Constitution"
                      readonly
                      hide-details
                      dense
                      round
                      filled
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field
                      :value="'19 + 4'"
                      label="Inteligence"
                      readonly
                      hide-details
                      dense
                      round
                      filled
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field
                      :value="'14 + 2'"
                      label="Wisdom"
                      readonly
                      hide-details
                      dense
                      round
                      filled
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field
                      :value="'10 + 0'"
                      label="Charisma"
                      readonly
                      hide-details
                      dense
                      round
                      filled
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="8">
                <h3 class="text-decoration-underline">Proficiencies:</h3>
                <p v-text="'Survival'" />
                <p v-text="'Deception'" />
                <p v-text="'Nature'" />
                <p v-text="'Acrobatic'" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <v-container v-else>
      <v-row>
        <v-col
          v-for="(character, index) in controller.characters"
          :key="index"
          md="6"
        >
          <v-card width="50vw" class="mx-2" height="50vh" shaped>
            <v-card-title>{{ character.name }}</v-card-title>
            <v-card-text>
              <v-row no-gutters>
                <v-col cols="4" class="pt-2 pr-2">
                  <v-avatar size="100">
                    <v-img src="https://www.placecage.com/200/200" />
                  </v-avatar>
                </v-col>
                <v-col cols="7">
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-text-field
                        v-model="character.race.name"
                        label="Race"
                        readonly
                        hide-details
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="character.class.name"
                        label="Class"
                        readonly
                        hide-details
                      />
                    </v-col>
                    <v-col cols="12" class="my-2">
                      <v-chip class="mr-1" outlined v-text="'Lvl: 4'" />
                      <v-chip outlined v-text="'AC: 12'" />
                      <v-chip class="ml-1" outlined v-text="'HP: 14'" />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="4" md="12">
                  <v-row dense>
                    <v-col cols="12" md="2">
                      <v-text-field
                        :value="character.strenghtScore"
                        label="Strength"
                        readonly
                        hide-details
                        dense
                        round
                        filled
                      />
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        :value="character.dexterityScrore"
                        label="Dexterity"
                        readonly
                        hide-details
                        dense
                        round
                        filled
                      />
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        :value="character.constitutionScore"
                        label="Constitution"
                        readonly
                        hide-details
                        dense
                        round
                        filled
                      />
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        :value="character.intelligenceScore"
                        label="Inteligence"
                        readonly
                        hide-details
                        dense
                        round
                        filled
                      />
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        :value="controller.formatSkillScore(character.widsomScore)"
                        label="Wisdom"
                        readonly
                        hide-details
                        dense
                        round
                        filled
                      />
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        :value="character.charismaScore"
                        label="Charisma"
                        readonly
                        hide-details
                        dense
                        round
                        filled
                      />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="text-left">
                  <b class="text-decoration-underline">Proficiencies:</b>
                  <span v-text="'  Survival, Deception, Nature, Acrobatic'" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CharacterServices from "../services/CharacterServices";

class CharactersController {
  characters = null;

  formatSkillScore = score => {
    const mod = Math.floor((score - 10) / 2);
    return (mod >= 0 ? "+" : "") + mod;
  };

  constructor() {
    this.characters = CharacterServices.getAllFullByUserId(
      localStorage.userId
    ).then(c => {
      this.characters = c.data;
      console.log();
    });
  }
}

export default {
  name: "Characters",
  data() {
    const controller = new CharactersController();
    return {
      controller,
      model: null
    };
  },
};
</script>
