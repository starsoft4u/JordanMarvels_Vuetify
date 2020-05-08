<template>
  <v-container class="main-container ma-auto pa-0">
    <v-row class="mx-0">
      <v-col cols="12" md="6" class="pa-0">
        <div class="d-flex flex-column pa-12 h-100">
          <div>
            <img src="../../assets/images/logo.svg" width="172" height="90" class="mt-8" />
          </div>
          <div>
            <h1 class="pt-12">Admin Register</h1>

            <span>Suspendisse feugiat sapien ut ex volutpat facilisis. ut faucibus ligula pellentesque semper</span>
          </div>
          <div class="mt-6">
            <v-text-field
              prepend-inner-icon="mdi-account-circle-outline"
              label="User Name"
              class="text-field"
              hide-details
              outlined
              placeholder="Please Enter Your Name"
            />
          </div>
          <div class="mt-6">
            <v-text-field
              prepend-inner-icon="mdi-account-circle-outline"
              label="User Email"
              class="text-field"
              hide-details
              outlined
              placeholder="Please Enter Your Email Address"
            />
          </div>
          <div class="mt-4">
            <v-text-field
              prepend-inner-icon="mdi-lock-open-outline"
              label="Password"
              hide-details
              class="text-field"
              outlined
              type="password"
              placeholder="Please Enter Password"
            >
              <img src="../../assets/images/ic_input_password.svg" />
            </v-text-field>
          </div>
          <div class="mt-4">
            <v-text-field
              prepend-inner-icon="mdi-lock-open-outline"
              label="Confirm Password"
              hide-details
              class="text-field"
              outlined
              type="password"
              placeholder="Please Enter Password Again"
            >
              <img src="../../assets/images/ic_input_password.svg" />
            </v-text-field>
          </div>
          <div>
            <v-btn width="100%" color="yellow" class="mt-6" @click="onClickRegister">Register</v-btn>
          </div>
          <v-spacer />
          <div>
            <v-icon>mdi-copyright</v-icon>
            <span>Copyright 2020. All Rights Reserved</span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="pa-0">
        <img src="../../assets/images/banner1.png" class="banner-image pa-0" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
  methods: {
    onClickRegister: function() {
      this.$router.push({ name: "Login" });
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