<template>
  <div>
    <!-- <v-system-bar app>
      <v-toolbar-title>System Bar</v-toolbar-title>
    </v-system-bar> -->
    <Header :props="{drawer_state:drawer_state}" />
    <v-navigation-drawer v-model="drawer_state.visible" app width="300">
      <Menu />
    </v-navigation-drawer>
    <v-content app>
      <router-view />
    </v-content>
    <!-- <v-bottom-navigation app>
      <v-toolbar-title>Bottom Navagation</v-toolbar-title>
    </v-bottom-navigation>-->
    <!-- <v-footer app>
      <h1>Footer</h1>
    </v-footer> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";

export default Vue.extend({
  components: {
    Menu,
    Header
  },
  props: {
    source: String
  },
  data: () => {
    return {
      drawer_state: {
        visible: null
      }
      //
    };
  },
  methods: {}
});
</script>
<style lang="scss" scoped>
.v-navigation-drawer {
  background-color: #50473c !important;
}
</style>
