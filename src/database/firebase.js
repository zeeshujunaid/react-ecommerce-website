import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBeUIcfv1MlYwEVwCKnM1Ozz-B1ycnL5g",
    authDomain: "ecommerce-e9730.firebaseapp.com",
    projectId: "ecommerce-e9730",
    storageBucket: "ecommerce-e9730.appspot.com",
    messagingSenderId: "32441184657",
    appId: "1:32441184657:web:0a868977509c8764012a30"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
 export const db = getFirestore(app);