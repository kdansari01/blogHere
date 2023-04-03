import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCWOw2E-JpWSCjUfkeg-n1338Pg-H1qUU0",
  authDomain: "bolgshere.firebaseapp.com",
  databaseURL: "https://bolgshere-default-rtdb.firebaseio.com",
  projectId: "bolgshere",
  storageBucket: "bolgshere.appspot.com",
  messagingSenderId: "217567594676",
  appId: "1:217567594676:web:8f4a8f76ab85e5750fafe1",
  measurementId: "G-81M79TM898",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
