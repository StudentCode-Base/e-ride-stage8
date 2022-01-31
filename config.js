import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCvtSBEYVUYQwptCj8A4fnwbvb3pVtvPJQ",
  authDomain: "e-ride-b640f.firebaseapp.com",
  projectId: "e-ride-b640f",
  storageBucket: "e-ride-b640f.appspot.com",
  messagingSenderId: "936488437670",
  appId: "1:936488437670:web:13f90b5575ffe40b6bf167"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
