import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyBefh-E9rpN31aPOoWwCniycahGZoj5oMM",
        authDomain: "condominio-9de6d.firebaseapp.com",
        databaseURL: "https://condominio-9de6d-default-rtdb.firebaseio.com",
        projectId: "condominio-9de6d",
        storageBucket: "condominio-9de6d.appspot.com",
        messagingSenderId: "1041838249176",
        appId: "1:1041838249176:web:22cee499105a2a2ea073ad",
        measurementId: "G-LLGX8WZKTT"    
};


firebase.initializeApp(firebaseConfig);


export var firestore = firebase.firestore();

export const auth = firebase.auth();
var db = firebase.firestore();
