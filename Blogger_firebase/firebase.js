// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ipjk3wclJhadWDtBLGfCdha9mnexWv8",
  authDomain: "fir-e1bca.firebaseapp.com",
  projectId: "fir-e1bca",
  storageBucket: "fir-e1bca.firebasestorage.app",
  messagingSenderId: "71603514665",
  appId: "1:71603514665:web:c3412fad140e7e21f01b38",
  measurementId: "G-ZXSDTYEW9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);