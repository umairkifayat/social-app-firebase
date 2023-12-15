import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBk1Fl8tBUGk0-pm6k3grokVbMKV1qDiXI",
  authDomain: "todo-app-7a9b2.firebaseapp.com",
  projectId: "todo-app-7a9b2",
  storageBucket: "todo-app-7a9b2.appspot.com",
  messagingSenderId: "536488802779",
  appId: "1:536488802779:web:afddeef120d19214e50ffe",
  measurementId: "G-02P1Y6EE7T"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);

