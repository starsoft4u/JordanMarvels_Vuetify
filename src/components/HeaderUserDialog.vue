<template>
  <v-dialog v-model="props.visible" width="800">
    <v-card>
      <v-card-title>
        <div class="w-100 d-flex justify-space-between">
          <div></div>
          <div>Add New User</div>
          <v-btn icon @click="props.visible=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text class="text-center">
        <div>Please add new user by inviting them via email address</div>
        <v-text-field placeholder="Email Address" outlined hide-details />
      </v-card-text>
      <v-divider />
      <v-card-actions class="pa-4">
        <v-spacer />
        <v-btn text outlined @click="props.visible=false;success_dialog_props.visible=true">
          <span>Add New User</span>
          <v-img src="../assets/images/ic_user_add.svg" />
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
    <success-dialog :props="success_dialog_props" />
  </v-dialog>
</template>
<script>
import SuccessDialog from "./SuccessDialog";
export default {
  components: { SuccessDialog },
  data: () => {
    return {
      success_dialog_props: {
        visible: false,
        text1: "New user invitation has been sent successfully to",
        strong: "johan@outlook.com",
        text2:''
      }
    };
  },
  props: ["props"]
};
</script>
<style lang="scss" scoped>
</style>