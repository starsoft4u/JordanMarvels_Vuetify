<template>
  <v-dialog v-model="props.visible" width="800">
    <v-card>
      <v-card-title>
        <div class="w-100 d-flex justify-space-between">
          <div></div>
          <div></div>
          <v-btn icon @click="props.visible=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-divider />
      <v-card-text class="text-center">
        <img src="../assets/images/ic_success.svg" width="40" height="40" />
        <div>
          {{props.text1}}
          <b>{{props.strong}}</b>
          {{props.text2}}
        </div>
      </v-card-text>
      <v-divider />
      <v-card-actions class="pa-4">
        <v-spacer />
        <v-btn text outlined @click="props.visible=false">
          <span>Ok</span>
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["props"],
  updated() {}
};
</script>
<style lang="scss" scoped>
</style>