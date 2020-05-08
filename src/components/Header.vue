<template>
  <v-app-bar height="58" app>
    <v-app-bar-nav-icon @click.stop="props.drawer_state.visible = !props.drawer_state.visible"></v-app-bar-nav-icon>
    <v-toolbar-title>Jordan Marvels Admin</v-toolbar-title>
    <v-spacer />
    <v-text-field
      filled
      outlined
      hide-details
      placeholder="Search here..."
      append-icon="mdi-magnify"
      dense
    ></v-text-field>
    <v-spacer />
    <v-badge bordered color="red" dot size="10" offset-x="10" offset-y="10">
      <v-img src="../assets/images/ic_bell.svg" width="23" height="27"></v-img>
    </v-badge>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text large v-on="on">
          <img src="../assets/images/ic_profile.png" width="40" height="40" />
          <span>Hamza</span>
          <v-icon size="18">mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item link>
          <v-list-item-avatar size="65">
            <v-img src="../assets/images/ic_profile.png" width="65" height="65" />
          </v-list-item-avatar>

          <div>
            <v-list-item-title>Hamza Nabulsi</v-list-item-title>
            <v-list-item-subtitle>nabulsi.hamza@gmail.com</v-list-item-subtitle>
            <v-list-item-subtitle>(ADMIN)</v-list-item-subtitle>
          </div>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link @click="onClickAddUser">
          <v-list-item-icon>
            <v-img src="../assets/images/ic_user_add.svg" />
          </v-list-item-icon>

          <v-list-item-title>Add New User</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link @click="onClickLogout">
          <v-list-item-icon>
            <img src="../assets/images/ic_logout.svg" />
          </v-list-item-icon>

          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <HeaderUserDialog :props="user_dialog_props" />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderUserDialog from "./HeaderUserDialog.vue";
export default Vue.extend({
  components: {
    HeaderUserDialog
  },
  props: ["props"],
  data: () => {
    return {
      user_dialog_props: { visible: false }
    };
  },
  methods: {
    onClickLogout: function() {
      this.$confirm("", "Are you sure LOGOUT?").then(f => {
        if (f) {
          delete localStorage.jm_admin_vuetify_logged;
          this.$router.replace({ name: "Login" });
        }
      });
    },
    onClickAddUser: function() {
      this.user_dialog_props.visible = true;
    }
  }
});
</script>
<style lang="scss" scoped>
</style>
