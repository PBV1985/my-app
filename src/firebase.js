import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZs6K3Pi81vDpMj6CvMGpO5_GutB7_xZU",
  authDomain: "project123-c47b4.firebaseapp.com",
  databaseURL: "https://project123-c47b4-default-rtdb.firebaseio.com",
  projectId: "project123-c47b4",
  storageBucket: "project123-c47b4.appspot.com",
  messagingSenderId: "695027717744",
  appId: "1:695027717744:web:d45ce43a6e403f958a86b5",
  measurementId: "G-YMQVM3351N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);