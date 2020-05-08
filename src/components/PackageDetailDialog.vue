<template>
  <v-dialog v-model="props.visible" width="800" @keydown.esc="cancel">
    <v-card>
      <div class="package-detail d-flex">
        <div class="left-box d-flex flex-column">
          <div class="left-top-box"></div>
          <div class="left-bottom-box"></div>
        </div>
        <div class="photo-box">
          <div class="photo">
            <img
              src="../assets/images/ic_input_username.svg"
              width="124"
              height="124"
              style="border:1px solid grey;border-radius:50%;"
            />
            <div>Package Name</div>
            <div>{{props.rec.name}}</div>
          </div>
        </div>
        <div class="content-box">
          <div class="d-flex justify-space-between">
            <div></div>
            <h3 class="pt-4">Package Details</h3>
            <v-btn icon @click="props.visible=false" class="ma-2">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="pa-5">
            <div class="mt-8">
              <div class="label">Package Description</div>
              <div>Discover UNESCO–listed heritage and ancient treasures from a lost civilization on this Petra day trip from Amman. Visit the UNESCO–listed city of .</div>
            </div>
            <v-row class="mt-4">
              <v-col cols="12" md="4">
                <div class="label">Package Price</div>
                <div>{{props.rec.price}}</div>
              </v-col>
              <v-col cols="12" md="4">
                <div class="label">Package Category</div>
                <div>{{props.rec.category}}</div>
              </v-col>
              <v-col cols="12" md="4">
                <div class="label">Package Location</div>
                <div>{{props.rec.location}}</div>
              </v-col>
            </v-row>
            <div class="mt-4">
              <div class="label">Package Photo Gallery</div>
              <v-row>
                <v-col cols="6" md="3">
                  <img src="@/assets/images/img1.png" width="100%" />
                </v-col>
                <v-col cols="6" md="3">
                  <img src="@/assets/images/img2.png" width="100%" />
                </v-col>
                <v-col cols="6" md="3">
                  <img src="@/assets/images/img1.png" width="100%" />
                </v-col>
                <v-col cols="6" md="3">
                  <img src="@/assets/images/img2.png" width="100%" />
                </v-col>
                <v-col cols="6" md="3">
                  <img src="@/assets/images/img1.png" width="100%" />
                </v-col>
                <v-col cols="6" md="3">
                  <img src="@/assets/images/img2.png" width="100%" />
                </v-col>
                <v-col cols="6" md="3">
                  <img src="@/assets/images/img1.png" width="100%" />
                </v-col>
                <v-col cols="6" md="3">
                  <img src="@/assets/images/img2.png" width="100%" />
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="pa-5">
            <div class="d-flex justify-space-around">
              <v-btn text outlined color="#C7B299">
                <span class="mx-4">Edit Package</span>
                <v-img src="@/assets/images/ic_user_edit.svg"></v-img>
              </v-btn>
              <v-btn text outlined color="#C7B299">
                <span class="mx-4">Delete Package</span>
                <v-img src="@/assets/images/ic_package_delete.svg"></v-img>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {},
  props: ["props"],
  data: () => ({}),

  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.package-detail {
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
    
    .label {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;

      color: #50473c;

      mix-blend-mode: normal;
      opacity: 0.37;
    }
  }
}
</style>