import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBm-9sfDHMKtr3waC-rvu7A2MWl8Mf8E84",
  authDomain: "mudra-2264b.firebaseapp.com",
  projectId: "mudra-2264b",
  storageBucket: "mudra-2264b.firebasestorage.app",
  messagingSenderId: "198743988888",
  appId: "1:198743988888:web:348d3f22bf773e81dcceed",
  measurementId: "G-FSPBLMCVJL"
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.db = db;
window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;

export {
  db,
  doc,
  setDoc,
  getDoc
};