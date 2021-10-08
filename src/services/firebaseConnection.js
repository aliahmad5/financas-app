import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCwNxrQf1OeymA7TNclOerhMAnvdMfekps",
    authDomain: "meuapp-f38a6.firebaseapp.com",
    databaseURL: "https://meuapp-f38a6-default-rtdb.firebaseio.com",
    projectId: "meuapp-f38a6",
    storageBucket: "meuapp-f38a6.appspot.com",
    messagingSenderId: "620034199580",
    appId: "1:620034199580:web:8cce94e632792b02804fd9",
    measurementId: "G-V4LG1H5DFM"
  };
  

if(!firebase.apps.length){

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
  
export default firebase;