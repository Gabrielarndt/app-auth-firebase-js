
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD71yYReg2Xj96aZDixMhLhMyZHwRg-Bpc",
  authDomain: "agenda-ec52d.firebaseapp.com",
  projectId: "agenda-ec52d",
  storageBucket: "agenda-ec52d.appspot.com",
  messagingSenderId: "212972610163",
  appId: "1:212972610163:web:f91d3b52bc1969ebac0006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app