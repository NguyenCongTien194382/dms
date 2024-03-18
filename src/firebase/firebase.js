// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJ-8_quZu8NQs6WPDjM13Cy6iCWJ1Ga28",
    authDomain: "authentication-fcb03.firebaseapp.com",
    projectId: "authentication-fcb03",
    storageBucket: "authentication-fcb03.appspot.com",
    messagingSenderId: "520929895510",
    appId: "1:520929895510:web:d99f76109afdd9173707f7",
    measurementId: "G-ZKM7KSQ6RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { app, auth }