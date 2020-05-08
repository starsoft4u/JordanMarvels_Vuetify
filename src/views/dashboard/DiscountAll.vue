<template>
  <v-card class="ma-12">
      <v-card-title class="justify-center text-uppercase">All Discounts</v-card-title>
      <v-card-subtitle class="text-center">you can add new Discount here.</v-card-subtitle>
    <v-card-text>
      <v-data-table :headers="table_headers" :items="table_items">
        <template v-slot:item.edit="{item}">
          <v-icon @click="editItem(item)">fas fa-user-edit</v-icon>
        </template>
        <template v-slot:item.delete="{item}">
          <v-icon @click="deleteItem(item)">fas fa-user-times</v-icon>
        </template>
      </v-data-table>
      <discount-edit-dialog :props="edit_dialog_props" />
    </v-card-text>
  </v-card>
</template>

<script>
// @ is an alias to /src
import DiscountEditDialog from "./DiscountEditDialog.vue";
export default {
  components: { DiscountEditDialog },
  created() {
    for (let i = 0; i < 25; i++) {
      this.table_items.push({
        name: "Discount Name " + i,
        type: "Discount Type " + i,
        amount: "Discount Amount " + i,
        category: "Discount Category " + i
      });
    }
  },
  data: () => {
    return {
      edit_dialog_props: {
        visible: false,
        rec: {}
      },
      table_headers: [
        {
          text: "Discount Name",
          value: "name",
          align: "start",
          sortable: true
        },
        {
          text: "Discount Type",
          value: "type",
          align: "start",
          sortable: true
        },
        {
          text: "Discount Amount(%)",
          value: "amount",
          align: "start",
          sortable: true
        },
        { text: "Edit", value: "edit", align: "center", sortable: false },
        { text: "Delete", value: "delete", align: "center", sortable: false }
      ],
      table_items: []
    };
  },
  methods: {
    editItem(item) {
      this.edit_dialog_props.rec = item;
      this.edit_dialog_props.visible = true;
    },

    deleteItem(item) {
      console.log(item);
      console.log(this.table_items);
      const index = this.table_items.indexOf(item);
      this.$confirm( "Are you sure delete " + item.name + "?").then(res => {
        console.log(res);
      });
      // confirm("Are you sure you want to delete this item?") &&
      //   this.table_items.splice(index, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.info-box {
  min-height: 187px;
  min-width: 200px;
}
</style>
