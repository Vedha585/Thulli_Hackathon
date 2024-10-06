import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiVnUiS5tvs_wYch0RZhxubmeyrkNoEmw",
  authDomain: "fashion-19737.firebaseapp.com",
  projectId: "fashion-19737",
  storageBucket: "fashion-19737.appspot.com",
  messagingSenderId: "919518412154",
  appId: "1:919518412154:web:9b92c7028841c2092e2ac3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
