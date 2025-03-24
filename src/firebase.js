import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAya4z0mB9QPixY6Zm2037NP8sArO6KYeo",
    authDomain: "macaronshop-aea3f.firebaseapp.com",
    projectId: "macaronshop-aea3f",
    // storageBucket: "macaronshop-aea3f.firebasestorage.app",
    storageBucket: "macaronshop-aea3f.appspot.com",
    messagingSenderId: "818877786084",
    appId: "1:818877786084:web:2c8ab8b7a4409a0bad09f1",
    measurementId: "G-8SN7M4KDBP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };