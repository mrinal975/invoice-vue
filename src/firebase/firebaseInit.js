import { initializeApp } from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB3DNEC2DuY7r-3VDP5ja11rZwhUGvm9Mc",
  authDomain: "invoice-app-41688.firebaseapp.com",
  projectId: "invoice-app-41688",
  storageBucket: "invoice-app-41688.appspot.com",
  messagingSenderId: "609754410894",
  appId: "1:609754410894:web:97e6a528fe4d5e7e353edf",
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp.firestore();
