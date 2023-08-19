import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBAzmruHG90NVKEo9ahJIAsZsWjCJZjhoI",
  authDomain: "netflix-clone-92b71.firebaseapp.com",
  projectId: "netflix-clone-92b71",
  storageBucket: "netflix-clone-92b71.appspot.com",
  messagingSenderId: "872143217405",
  appId: "1:872143217405:web:cb4b5212408a418fdfd494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)