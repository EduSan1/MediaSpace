import React from "react";


//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// [https://firebase.google.com/docs/web/setup#available-libraries](https://firebase.google.com/docs/web/setup#available-libraries)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDikG-9Z4PnUDQnNyJgUG_ft94q1PqsHVI",
authDomain: "[mediaspace-f3421.firebaseapp.com](http://mediaspace-f3421.firebaseapp.com/)",
projectId: "mediaspace-f3421",
storageBucket: "[mediaspace-f3421.appspot.com](http://mediaspace-f3421.appspot.com/)",
messagingSenderId: "219667366921",
appId: "1:219667366921:web:d7264c2fcbc63ae2c7a4d8",
measurementId: "G-S4DG3606FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);