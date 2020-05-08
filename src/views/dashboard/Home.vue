<template>
  <div class="ma-12">
    <v-row>
      <v-col md="4">
        <div class="info-box v-card d-flex white pa-8">
          <div class="mr-8">
            <v-img src="../../assets/images/ic_visitors.svg" width="45" height="45" />
          </div>
          <div class="d-flex flex-column">
            <div>Today Visitors</div>
            <div>20,000</div>
            <v-spacer />
            <div>
              <v-btn text outlined>View Details</v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="4">
        <div class="info-box v-card d-flex white pa-8">
          <div class="mr-8">
            <v-img src="../../assets/images/ic_earnings.svg" width="45" height="45" />
          </div>
          <div class="d-flex flex-column">
            <div>Today Earnings</div>
            <div>$10,000</div>
            <v-spacer />
            <div>
              <v-btn text outlined>View Details</v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="4">
        <div class="info-box v-card d-flex white pa-8">
          <div class="mr-8">
            <v-img src="../../assets/images/ic_calendar.svg" width="45" height="45" />
          </div>
          <div class="d-flex flex-column">
            <div>Today bookings</div>
            <div>4,525</div>
            <v-spacer />
            <div>
              <v-btn text outlined>View Details</v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="4">
        <div class="info-box v-card d-flex white pa-8">
          <div class="mr-8">
            <v-img src="../../assets/images/ic_email_brown.svg" width="45" height="45" />
          </div>
          <div class="d-flex flex-column">
            <div>Today Inquires</div>
            <div>4,300</div>
            <v-spacer />
            <div>
              <v-btn text outlined>View Details</v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="4">
        <div class="info-box v-card d-flex white pa-8">
          <div class="mr-8">
            <v-img src="../../assets/images/ic_totalusers.svg" width="45" height="45" />
          </div>
          <div class="d-flex flex-column">
            <div>Total users</div>
            <div>36,000</div>
            <v-spacer />
            <div>
              <v-btn text outlined>View Details</v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="4">
        <div class="info-box v-card d-flex white pa-8">
          <div class="mr-8">
            <v-img src="../../assets/images/ic_newusers.svg" width="45" height="45" />
          </div>
          <div class="d-flex flex-column">
            <div>New users</div>
            <div>2,541</div>
            <v-spacer />
            <div>
              <v-btn text outlined>View Details</v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row style="background-color:rgb(199,178,153,.1);">
      <v-col cols="12" sm="8" md="10">Country Name</v-col>
      <v-col cols="12" sm="4" md="2">No.of Users</v-col>
    </v-row>
    <v-row class="white">
      <v-col cols="12" sm="8" md="10" class="d-flex">
        <img src="../../assets/flags/QA.png" width="28" height="20" class="mr-4" />
        <div>United Kindom</div>
      </v-col>
      <v-col cols="12" sm="4" md="2">36,00325</v-col>
    </v-row>
    <v-row class="white">
      <v-col cols="12" sm="8" md="10" class="d-flex">
        <img src="../../assets/flags/GB.png" width="28" height="20" class="mr-4" />
        <div>Australia</div>
      </v-col>
      <v-col cols="12" sm="4" md="2">36,00325</v-col>
    </v-row>
    <v-row class="white">
      <v-col cols="12" sm="8" md="10" class="d-flex">
        <img src="../../assets/flags/US.png" width="28" height="20" class="mr-4" />
        <div>United Sates of America</div>
      </v-col>
      <v-col cols="12" sm="4" md="2">36,00325</v-col>
    </v-row>
    <v-row class="white">
      <v-col cols="12" sm="8" md="10" class="d-flex">
        <img src="../../assets/flags/SA.png" width="28" height="20" class="mr-4" />
        <div>Saudi Arabia</div>
      </v-col>
      <v-col cols="12" sm="4" md="2">36,00325</v-col>
    </v-row>
    <v-row class="white">
      <v-col cols="12" sm="8" md="10" class="d-flex">
        <img src="../../assets/flags/ZA.png" width="28" height="20" class="mr-4" />
        <div>South Aferica</div>
      </v-col>
      <v-col cols="12" sm="4" md="2">36,00325</v-col>
    </v-row>
    <v-row class="white">
      <v-col cols="12" sm="8" md="10" class="d-flex">
        <img src="../../assets/flags/IL.png" width="28" height="20" class="mr-4" />
        <div>Israel</div>
      </v-col>
      <v-col cols="12" sm="4" md="2">36,00325</v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {}
};
</script>
<style lang="scss" scoped>
.info-box {
  min-height: 187px;
  min-width: 200px;
}
</style>
