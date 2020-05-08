import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.use( Vuetify);

import VuetifyConfirm from 'vuetify-confirm'
const vuetify = new Vuetify({
  // icons: {
  //   iconfont: "md"
  // },
  // theme: { dark: true }
});
Vue.config.productionTip = false;
Vue.use(VuetifyConfirm,{vuetify})

export default new Vuetify({
  // theme: {
  //   options: {
  //     customProperties: true,
  //   },
  //   themes: {
  //     light: {
  //       primary: '#ee44aa',
  //       secondary: '#424242',
  //       accent: '#82B1FF',
  //       error: '#FF5252',
  //       info: '#2196F3',
  //       success: '#4CAF50',
  //       warning: '#FFC107'
  //     },
  //   },
  // },
});
