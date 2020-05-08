<template>
  <v-dialog v-model="props.visible" width="800" @keydown.esc="cancel">
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <div></div>
        <h3 class="pt-4">Update Price</h3>
        <v-btn icon @click="props.visible=false" class="ma-2">
          <v-icon color="black">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
          <div class="text-center">Send updated price to customers</div>
        <v-text-field
          v-model="props.rec.price"
          label="Total Price"
          placeholder="Please Enter Price"
          outlined
          dense
          hide-details
        />
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn text outlined color="#C7B299" @click="onClickSave">
          <span class="mx-4">Send Update Price</span>
          <v-img src="@/assets/images/ic_send.svg"/>
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
      this.success_dialog_props.text1 = "The updated prices";
      this.success_dialog_props.strong = "";
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
</style>