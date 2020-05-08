<template>
  <v-card class="ma-12">
    <v-card-title class="justify-center">Packages Inquiry</v-card-title>
    <v-card-subtitle class="text-center">The list of special book inquiries</v-card-subtitle>
    <v-card-text>
      <v-data-table :headers="table_headers" :items="table_items">
        <template v-slot:item.price="{item}">
          <v-btn text link @click="editItem(item)">{{item.price}}</v-btn>
        </template>
      </v-data-table>
      <package-inquiry-edit-dialog :props="edit_dialog_props" />
    </v-card-text>
  </v-card>
</template>

<script>
// @ is an alias to /src
import PackageInquiryEditDialog from "./PackageInquiryEditDialog.vue";
export default {
  components: { PackageInquiryEditDialog },
  created() {
    for (let i = 0; i < 25; i++) {
      this.table_items.push({
        no: "" + (i + 1),
        date: i + "-12-2019",
        dest: " Petra, Dead Sea " + (i+1),
        count: i * 3 + 2,
        trans: "Transpotation Van" + (i+1),
        acc: (i % 5) + 2 + "-Star",
        price: "$" + (i % 5) * 50,
        msg:
          "Aplanned visit to several places in acountry or area made for a special purpose " +
          i
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
          text: "S.No.",
          value: "no",
          align: "start",
          sortable: true
        },
        {
          text: "Tour Date",
          value: "date",
          align: "start",
          sortable: true
        },
        {
          text: "Destinations",
          value: "dest",
          align: "start",
          sortable: true
        },
        {
          text: "No. of Peoples",
          value: "count",
          align: "start",
          sortable: true
        },
        {
          text: "Transpotation",
          value: "trans",
          align: "start",
          sortable: true
        },
        {
          text: "Accomodation",
          value: "acc",
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
          text: "Message",
          value: "msg",
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
