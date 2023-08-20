import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCGEVgXe2Kb2w_0tcfRZ6UB-kSlwyb6Z78",
  authDomain: "express-file-d7500.firebaseapp.com",
  projectId: "express-file-d7500",
  storageBucket: "express-file-d7500.appspot.com",
  messagingSenderId: "885238472598",
  appId: "1:885238472598:web:c284ae540abeed2aea87b7",
  measurementId: "G-NFGJPSPZ3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);