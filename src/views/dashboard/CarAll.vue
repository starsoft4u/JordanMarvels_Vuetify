<template>
  <v-card class="ma-12">
    <v-card-title class="justify-center text-uppercase">All car bookings</v-card-title>
    <v-card-text>
      <v-data-table :headers="table_headers" :items="table_items">
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>

            <v-btn color="primary" dark class="mb-2" @click="addItem">
              <v-icon class="mr-4">mdi-plus</v-icon>Add New Car
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.car="{item}">
          <div class="d-flex">
            <img :src="require('@/assets/images/'+item.img)" width="52" height="24" />
            <div class="ms-2">{{item.car}}</div>
          </div>
        </template>
        <template v-slot:item.edit="{item}">
          <v-icon @click="editItem(item)">fas fa-edit</v-icon>
        </template>
        <template v-slot:item.delete="{item}">
          <v-icon @click="deleteItem(item)">fas fa-times</v-icon>
        </template>
      </v-data-table>
    </v-card-text>
    <car-edit-dialog :props="edit_dialog_props" />
  </v-card>
</template>

<script>
import CarEditDialog from "@/views/dashboard/CarEditDialog.vue";
export default {
  components: { CarEditDialog },
  created() {
    for (let i = 0; i < 25; i++) {
      let item = {
        price: "$" + ((i % 5) * 50 + 200),
        doors: 4,
        passengers: 4
      };
      switch (i % 3) {
        case 0:
          item.car = "BMW";
          item.img = "car_bmw.png";
          item.transmission = "Manual";
          item.luggage = "4";
          item.conditioner = "Yes";
          break;
        case 1:
          item.car = "Hyundai Elantra";
          item.img = "car_hyundai.png";
          item.transmission = "Automatic";
          item.luggage = "2";
          item.conditioner = "No";
          break;
        default:
          item.car = "Toyota Prius";
          item.img = "car_toyoda.png";
          item.transmission = "Automatic";
          item.luggage = "2";
          item.conditioner = "No";
      }
      this.table_items.push(item);
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
          text: "Car",
          value: "car",
          align: "start",
          sortable: false
        },
        {
          text: "1 Day Price",
          value: "price",
          align: "center",
          sortable: false
        },
        {
          text: "Transmission",
          value: "transmission",
          align: "center",
          sortable: true
        },
        {
          text: "Luggage",
          value: "luggage",
          align: "center",
          sortable: true
        },

        {
          text: "Doors",
          value: "doors",
          align: "center",
          sortable: true
        },
        {
          text: "Passengers",
          value: "passengers",
          align: "center",
          sortable: true
        },
        {
          text: "Conditioner",
          value: "conditioner",
          align: "center",
          sortable: true
        },
        {
          text: "Edit",
          value: "edit",
          align: "center"
        },
        {
          text: "Delete",
          value: "delete",
          align: "center"
        }
      ],
      table_items: []
    };
  },
  methods: {
    addItem() {
      this.edit_dialog_props.mode = "add";
      this.edit_dialog_props.rec = {};
      this.edit_dialog_props.visible = true;
    },
    editItem(item) {
      this.edit_dialog_props.mode = "edit";
      this.edit_dialog_props.rec = item;
      this.edit_dialog_props.visible = true;
    },

    deleteItem(item) {
      console.log(item);
      console.log(this.table_items);
      const index = this.table_items.indexOf(item);
      this.$confirm("Are you sure delete " + item.car + "?").then(res => {
        console.log(res);
      });
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
