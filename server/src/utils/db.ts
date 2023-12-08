import { FirebaseApp, initializeApp } from "firebase/app";

import { Firestore, getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyB5pSk-8e0VIOlfKqYndKynd0jqjjje-G4",
    authDomain: "trainee-1-23t3.firebaseapp.com",
    projectId: "trainee-1-23t3",
    storageBucket: "trainee-1-23t3.appspot.com",
    messagingSenderId: "137768479145",
    appId: "1:137768479145:web:71d96dc047351aad5cfcb8",
    measurementId: "G-1QVTBR0042"
};

const app : FirebaseApp = initializeApp(config);
const firestore : Firestore = getFirestore(app);

export function getDb() : Firestore {
    return firestore;
}