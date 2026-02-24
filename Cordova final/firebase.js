import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyACayq-hoclH5LC6RxMOUj2znJUKvEZMQo",
  authDomain: "seances-de-sport.firebaseapp.com",
  projectId: "seances-de-sport",
  storageBucket: "seances-de-sport.firebasestorage.app",
  messagingSenderId: "697865201415",
  appId: "1:697865201415:web:a9469602011320d01047a2",
  measurementId: "G-LJ6RF27SLC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
