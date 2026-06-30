// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC5c_dOrp0afd_NIYnyf_0bbxCCX4SUt6M",
  authDomain: "rs-company-profile.firebaseapp.com",
  projectId: "rs-company-profile",
  storageBucket: "rs-company-profile.firebasestorage.app",
  messagingSenderId: "264151389585",
  appId: "1:264151389585:web:1756e7dcfcec6dc59bf630",
  measurementId: "G-KWZDTVR62N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Auth and DB
export const auth = getAuth(app);
export const db = getFirestore(app);
