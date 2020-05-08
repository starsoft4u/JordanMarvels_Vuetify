<template>
  <v-container class="main-container ma-auto pa-0">
    <v-row class="mx-0">
      <v-col cols="12" md="5" class="pa-0">
        <div class="d-flex flex-column pa-12 h-100">
          <div>
            <img src="../../assets/images/logo.svg" width="172" height="90" class="mt-8" />
          </div>
          <div>
            <h1 class="pt-12">Forgot Password</h1>

            <span>Suspendisse feugiat sapien ut ex volutpat facilisis. ut faucibus ligula pellentesque semper</span>
          </div>
          <div class="mt-6">
            <v-text-field
              v-model="email"
              prepend-inner-icon="mdi-email-outline"
              label="Email Address"
              class="text-field"
              hide-details
              outlined
              placeholder="Please Enter Your Email"
            />
          </div>
          <div>
            <v-btn width="100%" color="yellow" @click="onClickSend" class="mt-6">Send</v-btn>
          </div>
          <v-spacer />
          <div>
            <v-icon>mdi-copyright</v-icon>
            <span>Copyright 2020. All Rights Reserved</span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="7" class="pa-0">
        <img src="../../assets/images/banner2.png" class="banner-image pa-0" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
  data: () => {
    return { email: "" };
  },
  methods: {
    onClickSend: function() {
      this.$router.replace({ name: "Sent" });
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
    // height: 100vh;
  }
}
</style>