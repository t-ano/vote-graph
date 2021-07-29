import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "vote-graph.firebaseapp.com",
  projectId: "vote-graph",
  storageBucket: "vote-graph.appspot.com",
  messagingSenderId: process.env.VUE_APP_MESSAG_INGSEND_SENDER_ID,
  appId: process.env.VUE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  firebase,
  render: h => h(App),
}).$mount('#app')
