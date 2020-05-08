<template>
  <v-card class="ma-12 pa-8">
    <v-card-title class="justify-center text-uppercase">Add New Package Categories</v-card-title>
    <v-card-subtitle class="text-center">you can add new Package Category here.</v-card-subtitle>
    <v-card-text>
      <v-text-field
        v-model="rec.name"
        label="Packagee Category Name"
        dense
        outlined
        hide-details
      />
    </v-card-text>
    <v-card-actions class="justify-space-around">
      <v-btn color="#FFC11F" append to="success">Add Package Category Now</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data: () => {
    return {
      rec: {
        name: ""
      }
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>
