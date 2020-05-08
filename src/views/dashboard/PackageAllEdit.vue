<template>
  <v-card class="ma-12 pa-8">
    <v-card-title class="justify-center text-uppercase">Edit Package</v-card-title>
    <v-card-subtitle class="text-center">Fill the requried information to add new package</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="5" lg="4">
          <div>Package Image Banner (Size 4Mb Max)</div>
          <label @drop.prevent="onDropBannerImage" @dragover.prevent>
            <img
              ref="banner_image"
              src="../../assets/images/ic_input_username.svg"
              width="200"
              height="200"
              style="border:1px solid grey;"
            />
            <input
              type="file"
              class="hidden"
              accept="image/png, image/jpeg"
              @change="onChangeBannerImage"
            />
          </label>
        </v-col>
        <v-col cols="12" md="7" lg="8">
          <v-text-field v-model="rec.name" label="Package Name" outlined dense hide-details />

          <v-textarea
            v-model="rec.description"
            label="Package Description"
            outlined
            dense
            class="mt-4"
            hide-details
          />
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="rec.price" label="Package Price" outlined dense hide-details />
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                v-model="rec.category"
                label="Package Category"
                :items="categories"
                outlined
                dense
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                v-model="rec.location"
                label="Trip Location"
                :items="locations"
                outlined
                dense
                hide-details
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div>
        <div>
          <span class="label">Package Photo Gallery</span>
          <span
            class="label_description"
          >(.jpg, .png extension only, Size 15Mb Max, 8 Pictures only)</span>
        </div>
        <label
          @drop.prevent="dropGalleryFiles"
          @dragover.prevent
          class="photos-box d-flex justify-space-around align-center"
        >
          <div class="text-center" style="width:150px;">
            <input
              type="file"
              multiple="true"
              accept="image/png, image/jpeg"
              class="hidden"
              @change="changeGalleryPhotos"
            />
            <div>
              <img src="../../assets/images/ic_drag_drop.svg" />
            </div>
            <div>Drag & Drop Files</div>
          </div>
          <div class="text-center" style="width:150px;">OR</div>
          <div>
            <v-btn text outlined width="150">Choose File</v-btn>
          </div>
        </label>
        <v-progress-linear :value="75" color="#c7b299" class="mt-4"></v-progress-linear>
        <div class="progress-info d-flex justify-space-between">
          <div style="text-align:left;">5/8 images Uploading...</div>
          <div class="form-inline" style="text-align:right;">
            Cancel Upload
            <v-icon @click="cancelGalleryUploading">mdi-close-circle</v-icon>
          </div>
        </div>
        <div class="photos-preview d-flex flex-wrap">
          <div v-for="(photo,index) in photos" :key="index" class="pp d-flex">
            <img :src="photo" class="photo-image" />
            <img
              src="../../assets/images/ic_close_white.svg"
              class="close-icon"
              @click="removeGalleryPhoto(index)"
            />
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-actions class="justify-space-around">
      <v-btn color="#FFC11F" append to="success">Save Package Now</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},

  mounted() {
    this.rec = this.$route.params;
  },
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
      photos: [],
      categories: ["Category1", "Category2"],
      locations: ["Location 1", "Location 2"]
    };
  },
  methods: {
    customFilter(item, queryText, itemText) {
      const name = item.name.toLowerCase();
      const searchText = queryText.toLowerCase();

      return name.indexOf(searchText) > -1;
    },
    onDropBannerImage(e) {
      let files = e.dataTransfer.files;
      if (files && files[0]) {
        const refs = this.$refs;
        const reader = new FileReader();
        reader.onload = function(e) {
          refs.banner_image.src = e.target.result;
        };

        reader.readAsDataURL(files[0]);
      }
    },
    onChangeBannerImage(e) {
      const input = e.srcElement || e.target;
      if (input && input.files && input.files[0]) {
        const refs = this.$refs;
        const reader = new FileReader();
        reader.onload = function(e) {
          refs.banner_image.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    },
    changeGalleryPhotos(e) {
      const input = e.srcElement || e.target;
      if (input && input.files && input.files.length > 0) {
        const photos = this.photos;
        for (let i = 0; i < input.files.length; i++) {
          const reader = new FileReader();
          reader.onload = function(e) {
            photos.push(e.target.result);
          };
          reader.readAsDataURL(input.files[i]);
        }
      }
    },
    dropGalleryFiles(e) {
      console.log(e);
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      const photos = this.photos;
      [...droppedFiles].forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
          photos.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
    cancelGalleryUploading() {
      this.$confirm("Cancel Uploading?").then(res => {
        if (res) {
          console.log("canceled");
        }
      });
    },
    removeGalleryPhoto(index) {
      if (index < this.photos.length) {
        this.photos.splice(index, 1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.photos-box {
  height: 80px;
  background: rgba(199, 178, 153, 0.0898164);
  border: 1px dashed rgba(80, 71, 60, 0.256419);
  box-sizing: border-box;
  div {
    margin: auto;
  }
}
.progress-info {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  color: #50473c;
}
.photos-preview {
  div {
    margin-right: 16px;
    margin-bottom: 16px;
    width: 90px;
    height: 90px;
    .photo-image {
      width: 90px;
      height: 90px;
    }
    .close-icon {
      width: 32px;
      height: 32px;
      margin-left: -32px;
      display: none;
    }
  }
  .pp:hover {
    .close-icon {
      display: block;
    }
  }
}
</style>
