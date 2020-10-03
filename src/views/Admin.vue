<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Description</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="race in controller.races" :key="race.id">
            <td>{{ race.Name }}</td>
            <td>{{ race.Description }}</td>
            <td>
              <v-btn icon @click="controller.onEditRace(race.id)">
                <v-icon>edit</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog v-model="controller.isRaceEditDialogVisible" scrollable>
      <race-edit-dialog :race-id="controller.raceId" />
    </v-dialog>
  </div>
</template>
<script>
import RaceDataService from "../services/RaceDataService";
import RaceEditDialog from "../components/AdminDialog/RaceEditDialog.vue";
export class AdminController {
  races = [
    {
      id: 1,
      name: "Dwarf",
      description:
        "Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",
      age:
        "Dwarves mature at the same rate as humans,but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
      size:
        "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
      speed:
        "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",
      languages:
        "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."
    },
    {
      id: 2,
      name: "Elf",
      description:
        "Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",
      age:
        "Although elves reach physical maturity at about the same age as  umans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
      size:
        "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
      speed: "Your base walking speed is 30 feet.",
      languages:
        "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires."
    },
    {
      id: 3,
      name: "Halfling",
      description:
        "Your halfling character has a number of traits in common with all other halflings. ",
      age:
        "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
      size:
        "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
      speed: "Your base walking speed is 25 feet.",
      languages:
        "You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling."
    }
  ];

  isRaceEditDialogVisible = false;

  raceId = null;

  constructor() {
    this.getRaces();
  }

  getRaces = () => {
    RaceDataService.getAll()
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.races = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  onEditRace = id => {
    this.isRaceEditDialogVisible = true;
    this.raceId = id;
    alert(id);
  };
}

export default {
  components: {
    RaceEditDialog
  },
  data() {
    const controller = new AdminController();
    return {
      controller
    };
  },
  methods: {
    removeAllTutorials() {
      RaceDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
