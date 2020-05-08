<template>
  <v-card class="ma-12">
    <v-card-title class="justify-center text-uppercase">All car bookings</v-card-title>
    <v-card-text>
      <v-data-table :headers="table_headers" :items="table_items">
        <template v-slot:item.car="{item}">
          <div class="d-flex">
            <img :src="require('@/assets/images/'+item.img)" width="52" height="24" />
            <div class="ms-2">{{item.car}}</div>
          </div>
        </template>
        <template v-slot:item.status="{item}">
          <div
            :class="item.status"
            class="px-4 py-1 text-center"
            style="color:white;font-size:14px;border-radius:10px;"
          >{{item.status_label}}</div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
// @ is an alias to /src
export default {
  components: {},
  created() {
    for (let i = 0; i < 25; i++) {
      let item = {
        from: "12-" + (i + 1) + "-2020",
        to: "12-" + (i + 11) + "-2020",
        pick: "Amman - Amman",
        price: "$" + ((i % 5) * 50 + 200),
        travelers: 3,
        user: "Mazhar Sharif" + (i + 1)
      };
      switch (i % 3) {
        case 0:
          item.car = "BMW";
          item.img = "car_bmw.png";
          item.status = "success";
          item.status_label = "IN PROGRESS";
          break;
        case 1:
          item.car = "Hyundai Elantra";
          item.img = "car_hyundai.png";
          item.status = "warning";
          item.status_label = "WARNING";
          break;
        default:
          item.car = "Toyota Prius";
          item.img = "car_toyoda.png";
          item.status = "error";
          item.status_label = "CANCELED";
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
          sortable: true
        },
        {
          text: "From",
          value: "from",
          align: "start",
          sortable: true
        },
        {
          text: "To",
          value: "to",
          align: "start",
          sortable: true
        },
        {
          text: "Pick up - Drop off",
          value: "pick",
          align: "start",
          sortable: true
        },

        {
          text: "Price",
          value: "price",
          align: "start",
          sortable: true
        },
        {
          text: "Travelers",
          value: "travelers",
          align: "start",
          sortable: true
        },
        {
          text: "User",
          value: "user",
          align: "start",
          sortable: true
        },
        {
          text: "Status",
          value: "status",
          align: "start",
          sortable: true
        }
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
      this.$confirm("Are you sure delete " + item.name + "?").then(res => {
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
