import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBhheeihI-YxVq4VFARACC5kvTfjW-Z6oc",
  authDomain: "linkedin-clone-7f2b6.firebaseapp.com",
  projectId: "linkedin-clone-7f2b6",
  storageBucket: "linkedin-clone-7f2b6.appspot.com",
  messagingSenderId: "579932927086",
  appId: "1:579932927086:web:ba00696724794d4baaa27f",
  measurementId: "G-E2QB746B9Z",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
