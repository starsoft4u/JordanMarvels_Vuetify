<template>
  <v-dialog v-model="props.visible" width="800" @keydown.esc="cancel">
    <v-card>
      <div class="customer-edit d-flex">
        <div class="left-box d-flex flex-column">
          <div class="left-top-box"></div>
          <div class="left-bottom-box"></div>
        </div>
        <div class="photo-box">
          <div class="photo">
            <label @drop.prevent="onDropCustomerImage" @dragover.prevent>
              <img
                ref="customer_image"
                src="../assets/images/ic_input_username.svg"
                width="124"
                height="124"
                style="border:1px solid grey;border-radius:50%;"
              />
              <input
                type="file"
                class="hidden"
                accept="image/png, image/jpeg"
                @change="onChangeCustomerImage"
              />
            </label>
            <div>
              <v-text-field v-model="props.rec.name" label="Full Name" dark />
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="d-flex justify-space-between">
            <div></div>
            <h3 class="pt-4">{{props.mode=='add'?'Add New ':'Edit '}}Customer</h3>
            <v-btn icon @click="props.visible=false" class="ma-2">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="pa-5">
            <div class="mt-8">
              <div>Date Joined</div>
              <v-text-field v-model="props.rec.joined_date" outlined hide-details dense />
            </div>
            <div class="mt-4">
              <div>Number of bookings</div>
              <v-text-field v-model="props.rec.bookings_no" outlined hide-details dense />
            </div>
            <div class="mt-4">
              <div>Email Address</div>
              <v-text-field v-model="props.rec.email" outlined hide-details dense />
            </div>
            <div class="mt-4">
              <div>Mobile Number</div>
              <vue-tel-input
                v-model="props.rec.mobile_number"
                dynamicPlaceholder
                enabledCountryCode
                validCharactersOnly
              ></vue-tel-input>
            </div>
            <div class="mt-4">
              <div>Country</div>

              <v-autocomplete
                v-model="props.rec.country"
                :items="allCountries"
                item-value="iso2"
                outlined
                hide-details
                dense
                height="30"
                :filter="customFilter"
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
            </div>
            <div class="mt-4">
              <div>Complete Address</div>
              <v-text-field v-model="props.rec.address" outlined hide-details dense />
            </div>
          </div>
          <v-divider class="mt-2" />
          <div class="pa-5">
            <div class="d-flex justify-space-around">
              <v-btn text outlined color="#C7B299" @click="onClickSave">
                <span class="mx-4">Save</span>
                <v-icon>fas fa-save</v-icon>
              </v-btn>
              <v-btn text outlined color="#C7B299" @click="props.visible=false">
                <span class="mx-4">Cancel</span>
                <v-icon>fas fa-user-edit</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card>
    <success-dialog :props="success_dialog_props" />
  </v-dialog>
</template>

<script>
import countries from "../plugins/countries";
import SuccessDialog from "./SuccessDialog.vue";
export default {
  components: { SuccessDialog },
  props: ["props"],
  data: () => ({
    allCountries: [],
    success_dialog_props: {
      visible: false,
      text: "",
      strong: ""
    }
  }),

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
          console.log(refs.customer_image.src );
        };

        reader.readAsDataURL(input.files[0]);
      }
    },
    onClickSave() {
      if (this.props.mode == "add") {
        this.success_dialog_props.text1 = "The new user";
        this.success_dialog_props.strong = "Jack Mark";
        this.success_dialog_props.text2 = "has been added successfully";
      } else {
        this.success_dialog_props.text1 = "The user";
        this.success_dialog_props.strong = "Jack Mark";
        this.success_dialog_props.text2 = "has been saved successfully";
      }
      this.props.visible = false;
      this.success_dialog_props.visible = true;
      // this.resolve(true);
      // this.dialog = false;
    },
    cancel() {
      // this.resolve(false);
      this.dialog = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.customer-edit {
  overflow: hidden;
  .left-box {
    width: 226px;
    .left-top-box {
      height: 189px;
      background-color: #50473c;
    }
    .left-bottom-box {
      flex-grow: 1;
      min-height: 415px;
      background-color: #c7b299;
    }
  }
  .photo-box {
    width: 226px;
    margin-inline-start: -226px;
    .photo {
      width: 124px;
      margin: 127px auto auto auto;
      color: white;
      text-align: center;
      img {
        background-color: white;
        border-radius: 50%;
      }
    }
  }
  .content-box {
    flex: 1;
  }
}
</style>