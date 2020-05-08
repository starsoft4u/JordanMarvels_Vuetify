import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/components';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import "./assets/scss/main.scss";
Vue.config.productionTip = false
import App from './App.vue'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
