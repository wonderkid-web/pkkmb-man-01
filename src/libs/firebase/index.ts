// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// WAHYU
// const firebaseConfig = {
//   apiKey: "AIzaSyCqEh6siSFSAqt9VMNQsLYqe32UQfHGzZM",
//   authDomain: "library-react-49505.firebaseapp.com",
//   projectId: "library-react-49505",
//   storageBucket: "library-react-49505.appspot.com",
//   messagingSenderId: "481130172436",
//   appId: "1:481130172436:web:68f1e73048f3291d135701"
// };


// Your web app's Firebase configuration
// RUI
const firebaseConfig = {
  apiKey: "AIzaSyBNH7tI87zt1zM9w887PMy0J7Js458A7UE",
  authDomain: "man-medan.firebaseapp.com",
  projectId: "man-medan",
  storageBucket: "man-medan.appspot.com",
  messagingSenderId: "176700249387",
  appId: "1:176700249387:web:e87bf1daad8a887b59e16e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)
