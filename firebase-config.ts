import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBpCPVh4w_PYJGirCrNOrH7pvvUuWzHFhs",

    authDomain: "treasure-hunt-572af.firebaseapp.com",

    projectId: "treasure-hunt-572af",

    storageBucket: "treasure-hunt-572af.appspot.com",

    messagingSenderId: "737367842384",

    appId: "1:737367842384:web:e9dda224f2117fb3377b55"

};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);