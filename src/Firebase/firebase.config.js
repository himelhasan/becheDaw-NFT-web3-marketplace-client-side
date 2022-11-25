// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyApHXG4FzPSw-tLtbUQue6PytFKRLyS7j8",
  // authDomain: "bechedaw-c3177.firebaseapp.com",
  // projectId: "bechedaw-c3177",
  // storageBucket: "bechedaw-c3177.appspot.com",
  // messagingSenderId: "238601482342",
  // appId: "1:238601482342:web:2bc3392e42aa46f84b7da7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
