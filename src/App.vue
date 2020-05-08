<template>
  <v-app>
    <router-view />
    <confirm-dialog ref="ConfirmDialog" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ConfirmDialog from "@/components/ConfirmDialog.vue";
export default Vue.extend({
  components: { ConfirmDialog },
  mounted() {
    // this.$root.$confirm = this.$refs.ConfirmDialog.open;
    Vue.prototype.$confirm = this.$refs.ConfirmDialog.open;
  }
});
</script>
<style lang="scss" scoped>
#app {
  font-family: "Open Sans", "Lucida Sans", "Lucida Sans Regular",
    "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 14px;
  background-color: #f2f2f2;
  color: #50473c;
}
</style>
