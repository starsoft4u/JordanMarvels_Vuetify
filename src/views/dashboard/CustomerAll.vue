<template>
  <v-card class="ma-12">
    <v-card-text>
      <v-data-table :headers="table_headers" :items="table_items">
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>

            <v-btn color="primary" dark class="mb-2" @click="addItem">
              <v-icon class="mr-4">fas fa-user-plus</v-icon>Add New Customer
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.edit="{item}">
          <v-icon @click="editItem(item)">fas fa-user-edit</v-icon>
        </template>
        <template v-slot:item.delete="{item}">
          <v-icon @click="deleteItem(item)">fas fa-user-times</v-icon>
        </template>
      </v-data-table>
      <CustomerEditDialog :props="edit_dialog_props" />
    </v-card-text>
  </v-card>
</template>

<script>
// @ is an alias to /src
import CustomerEditDialog from "@/components/CustomerEditDialog.vue";
export default {
  components: { CustomerEditDialog },
  data: () => {
    return {
      edit_dialog_props: {
        visible: false,
        mode: "add",
        rec: {}
      },
      table_headers: [
        { text: "Name", value: "name", aling: "start", sortable: true },
        { text: "Email", value: "email", aling: "start", sortable: true },
        {
          text: "Date Joined",
          value: "joined_date",
          aling: "start",
          sortable: true
        },
        {
          text: "No.Bookings",
          value: "bookings_no",
          aling: "start",
          sortable: true
        },
        { text: "Edit", value: "edit", aling: "start", sortable: false },
        { text: "Delete", value: "delete", aling: "start", sortable: false }
      ],
      table_items: [
        {
          name: "Mazhar Sharif",
          email: "mazhar.shf@gmail.com",
          joined_date: "12-01-2020",
          bookings_no: "061"
        },
        {
          name: "Mazhar Sharif2",
          email: "mazhar.shf2@gmail.com",
          joined_date: "12-02-2020",
          bookings_no: "062"
        },
        {
          name: "Mazhar Sharif3",
          email: "mazhar.shf3@gmail.com",
          joined_date: "12-03-2020",
          bookings_no: "063"
        },
        {
          name: "Mazhar Sharif4",
          email: "mazhar.shf4@gmail.com",
          joined_date: "12-04-2020",
          bookings_no: "064"
        },
        {
          name: "Mazhar Sharif5",
          email: "mazhar.shf5@gmail.com",
          joined_date: "12-05-2020",
          bookings_no: "065"
        },
        {
          name: "Mazhar Sharif6",
          email: "mazhar.shf6@gmail.com",
          joined_date: "12-06-2020",
          bookings_no: "066"
        },
        {
          name: "Mazhar Sharif7",
          email: "mazhar.shf7@gmail.com",
          joined_date: "12-07-2020",
          bookings_no: "067"
        },
        {
          name: "Mazhar Sharif8",
          email: "mazhar.shf8@gmail.com",
          joined_date: "12-08-2020",
          bookings_no: "068"
        },
        {
          name: "Mazhar Sharif9",
          email: "mazhar.shf9@gmail.com",
          joined_date: "12-09-2020",
          bookings_no: "069"
        }
      ]
    };
  },
  methods: {
    addItem() {
      this.edit_dialog_props.mode = "add";
      this.edit_dialog_props.rec = {};
      this.edit_dialog_props.visible = true;
      // this.edit_item = Object.assign({}, item);
      // this.dialog = true;
    },
    editItem(item) {
      // this.editedIndex = this.table_items.indexOf(item);
      this.edit_dialog_props.mode = "edit";
      this.edit_dialog_props.rec = item;
      this.edit_dialog_props.visible = true;
      // this.edit_item = Object.assign({}, item);
      // this.dialog = true;
    },

    deleteItem(item) {
      console.log(item);
      console.log(this.table_items);
      const index = this.table_items.indexOf(item);
      this
        .$confirm("", "Are you sure delete " + item.name + "?")
        .then(f => {
          console.log(f);
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
