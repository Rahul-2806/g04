import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEK9UOQVw1FVFw3R2iNGruzcSc889lU0I",
  authDomain: "go4-expeditions.firebaseapp.com",
  projectId: "go4-expeditions",
  storageBucket: "go4-expeditions.firebasestorage.app",
  messagingSenderId: "366511105593",
  appId: "1:366511105593:web:71cb0ab8dcbfaf4db10fe8",
  measurementId: "G-BHZTSYVY3V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);