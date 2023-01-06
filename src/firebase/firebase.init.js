// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBM22JxkzvWv84JT4_VXb5vAIfFW6WJZJc",
    authDomain: "doctors-portal-99783.firebaseapp.com",
    projectId: "doctors-portal-99783",
    storageBucket: "doctors-portal-99783.appspot.com",
    messagingSenderId: "834371107955",
    appId: "1:834371107955:web:a7943b0e81b47cf4863e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;