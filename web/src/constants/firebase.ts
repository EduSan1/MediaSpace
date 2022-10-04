// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOYnJlYJwgzTBVXok_wKhqN3J442SP5kU",
  authDomain: "mediaspace-35054.firebaseapp.com",
  projectId: "mediaspace-35054",
  storageBucket: "mediaspace-35054.appspot.com",
  messagingSenderId: "324674130858",
  appId: "1:324674130858:web:b843bd9c7da057a5e351d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);