import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzXfnI5zzsNhBxHBoPJIcrpm6nZsangi0",
  authDomain: "clone-563c9.firebaseapp.com",
  projectId: "clone-563c9",
  storageBucket: "clone-563c9.appspot.com",
  messagingSenderId: "974588221767",
  appId: "1:974588221767:web:276afa8025903e31bb5462",
  measurementId: "G-54TFP3JR24"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


