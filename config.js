import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD8O86B7xVrZ2Ft6sZLU5jSNcpLHTvkkCo",
    authDomain: "social-app-b2504.firebaseapp.com",
    projectId: "social-app-b2504",
    storageBucket: "social-app-b2504.appspot.com",
    messagingSenderId: "748855590008",
    appId: "1:748855590008:web:d64a3a4ff574ef1849c18d",
    measurementId: "G-CV8Q21C4Z7"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
