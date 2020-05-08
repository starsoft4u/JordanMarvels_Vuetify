<template>
  <v-card class="ma-12">
    <v-card-text>
      <v-card-title class="justify-center text-uppercase">All Packages</v-card-title>
      <v-card-subtitle class="text-center">you can add new Package here.</v-card-subtitle>
      <v-data-table :headers="table_headers" :items="table_items">
        <template v-slot:item.view="{item}">
          <v-icon @click="viewItem(item)">fas fa-eye</v-icon>
          <!-- <v-icon @click="editItem(item)">material-icons visibility material-icons--outline</v-icon> -->
        </template>
        <template v-slot:item.edit="{item}">
          <v-icon @click="editItem(item)">fas fa-user-edit</v-icon>
        </template>
        <template v-slot:item.delete="{item}">
          <v-icon @click="deleteItem(item)">fas fa-user-times</v-icon>
        </template>
      </v-data-table>
      <package-detail-dialog :props="detail_dialog_props" />
    </v-card-text>
  </v-card>
</template>

<script>
// @ is an alias to /src
import PackageDetailDialog from "@/components/PackageDetailDialog.vue";
export default {
  components: { PackageDetailDialog },
  data: () => {
    return {
      detail_dialog_props: {
        visible: false,
        rec: {}
      },
      table_headers: [
        { text: "Package Name", value: "name", align: "start", sortable: true },
        {
          text: "Pakcage Category",
          value: "category",
          align: "start",
          sortable: true
        },
        {
          text: "Price",
          value: "price",
          align: "start",
          sortable: true
        },
        { text: "View", value: "view", align: "center", sortable: false },
        { text: "Edit", value: "edit", align: "center", sortable: false },
        { text: "Delete", value: "delete", align: "center", sortable: false }
      ],
      table_items: [
        {
          name: "Honeymoon Plus",
          category: "Couple Package",
          price: "$250/Couple"
        },
        {
          name: "Best Plus for 4",
          category: "Friends Package",
          price: "$50/Person"
        },
        {
          name: "Honeymoon Plus",
          category: "Couple Package",
          price: "$250/Couple"
        },
        {
          name: "Best Plus for 4",
          category: "Friends Package",
          price: "$50/Person"
        },
        {
          name: "Honeymoon Plus",
          category: "Couple Package",
          price: "$250/Couple"
        },
        {
          name: "Best Plus for 4",
          category: "Friends Package",
          price: "$50/Person"
        },
        {
          name: "Honeymoon Plus",
          category: "Couple Package",
          price: "$250/Couple"
        },
        {
          name: "Best Plus for 4",
          category: "Friends Package",
          price: "$50/Person"
        },
        {
          name: "Honeymoon Plus",
          category: "Couple Package",
          price: "$250/Couple"
        },
        {
          name: "Best Plus for 4",
          category: "Friends Package",
          price: "$50/Person"
        }
      ]
    };
  },
  methods: {
    viewItem(item) {
      this.detail_dialog_props.rec = item;
      this.detail_dialog_props.visible = true;
    },
    editItem(item) {
      // this.detail_dialog_props.rec = item;
      // this.detail_dialog_props.visible = true;
      this.$router.push({ name: "PackageAllEdit", params: item });
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
