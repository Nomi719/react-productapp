// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyUqvXk-NtITaF1ifytbyzaGqYu9CsIss",
  authDomain: "fir-project-fd16f.firebaseapp.com",
  projectId: "fir-project-fd16f",
  storageBucket: "fir-project-fd16f.appspot.com",
  messagingSenderId: "600748237837",
  appId: "1:600748237837:web:b166dd8083fcf6d4bb2144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
     auth, app
}