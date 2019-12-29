import React from "react";
import "./App.css";

import firebase from "./firebase";

const ref = firebase.database().ref("test");
ref.on("value", snapshot => {
  console.log(snapshot.val());
});

function App() {
  return <div></div>;
}

export default App;
