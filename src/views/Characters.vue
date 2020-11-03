<template>
  <v-slide-group
    v-if="controller.characters"
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
        :width="$vuetify.breakpoint.smAndDown ? '60vw' : '30%'"
        class="mx-2"
        height="80vh"
        shaped
        @click="toggle"
      >
        <v-card-title>{{ character.name }}</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="6" class="pt-2 pr-2">
              <v-badge
                :content="'lvl: 4'"
                bordered
                bottom
                overlap
                color="primary"
                offset-x="40"
                offset-y="20"
              >
                <v-avatar size="100">
                  <v-img src="https://www.placecage.com/200/200" />
                </v-avatar>
              </v-badge>
            </v-col>
            <v-col cols="6">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    v-model="character.race.Name"
                    label="Race"
                    readonly
                    hide-details
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="character.className"
                    label="Class"
                    readonly
                    hide-details
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row dense class="pt-3">
                <v-col cols="12">
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
                <v-spacer />
                <v-col cols="12">
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
                <v-col cols="12">
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
                <v-col cols="12">
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
                <v-col cols="12">
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
                <v-col cols="12">
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
            <v-col cols="8" class="pt-3">
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
</template>

<script>
import CharacterServices from "../services/CharacterServices";

class CharactersController {
  characters = null;
  constructor() {
    this.characters = CharacterServices.findAllByUser().then(c => {
      console.log(c);
      return (this.characters = c.data);
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
  methods: {
    async getCharacters() {
      const x = await CharacterServices.findAllByUser();
      console.log(x.data);
    }
  }
};
</script>
