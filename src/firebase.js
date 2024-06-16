// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "ahmed-2e96f.firebaseapp.com",
    projectId: "ahmed-2e96f",
    storageBucket: "ahmed-2e96f.appspot.com",
    messagingSenderId: "234160372626",
    appId: "1:234160372626:web:eeed04932a7c982db45f4b"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);