<template>
  <v-card class="ma-12">
    <v-card-title class="justify-center text-uppercase">All tour bookings</v-card-title>
    <v-card-text>
      <v-data-table :headers="table_headers" :items="table_items">
        <template v-slot:item.status="{item}">
          <div>
            <div :class="item.status" class="px-4 py-1 text-center" style="color:white;font-size:14px;border-radius:10px;">{{item.status_label}}</div>
          </div>
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
        package: "Honeymoon Plus" + (i + 1),
        category: "Couple Package" + (i + 1),
        date: "12-" + (i + 1) + "-2020",
        price: "$" + (i % 5) * 250,
        user: "Mazhar Sharif" + (i + 1),
        status: "",
        status_label: "IN PROGRESS"
      };
      switch (i % 3) {
        case 0:
          item.status = "success";
          item.status_label = "IN PROGRESS";
          break;
        case 1:
          item.status = "warning";
          item.status_label = "WARNING";
          break;
        default:
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
          text: "Package Name",
          value: "package",
          align: "start",
          sortable: true
        },
        {
          text: "Package Category",
          value: "category",
          align: "start",
          sortable: true
        },
        {
          text: "Date",
          value: "date",
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
