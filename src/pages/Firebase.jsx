// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwJ2CFl1wSC4_48Mn9yDRPtKnoFTayS04",
  authDomain: "auth-08-05-2007-4cf14.firebaseapp.com",
  projectId: "auth-08-05-2007-4cf14",
  storageBucket: "auth-08-05-2007-4cf14.firebasestorage.app",
  messagingSenderId: "754211221042",
  appId: "1:754211221042:web:c3eeb32f296393c646162b",
  measurementId: "G-JMVQKLG7WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;