<template>
  <v-card class="ma-12 pa-8">
    <v-card-title class="justify-center text-uppercase">Add New Discont</v-card-title>
    <v-card-subtitle class="text-center">Fill the requried information to add new discount</v-card-subtitle>
    <v-card-text>
      <v-text-field
        v-model="rec.name"
        label="Discount Name"
        placeholder="Enter Discount Name"
        dense
        outlined
        hide-details
      />
      <v-select
        v-model="rec.type"
        label="Discount Type"
        placeholder="Enter Discount Type"
        dense
        outlined
        hide-details
        class="mt-4"
      />
      <v-text-field
        v-model="rec.amount"
        label="Discount Amount"
        placeholder="Enter Discount Amount"
        dense
        outlined
        hide-details
        class="mt-4"
      />
      <v-select
        v-model="rec.category"
        label="Discount Category"
        placeholder="Enter Discount Category"
        dense
        outlined
        hide-details
        class="mt-4"
      />
    </v-card-text>
    <v-card-actions class="justify-space-around">
      <v-btn color="#FFC11F" append to="success">Add Discount Now</v-btn>
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
