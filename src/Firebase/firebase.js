// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChCNiietNIutNwrk5WS5GxX6oBFCu3iyA",
  authDomain: "e-commerce-yt-43b16.firebaseapp.com",
  projectId: "e-commerce-yt-43b16",
  storageBucket: "e-commerce-yt-43b16.appspot.com",
  messagingSenderId: "425614570406",
  appId: "1:425614570406:web:8d7d82828687e99e145567"
};



// Initialize Firebase
const app = getApps.length?getApp():initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
export {auth};

export default db;