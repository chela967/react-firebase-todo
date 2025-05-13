// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Paste your config from Firebase Console below:
const firebaseConfig = {
  apiKey: "AIzaSyBowC1akDrFsuOoXVZF7wN_oJf944TYz3c",
  authDomain: "todo-app-fe280.firebaseapp.com",
  projectId: "todo-app-fe280",
  storageBucket: "todo-app-fe280.firebasestorage.app",
  messagingSenderId: "378163989578",
  appId: "1:378163989578:web:0884e2ad5a848622aa6ab3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
