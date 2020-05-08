<template>
  <v-card class="ma-12">
    <v-card-text class="text-center">
      <img src="../../assets/images/ic_success.svg" width="40" height="40" />
      <div>
        A new package category
        <b>The Honeymoon Delight</b> has been added successfully
      </div>
    </v-card-text>
    <v-card-actions class="pa-4">
      <v-spacer />
      <v-btn text outlined color="#C7B299" @click="$router.replace('/dashboard/category/all')">
        <span>View All Package Categories</span>
        <v-img src="@/assets/images/ic_user.svg" />
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  components: {}
};
</script>
