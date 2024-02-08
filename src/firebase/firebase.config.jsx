// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5pbgmU1KeITcLYXYT1OPVum2Aadd92PU",
  authDomain: "maktabatul-amzad-client-9becf.firebaseapp.com",
  projectId: "maktabatul-amzad-client-9becf",
  storageBucket: "maktabatul-amzad-client-9becf.appspot.com",
  messagingSenderId: "861785925167",
  appId: "1:861785925167:web:660d5b7622488a3cec88da",
  measurementId: "G-TVSCQ9JQ9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
