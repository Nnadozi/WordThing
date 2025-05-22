// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBcu52koOW0aDmPj8aHZAlx3oC9OVon7U",
  authDomain: "termy-c3920.firebaseapp.com",
  projectId: "termy-c3920",
  storageBucket: "termy-c3920.firebasestorage.app",
  messagingSenderId: "633127745699",
  appId: "1:633127745699:web:99aba4be893225753b2716",
  measurementId: "G-B9WMBWFRDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };

