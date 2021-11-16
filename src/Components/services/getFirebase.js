import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEM1XSJpLXiArCLi2oHqcwZTrB7RzWa8g",

  authDomain: "react-coderhouse-sergiomarino.firebaseapp.com",

  projectId: "react-coderhouse-sergiomarino",

  storageBucket: "react-coderhouse-sergiomarino.appspot.com",

  messagingSenderId: "988914206611",

  appId: "1:988914206611:web:022bf58f9a8695286aca66",
};
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
