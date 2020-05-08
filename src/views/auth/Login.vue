<template>
  <v-container class="main-container ma-auto pa-0">
    <v-row class="mx-0">
      <v-col cols="12" md="5" class="pa-0">
        <div class="d-flex flex-column pa-12 h-100">
          <div>
            <img src="../../assets/images/logo.svg" width="172" height="90" class="mt-8" />
          </div>
          <div>
            <h1 class="pt-12">Admin Login</h1>

            <span>Suspendisse feugiat sapien ut ex volutpat facilisis. ut faucibus ligula pellentesque semper</span>
          </div>
          <div class="mt-6">
            <v-text-field
              v-model="user_name"
              prepend-inner-icon="mdi-account-circle-outline"
              label="User Name"
              class="text-field"
              hide-details="auto"
              :rules="[rules.required]"
              outlined
              placeholder="Please Enter Your Name"
            />
          </div>
          <div class="mt-4">
            <v-text-field
              v-model="user_password"
              prepend-inner-icon="mdi-lock-open-outline"
              label="Password"
              class="text-field"
              outlined
              hide-details="auto"
              counter="auto"
              :rules="[rules.required,rules.min8]"
              minlength="6"
              type="password"
              placeholder="Please Enter Password"
            >
              <img src="../../assets/images/ic_input_password.svg" />
            </v-text-field>
          </div>
          <div class="text-right">
            <v-btn text link class="text-underline" to="/auth/forgot">Forgot Password?</v-btn>
          </div>
          <div>
            <v-checkbox label="Remember my details" />
          </div>
          <div>
            <v-btn width="100%" color="yellow" @click="onClickLogin">login</v-btn>
          </div>
          <div class="text-center mt-4">
            <span>New User?</span>
            <v-btn text class="text-underline" to="/auth/register">Register here</v-btn>
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
      user_name: "",
      user_password: "",
      rules: {
        required: value => !!value || "Required.",
        min8: v => v.length >= 8 || "Min 8 characters",
        min6: v => v.length >= 8 || "Min 6 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  methods: {
    onClickLogin: function() {
      localStorage.jm_admin_vuetify_logged = 1;
      this.$router.replace({ name: "Home" });
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