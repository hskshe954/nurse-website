import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE5ywhI70ukdo_SREris2iHBrWUHEk6Ko",
  authDomain: "nurse-website-341b8.firebaseapp.com",
  projectId: "nurse-website-341b8",
  storageBucket: "nurse-website-341b8.firebasestorage.app",
  messagingSenderId: "815677117148",
  appId: "1:815677117148:web:45b1cd415463adf1e9da19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore (this is what we need)
export const db = getFirestore(app);