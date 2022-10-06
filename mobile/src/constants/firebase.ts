import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDOYnJlYJwgzTBVXok_wKhqN3J442SP5kU",
  authDomain: "mediaspace-35054.firebaseapp.com",
  projectId: "mediaspace-35054",
  storageBucket: "mediaspace-35054.appspot.com",
  messagingSenderId: "324674130858",
  appId: "1:324674130858:web:b843bd9c7da057a5e351d3"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export {firebase};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const storage = getStorage(app);