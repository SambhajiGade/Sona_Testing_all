import Vue from 'vue'
import App from './App.vue'
// import * as firebase from './firebase'
// import { initializeApp } from "firebase/app";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";



import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),

// created(){
//   firebase.intializeApp({
//     apiKey: "AIzaSyB4_XcLML_dAD1HenoVnxFaMYmBQU7G-_k",
//     authDomain: "projectmain-2ee04.firebaseapp.com",
//     projectId: "projectmain-2ee04",
//     storageBucket: "projectmain-2ee04.appspot.com",
//     messagingSenderId: "620079050243",
//     appId: "1:620079050243:web:6ac9b0f5ae23514ef3e836",
//     measurementId: "G-KCJWK56R69"
//   })
// }

})
.$mount('#app')

// const config = {
//   apiKey: "AIzaSyB4_XcLML_dAD1HenoVnxFaMYmBQU7G-_k",
//   authDomain: "projectmain-2ee04.firebaseapp.com",
//   projectId: "projectmain-2ee04",
//   storageBucket: "projectmain-2ee04.appspot.com",
//   messagingSenderId: "620079050243",
//   appId: "1:620079050243:web:6ac9b0f5ae23514ef3e836",
//   measurementId: "G-KCJWK56R69"
// };

// // Initialize Firebase
// // const fb = firebase.initializeApp(config);

// //  const db = firebase.firestore();


// // export  {fb,db};


// firebase.initializeApp(config);

