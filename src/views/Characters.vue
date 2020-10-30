<template>
  <div>
    <v-btn @click="getCharacters" v-text="'dothething'" />
    <v-slide-group
      v-if="controller.characters"
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="(character, index) in controller.characters"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'grey lighten-3' : 'grey lighten-5'"
          class="ma-4"
          height="75vh"
          width="30vw"
          @click="toggle"
        >
          <v-card-title>{{ character.name }}</v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="6">
                <v-avatar size="100">
                  <v-img src="https://www.placecage.com/200/200" />
                </v-avatar>
              </v-col>
              <v-col cols="6">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-text-field v-model="character.race.Name" readonly />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="character.className" readonly />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
import CharacterServices from "../services/CharacterServices";

class CharactersController {
  characters = null;
  constructor() {
    this.characters = CharacterServices.findAllByUser()
      .then(c => {
        console.log(c);
        return (this.characters=c.data);
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
