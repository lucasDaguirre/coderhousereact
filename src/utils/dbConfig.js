// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOviTF6ACyewKkCy6gFZJlLhO9JWjth4I",
    authDomain: "ecommerce-react-a6211.firebaseapp.com",
    projectId: "ecommerce-react-a6211",
    storageBucket: "ecommerce-react-a6211.appspot.com",
    messagingSenderId: "154168007986",
    appId: "1:154168007986:web:f0d017dc23171e11250b2b",
    measurementId: "G-ZC8B5S2Y1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;