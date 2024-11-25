import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnbEoT4QY_LeJnAxXQZk5pwLIEX06bJ0o",
    authDomain: "demoblog-99f45.firebaseapp.com",
    projectId: "demoblog-99f45",
    storageBucket: "demoblog-99f45.firebasestorage.app",
    messagingSenderId: "650669403596",
    appId: "1:650669403596:web:953b50700dde1215214169"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}

