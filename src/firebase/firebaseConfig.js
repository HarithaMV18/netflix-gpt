// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3d9jHHDtSJgRPrr7cSW_bJi6K9lngBj4",
  authDomain: "netflix-gpt-4353a.firebaseapp.com",
  projectId: "netflix-gpt-4353a",
  storageBucket: "netflix-gpt-4353a.appspot.com",
  messagingSenderId: "775943499238",
  appId: "1:775943499238:web:4ad18757acb78d52533a27",
  measurementId: "G-26GBBGRRNN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();