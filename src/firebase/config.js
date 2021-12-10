import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY5FsjlGicwjXIVZa7Pu89PIkvYpeFX7M",
  authDomain: "cooking-ninja-92284.firebaseapp.com",
  projectId: "cooking-ninja-92284",
  storageBucket: "cooking-ninja-92284.appspot.com",
  messagingSenderId: "85042714447",
  appId: "1:85042714447:web:3a69d11505d577b162973a",
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();

export { projectFirestore };
