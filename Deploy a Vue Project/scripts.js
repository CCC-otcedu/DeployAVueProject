/*
Chad Coburn
Deploy a Vue Project
CIS-131
11-29-21
*/

//importing the Vue project on
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).mount('#app')
