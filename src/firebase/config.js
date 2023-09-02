
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"



export const firebaseConfig = {
  apiKey: "AIzaSyCY-jIPmW6v2_kY_4bTFavc5gH6JS31xOQ",
  authDomain: "e-shop-58fdc.firebaseapp.com",
  projectId: "e-shop-58fdc",
  storageBucket: "e-shop-58fdc.appspot.com",
  messagingSenderId: "277826657727",
  appId: "1:277826657727:web:259fc7d0c41f40946ed50a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app