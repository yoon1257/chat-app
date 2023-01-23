import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBt5mdAQdBzfQ1SzQe7akysxU5-VcQszXI",
  authDomain: "happy-chat-50d62.firebaseapp.com",
  databaseURL:
    "https://happy-chat-50d62-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "happy-chat-50d62",
  storageBucket: "happy-chat-50d62.appspot.com",
  messagingSenderId: "1095548054131",
  appId: "1:1095548054131:web:347f78db02d2aaabfa5806",
  measurementId: "G-CY27VSZ4T6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
