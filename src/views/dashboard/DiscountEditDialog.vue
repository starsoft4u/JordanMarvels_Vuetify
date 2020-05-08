<template>
  <v-dialog v-model="props.visible" width="800" @keydown.esc="cancel">
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <div></div>
        <h3 class="pt-4">Edit Discount</h3>
        <v-btn icon @click="props.visible=false" class="ma-2">
          <v-icon color="black">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>you can edit dicount here.</v-card-subtitle>
      <v-card-text>
        <v-text-field
          v-model="props.rec.name"
          label="Discount Name"
          placeholder="Please Enter Discount Name"
          outlined
          dense
          hide-details
        />
        <v-select
          v-model="props.rec.type"
          label="Discount Type"
          placeholder="Please Select Discount Type"
          outlined
          dense
          hide-details
          class="mt-4"
        />
        <v-text-field
          v-model="props.rec.amount"
          label="Discount Amount"
          placeholder="Please Enter Discount Amount"
          outlined
          dense
          hide-details
          class="mt-4"
        />
        <v-select
          v-model="props.rec.category"
          label="Discount Category"
          placeholder="Please Select Discount Category"
          outlined
          dense
          hide-details
          class="mt-4"
        />
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
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
    onClickSave() { 
      this.success_dialog_props.text1 = "The discount";
      this.success_dialog_props.strong = "Honemoon Plus";
      this.success_dialog_props.text2 = "has been saved successfully";
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
.customer-edit {
  overflow: hidden;
  .left-box {
    width: 226px;
    .left-top-box {
      height: 189px;
      background-color: #50473c;
    }
    .left-bottom-box {
      flex-grow: 1;
      min-height: 415px;
      background-color: #c7b299;
    }
  }
  .photo-box {
    width: 226px;
    margin-inline-start: -226px;
    .photo {
      width: 124px;
      margin: 127px auto auto auto;
      color: white;
      text-align: center;
      img {
        background-color: white;
        border-radius: 50%;
      }
    }
  }
  .content-box {
    flex: 1;
  }
}
</style>