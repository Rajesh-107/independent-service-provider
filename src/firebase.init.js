// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk1Oy7Coete0gHfpVDr4zB5du4OGtBF3o",
  authDomain: "independent-service-prov-4dbca.firebaseapp.com",
  projectId: "independent-service-prov-4dbca",
  storageBucket: "independent-service-prov-4dbca.appspot.com",
  messagingSenderId: "1098239300624",
  appId: "1:1098239300624:web:987ad3f0369e905f232695",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;