// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSlO-pKc1QNbnbbI-VWmbrIYbd9tnFIVc",
  authDomain: "web-financial-ledger-gyk.firebaseapp.com",
  projectId: "web-financial-ledger-gyk",
  storageBucket: "web-financial-ledger-gyk.firebasestorage.app",
  messagingSenderId: "734995357476",
  appId: "1:734995357476:web:7deea41ddcfa7e2b981db1",
  measurementId: "G-VRZ9PZ98L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }