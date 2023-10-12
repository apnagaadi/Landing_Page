// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8KYp6ZO8R13Q0pRxXVK3ddDpDRfq-_GI",
  authDomain: "apnagaadi-54d86.firebaseapp.com",
  projectId: "apnagaadi-54d86",
  storageBucket: "apnagaadi-54d86.appspot.com",
  messagingSenderId: "298410502233",
  appId: "1:298410502233:web:68363f87726baca44be948",
  measurementId: "G-QXEWLZBJ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);