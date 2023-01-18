import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALOFOOLww9Ck8Y7kQZKJTbeR-g0BNOpxk",
  authDomain: "chat-app-84efc.firebaseapp.com",
  projectId: "chat-app-84efc",
  storageBucket: "chat-app-84efc.appspot.com",
  messagingSenderId: "903459027607",
  appId: "1:903459027607:web:2dd698dcb9c7cd4e3187d2",
  measurementId: "G-DKS10964TX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
