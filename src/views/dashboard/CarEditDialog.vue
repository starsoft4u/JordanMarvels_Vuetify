<template>
  <v-dialog v-model="props.visible" width="800" @keydown.esc="cancel">
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <div></div>
        <h3 class="pt-4">{{props.mode=='add'?'Add New ':'Edit '}}Car</h3>
        <v-btn icon @click="props.visible=false" class="ma-2">
          <v-icon color="black">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>Fill the requried information to {{props.mode=='add'?'add new':'edit'}} car</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="5" lg="3">
            <label @drop.prevent="onDropCarImage" @dragover.prevent>
              <div style="border:1px solid grey;width:104px;height:48px;">
                <img
                  ref="car_image"
                  v-if="props&&props.rec&&props.rec.img"
                  :src="require('@/assets/images/'+props.rec.img)"
                  width="104"
                  height="48"
                />
              </div>
              <input
                type="file"
                class="hidden"
                accept="image/png, image/jpeg"
                @change="onChangeCarImage"
              />
            </label>
          </v-col>
          <v-col cols="12" md="7" lg="9">
            <v-text-field v-model="props.rec.car" label="Full Name" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-select
              v-model="props.rec.transmission"
              label="Transmission"
              dense
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6" md="3">
            <v-select
              v-model="props.rec.luggage"
              label="Luggage number"
              dense
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6" md="3">
            <v-select v-model="props.rec.doors" label="Doors number" dense outlined hide-details />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="3">
            <v-select
              v-model="props.rec.passengers"
              label="Passenger Number"
              dense
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6" md="3">
            <v-select
              v-model="props.rec.conditioner"
              label="Conditioner"
              dense
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="props.rec.price"
              label="Enter price for 1 day of rent"
              dense
              outlined
              hide-details
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="pa-5 justify-center">
        <v-btn text outlined color="#C7B299" @click="onClickSave">
          <span class="mx-4">Save</span>
          <v-icon>fas fa-save</v-icon>
        </v-btn>
        <v-btn text outlined color="#C7B299" @click="props.visible=false">
          <span class="mx-4">Cancel</span>
          <v-icon>fas fa-user-edit</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <success-dialog :props="success_dialog_props" />
  </v-dialog>
</template>

<script>
import SuccessDialog from "@/components/SuccessDialog.vue";
export default {
  components: { SuccessDialog },
  props: ["props"],
  data: () => ({
    success_dialog_props: {
      visible: false,
      text: "",
      strong: ""
    }
  }),

  created() {},
  methods: {
    customFilter(item, queryText, itemText) {
      const name = item.name.toLowerCase();
      const searchText = queryText.toLowerCase();

      return name.indexOf(searchText) > -1;
    },
    onDropCarImage(e) {
      let files = e.dataTransfer.files;
      if (files && files[0]) {
        const refs = this.$refs;
        const reader = new FileReader();
        reader.onload = function(e) {
          refs.car_image.src = e.target.result;
        };

        reader.readAsDataURL(files[0]);
      }
    },
    onChangeCarImage(e) {
      const input = e.srcElement || e.target;
      if (input && input.files && input.files[0]) {
        const refs = this.$refs;
        const reader = new FileReader();
        reader.onload = function(e) {
          refs.car_image.src = e.target.result;
          console.log(refs.car_image.src);
        };

        reader.readAsDataURL(input.files[0]);
      }
    },
    onClickSave() {
      if (this.props.mode == "add") {
        this.success_dialog_props.text1 = "The new car";
        this.success_dialog_props.strong = "Tesla Model S";
        this.success_dialog_props.text2 = " was added to the list of Rent cars";
      } else {
        this.success_dialog_props.text1 = "The car";
        this.success_dialog_props.strong = "Tesla Model S";
        this.success_dialog_props.text2 = " was saved to the list of Rent cars";
      }
      this.props.visible = false;
      this.success_dialog_props.visible = true;
      // this.resolve(true);
      // this.dialog = false;
    },
    cancel() {
      // this.resolve(false);
      this.dialog = false;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>