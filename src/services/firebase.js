import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDw-TIJ-JBjH1nO-YCHAMa3IAESXGmqa1E",
    authDomain: "zomagle-514ce.firebaseapp.com",
    projectId: "zomagle-514ce",
    storageBucket: "zomagle-514ce.appspot.com",
    messagingSenderId: "443455646399",
    appId: "1:443455646399:web:f66819f6fdde88f19a740a",
    measurementId: "G-XEPFKPCFXN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
