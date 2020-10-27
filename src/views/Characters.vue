<template>
  <div>
    <v-slide-group v-model="model" class="pa-4" show-arrows>
      <v-slide-item
        v-for="character in characters"
        :key="character"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'grey lighten-3' : 'grey lighten-5'"
          class="ma-4"
          height="75vh"
          width="30vw"
          @click="toggle"
        >
        <v-card-title>{{ 'character.name' }}</v-card-title>
          <v-card-text>
            <v-row no-gutters align="" justify="">
              <v-col cols="6">
                <v-avatar size="100">
                  <v-img src="https://www.placecage.com/200/200" />
                </v-avatar>
              </v-col>
              <v-col cols="6">
                <v-row no-gutters>
                  <v-col cols="12">
                    <v-text-field v-model="character.raceName" />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="character.className" />
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
export default {
  name: "Characters",
  data() {
    return {
      characters: [1, 2, 3],
      model: null
    };
  }
};
</script>
