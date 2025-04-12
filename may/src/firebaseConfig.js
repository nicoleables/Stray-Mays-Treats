import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAINLFMO7Stbb-Pn6HTZajQ2aWHfeffGI",
  authDomain: "stray-mays-treats.firebaseapp.com",
  projectId: "stray-mays-treats",
  storageBucket: "stray-mays-treats.firebasestorage.app",
  messagingSenderId: "751163383985",
  appId: "1:751163383985:web:393f047c38834b35e4c290",
  measurementId: "G-JTWJ2H94PC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
