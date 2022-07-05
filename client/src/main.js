import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import Vuelidate from 'vuelidate'

window.Buffer = window.Buffer || require("buffer").Buffer;


Vue.use(VueToast);
Vue.use(Vuelidate)
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
