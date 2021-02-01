import firebase from "firebase/app";
import firebaseConfig from "../configs/firebase";
import "firebase/database";

const burgerFirebase = firebase.initializeApp(firebaseConfig);
const realtimeDatabase = burgerFirebase.database();

export { realtimeDatabase };
