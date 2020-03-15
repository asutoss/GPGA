import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDT1qj2H_KunwRrxQXhP3h_6V6A9FRJhks",
    authDomain: "gpga-3855f.firebaseapp.com",
    databaseURL: "https://gpga-3855f.firebaseio.com",
    projectId: "gpga-3855f",
    storageBucket: "gpga-3855f.appspot.com",
    messagingSenderId: "389843547884",
    appId: "1:389843547884:web:701010df42564d9627d7c9",
    measurementId: "G-09SSQXX2VS"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export default database ;