// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMoCCE7cZSK5a1jjQP2yhTErm4nGASYBY",
    authDomain: "dragon-news-project-95ea5.firebaseapp.com",
    projectId: "dragon-news-project-95ea5",
    storageBucket: "dragon-news-project-95ea5.appspot.com",
    messagingSenderId: "176984582959",
    appId: "1:176984582959:web:4ac137c3b6f4ff663c4fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;