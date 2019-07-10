import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAGaBdgfNBbTBajUHwEsP1BKFVTVvSgDdY",
  authDomain: "coinlotto-22caa.firebaseapp.com",
  databaseURL: "https://coinlotto-22caa.firebaseio.com",
  projectId: "coinlotto-22caa",
  storageBucket: "",
  messagingSenderId: "689485649819",
  appId: "1:689485649819:web:3fadf906da43d0b8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
