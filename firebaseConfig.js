// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyaY4JRjDrLbSdbyCmD-RHXLypnNNDAdk",
  authDomain: "adroit-producer-390710.firebaseapp.com",
  projectId: "adroit-producer-390710",
  storageBucket: "adroit-producer-390710.appspot.com",
  messagingSenderId: "105170235728",
  appId: "1:105170235728:web:b4c2c8b37b2b8f41f07c55",
  measurementId: "G-992BN1300W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

