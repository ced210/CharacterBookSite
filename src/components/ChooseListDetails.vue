<template>
  <v-row dense>
    <v-col cols="4" md="2" class="elevation-2">
      <v-list shaped>
        <v-list-item-group mandatory>
          <v-list-item
            v-for="(item, i) in controller.items"
            :key="i"
            color="primary"
            @click="controller.onClickItem(i)"
          >
            <v-list-item-content>
              <v-list-item-title class="text-left">
                <slot name="listItem" :item="item" />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>
    <v-col cols="8" md="10" class="pt-0 mt-0">
      <slot name="content" :selectedItem="controller.selectedItem" />
    </v-col>
  </v-row>
</template>
<script>
class ChooseListDetailsController {
  selectedItem = null;

  items = [];

  constructor(items) {
    this.items = items;
    this.selectedItem = this.items[0];
  }

  onClickItem = index => {
    this.selectedItem = this.items[index];
    this.onSelectedItemChange(index);
  };
}

export default {
  props: {
    value: {
      type: Number,
      default: () => 0
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    const controller = new ChooseListDetailsController(this.items);
    controller.onSelectedItemChange = index => this.$emit("input", index);
    return {
      controller
    };
  }
};
</script>
