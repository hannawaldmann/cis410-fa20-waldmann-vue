import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import store from './store.js'
import router from './routes.js'


axios.defaults.baseURL = "https://cis410-fa20-waldmann-api.azurewebsites.net";
// axios.defaults.baseURL = "http://localhost:5000";


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
