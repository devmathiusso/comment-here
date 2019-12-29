import React from "react";
import "./App.css";

import firebase from "./firebase";

import NewComment from "./elements/NewComment";
import Comments from "./elements/Comments";

/*firebase
  .auth()
  .createUserWithEmailAndPassword("dev.mathiusso@gmail.com", "abc123")
  .then(user => {
    firebase
      .auth()
      .updateCurrentUser(user, { displayName: "Victor Mathiusso" });
  });*/

/*firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user.displayName);
    user.updateProfile({ displayName: "Victor Mathiusso" });
  }
});*/

function App() {
  return (
    <div>
      <NewComment />
      <Comments />
    </div>
  );
}

export default App;
