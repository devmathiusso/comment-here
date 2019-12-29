import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCb_f26cfqiJFxf_jpRqMuEuF-sAAXhfAw",
  authDomain: "commenthere-app.firebaseapp.com",
  databaseURL: "https://commenthere-app.firebaseio.com",
  projectId: "commenthere-app",
  storageBucket: "commenthere-app.appspot.com",
  messagingSenderId: "1044593826540",
  appId: "1:1044593826540:web:a124e43621d11b792663c9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
