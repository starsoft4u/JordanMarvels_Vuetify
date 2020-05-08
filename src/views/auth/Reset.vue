<template>
  <v-container class="main-container ma-auto pa-0">
    <v-row class="mx-0">
      <v-col cols="12" md="5" class="pa-0">
        <div class="d-flex flex-column pa-12 h-100">
          <div>
            <img src="../../assets/images/logo.svg" width="172" height="90" class="mt-8" />
          </div>
          <div>
            <h1 class="pt-12">Password Reset</h1>

            <span>Please enter you new password.</span>
          </div>
          <div class="mt-6">
            <v-text-field
              v-model="new_password"
              prepend-inner-icon="mdi-lock-open-outline"
              label="New Password"
              class="text-field"
              hide-details="auto"
              :rules="[rules.required,rules.min8]"
              counter="auto"
              type="password"
              placeholder="Please Enter Your Name"
            />
          </div>
          <div class="mt-4">
            <v-text-field
              v-model="confirm_password"
              prepend-inner-icon="mdi-lock-open-outline"
              label="Confirm New Password"
              class="text-field"
              hide-details="auto"
              counter="auto"
              :rules="[rules.required,rules.min8]"
              type="password"
              placeholder="Please Enter Password"
            >
              <img src="../../assets/images/ic_input_password.svg" />
            </v-text-field>
          </div>
          <div>
            <v-btn width="100%" color="yellow" @click="onClickReset">Reset Password Now</v-btn>
          </div>
          <v-spacer />
          <div>
            <v-icon>mdi-copyright</v-icon>
            <span>Copyright 2020. All Rights Reserved</span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="7" class="pa-0">
        <img src="../../assets/images/banner1.png" class="banner-image pa-0" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
  data: () => {
    return {
      new_password: "",
      confirm_password: "",
      rules: {
        required: value => !!value || "Required.",
        min8: v => v.length >= 8 || "Min 8 characters",
        min6: v => v.length >= 8 || "Min 6 characters"
      }
    };
  },
  methods: {
    onClickReset: function() {
      this.$router.replace({ name: "ResetSuccess" });
    }
  }
});
</script>
<style lang="scss" scoped>
.main-container {
  background-color: white;
  .banner-image {
    // background-image: url(../../assets/images/banner1.png);
    // background-size: cover;
    width: 100%;
    height: 100%;
  }
}
</style>