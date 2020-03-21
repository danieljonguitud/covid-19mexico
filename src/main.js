import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/styles.css'
import axios from 'axios'

Vue.config.productionTip = false

window.axios = axios
axios.defaults.baseURL = ''

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
