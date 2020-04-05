
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUDQ8A7jwcxDrmKn28HJNd_eMMouVKbCc",
    authDomain: "react-qa-practice-dev.firebaseapp.com",
    databaseURL: "https://react-qa-practice-dev.firebaseio.com",
    projectId: "react-qa-practice-dev",
    // storageBucket: "project-id.appspot.com",
    // messagingSenderId: "sender-id",
    // appId: "app-id",
    // measurementId: "G-measurement-id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
