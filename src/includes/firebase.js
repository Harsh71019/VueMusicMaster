import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDU9dj-Lzm8StyV4GGF2s01oatcW3U18Uw",
  authDomain: "vue-music-harsh.firebaseapp.com",
  projectId: "vue-music-harsh",
  storageBucket: "vue-music-harsh.appspot.com",
  messagingSenderId: "754975123848",
  appId: "1:754975123848:web:a01c5245627b143d41723d",
};

//Initialize the Firebase App
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");

export { auth, db, storage, usersCollection, songsCollection };
