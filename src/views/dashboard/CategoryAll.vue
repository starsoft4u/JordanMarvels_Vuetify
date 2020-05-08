<template>
  <v-card class="ma-12">
      <v-card-title class="justify-center text-uppercase">All Package Categories</v-card-title>
      <v-card-subtitle class="text-center">you can add new Package Category here.</v-card-subtitle>
    <v-card-text>
      <v-data-table :headers="table_headers" :items="table_items">  
        <template v-slot:item.edit="{item}">
          <v-icon @click="editItem(item)">fas fa-user-edit</v-icon>
        </template>
        <template v-slot:item.delete="{item}">
          <v-icon @click="deleteItem(item)">fas fa-user-times</v-icon>
        </template>
      </v-data-table>
      <category-edit-dialog :props="edit_dialog_props" />
    </v-card-text>
  </v-card>
</template>

<script>
// @ is an alias to /src
import CategoryEditDialog from "./CategoryEditDialog.vue";
export default {
  components: { CategoryEditDialog },
  data: () => {
    return {
      edit_dialog_props: {
        visible: false,
        rec: {}
      },
      table_headers: [
        { text: "Category No.", value: "no", align: "start", sortable: true },
        {
          text: "Pakcage Category Name",
          value: "name",
          align: "start",
          sortable: true
        },
        {
          text: "Date",
          value: "date",
          align: "start",
          sortable: true
        },
        { text: "Edit", value: "edit", align: "center", sortable: false },
        { text: "Delete", value: "delete", align: "center", sortable: false }
      ],
      table_items: [
        {
          no:'01',
          name: "Package Category 01",
          date: "12-01-2020"
        },
        {
          no:'02',
          name: "Package Category 02",
          date: "12-02-2020"
        },
        {
          no:'03',
          name: "Package Category 03",
          date: "12-03-2020"
        },
        {
          no:'04',
          name: "Package Category 04",
          date: "12-04-2020"
        },
        {
          no:'05',
          name: "Package Category 05",
          date: "12-05-2020"
        },
        {
          no:'06',
          name: "Package Category 06",
          date: "12-06-2020"
        },
        {
          no:'07',
          name: "Package Category 07",
          date: "12-07-2020"
        },
        {
          no:'08',
          name: "Package Category 08",
          date: "12-08-2020"
        },
        {
          no:'09',
          name: "Package Category 09",
          date: "12-09-2020"
        },
        {
          no:'10',
          name: "Package Category 10",
          date: "12-10-2020"
        },
        {
          no:'11',
          name: "Package Category 11",
          date: "12-11-2020"
        },
        {
          no:'12',
          name: "Package Category 12",
          date: "12-12-2020"
        },
        {
          no:'13',
          name: "Package Category 13",
          date: "12-13-2020"
        },
        {
          no:'14',
          name: "Package Category 14",
          date: "12-14-2020"
        },
        {
          no:'15',
          name: "Package Category 15",
          date: "12-15-2020"
        },
      ]
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
      this
        .$confirm( "Are you sure delete " + item.name + "?")
        .then(res => {
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
