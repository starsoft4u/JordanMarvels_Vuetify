<template>
  <v-card class="ma-12">
    <v-card-title class="justify-center text-uppercase">Add New customer</v-card-title>
    <v-card-subtitle class="text-center">Please add the details as per the given form</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="5" lg="4">
          <label @drop.prevent="onDropCustomerImage" @dragover.prevent>
            <img
              ref="customer_image"
              src="../../assets/images/ic_input_username.svg"
              width="300"
              height="300"
              style="border:1px solid grey;"
            />
            <input
              type="file"
              class="hidden"
              accept="image/png, image/jpeg"
              @change="onChangeCustomerImage"
            />
          </label>
        </v-col>
        <v-col cols="12" md="7" lg="8">
          <v-text-field v-model="rec.name" label="Full Name" outlined dense hide-details />
          <v-text-field v-model="rec.email" label="Email Address" outlined dense hide-details class="mt-4" />
          <div>Mobile Number</div>
          <vue-tel-input
            v-model="rec.mobile_number"
            label="Mobile Number"
            dynamicPlaceholder
            enabledCountryCode
            validCharactersOnly
            ref="vue_tel_input"
          ></vue-tel-input>
          <v-autocomplete
            v-model="rec.country"
            label="Country"
            :items="allCountries"
            item-value="iso2"
            outlined
            dense
            hide-details
            height="30"
            :filter="customFilter"
            class="mt-4"
          >
            <template slot="selection" slot-scope="data">
              <!-- HTML that describe how select should render items when the select is open -->
              <country-flag :country="data.item.iso2" size="small" />
              {{ data.item.name }} - {{ data.item.iso2 }}
            </template>
            <template slot="item" slot-scope="data">
              <!-- HTML that describe how select should render items when the select is open -->
              <country-flag :country="data.item.iso2" size="small" />
              {{ data.item.name }} - {{ data.item.iso2 }}
            </template>
          </v-autocomplete>
          <v-text-field type="password" v-model="rec.password" label="Password" outlined dense hide-details class="mt-4" />
          <v-text-field
            type="password"
            v-model="rec.password_confirm"
            label="Confirm Password"
            outlined
            dense
            hide-details class="mt-4"
          />
          <v-textarea v-model="rec.address" label="Complete Address" outlined dense class="mt-4" hide-details />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="justify-space-around">
      <v-btn color="#FFC11F" append to="success">Add Customer Now</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src
import countries from "../../plugins/countries";

export default {
  components: {},
  data: () => {
    return {
      rec: {
        name: "",
        email: "",
        password: "",
        pardword_confirm: "",
        photo: "",
        joined_date: "",
        bookings_no: "",
        mobile_number: "",
        country: "",
        address: ""
      },
      allCountries: []
    };
  },
  created() {
    this.allCountries = countries.map(c => {
      return { name: c[0], iso2: c[1], dialCode: c[2] };
    });
  },
  methods: {
    customFilter(item, queryText, itemText) {
      const name = item.name.toLowerCase();
      const searchText = queryText.toLowerCase();

      return name.indexOf(searchText) > -1;
    },
    onDropCustomerImage(e) {
      let files = e.dataTransfer.files;
      if (files && files[0]) {
        const refs = this.$refs;
        const reader = new FileReader();
        reader.onload = function(e) {
          refs.customer_image.src = e.target.result;
        };

        reader.readAsDataURL(files[0]);
      }
    },
    onChangeCustomerImage(e) {
      const input = e.srcElement || e.target;
      if (input && input.files && input.files[0]) {
        const refs = this.$refs;
        const reader = new FileReader();
        reader.onload = function(e) {
          refs.customer_image.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    }
  }
};
</script>
