// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVUaXxFJohdF1J8XFG_nSmkzQZ8LHW3qc",
  authDomain: "simple-firebase-d809a.firebaseapp.com",
  projectId: "simple-firebase-d809a",
  storageBucket: "simple-firebase-d809a.appspot.com",
  messagingSenderId: "222604880291",
  appId: "1:222604880291:web:80ecadb6a1322147515216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app