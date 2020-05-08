<template>
  <div class="menu-container">
    <div>
      <v-img src="../assets/logo2.svg" width="172" height="90" style="margin:29px 0 0 29px;" />
    </div>
    <v-list dark expand>
      <v-list-item link to="/dashboard/home">
        <v-list-item-icon>
          <v-img src="../assets/images/ic_menu_home.svg" />
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group no-action group="/dashboard/customer/">
        <template v-slot:activator>
          <v-list-item-icon>
            <v-img src="../assets/images/ic_menu_customer.svg" />
          </v-list-item-icon>
          <v-list-item-title>Customers</v-list-item-title>
        </template>

        <v-list-item link to="/dashboard/customer/all">
          <v-list-item-title>All Customers</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/dashboard/customer/add">
          <v-list-item-title>Add New Customer</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action group="/dashboard/package/|/dashboard/category/">
        <template v-slot:activator>
          <v-list-item-icon>
            <v-img src="../assets/images/ic_menu_tour_packages.svg" />
          </v-list-item-icon>
          <v-list-item-title>Tour Packages</v-list-item-title>
        </template>

        <v-list-item link to="/dashboard/package/all">
          <v-list-item-title>View All Packages</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/dashboard/package/add">
          <v-list-item-title>Add New Package</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/dashboard/category/all">
          <v-list-item-title>Packages Categories</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/dashboard/category/add">
          <v-list-item-title>Add Packages Category</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-item link to="/dashboard/packageinquiry">
        <v-list-item-icon>
          <v-img src="../assets/images/ic_menu_package_inquiry.svg" />
        </v-list-item-icon>

        <v-list-item-title>Packages Inquiry</v-list-item-title>
      </v-list-item>

      <v-list-group no-action group="/dashboard/discount/">
        <template v-slot:activator>
          <v-list-item-icon>
            <v-img src="../assets/images/ic_menu_discount.svg" />
          </v-list-item-icon>
          <v-list-item-title>Discounts</v-list-item-title>
        </template>

        <v-list-item link to="/dashboard/discount/all">
          <v-list-item-title>View All Discounts</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/dashboard/discount/add">
          <v-list-item-title>Add New Discount</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action group="/dashboard/booking|/dashboard/car/">
        <template v-slot:activator>
          <v-list-item-icon>
            <v-img src="../assets/images/ic_menu_booking.svg" />
          </v-list-item-icon>
          <v-list-item-title>Bookings</v-list-item-title>
        </template>

        <v-list-item link to="/dashboard/booking/tour/all">
          <v-list-item-title>Tour Bookings</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/dashboard/booking/car/all">
          <v-list-item-title>Car Bookings</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/dashboard/car/all">
          <v-list-item-title>View All Cars</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
    <v-spacer />
    <div class="text-center ma-4">
      <v-icon size="16" color="#c7b299">mdi-visibility</v-icon>
      <!-- <img src="../assets/images/ic_copyright2.svg" width="13" height="13" /> -->
      <span class="text-copyright ml-2">Copyright 2020. All Rights Reserved</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Menu",

  data: () => {
    return {};
  },
  methods: {
    handelItemClick(e: any) {
      console.log(e);
      console.log(e.target || e.srcElement);
    }
  }
});
</script>
<style lang="scss" scoped>
.menu-container {
  min-height: calc(100vh-24px);
  display: flex;
  flex-direction: column;
  .text-copyright {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: right;

    color: #c7b299;
  }
}
</style>
<style lang="scss">
.v-list-item--active {
  color: white !important;
}
a.v-list-item--active {
  background-color: #cca575;
}
</style>
