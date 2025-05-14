import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkFPgd8Slc8mD3-MDim70oemYkvkcKbkk",
  authDomain: "teste-9f472.firebaseapp.com",
  projectId: "teste-9f472",
  storageBucket: "teste-9f472.firebasestorage.app",
  messagingSenderId: "1078107168021",
  appId: "1:1078107168021:web:acf3d60853acdf8aaa5d1c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db =getFirestore(app)

export {auth, db}