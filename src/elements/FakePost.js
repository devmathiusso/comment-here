import React from "react";
import gitHubLogo from "../github-logo.png";

const FakePost = () => (
  <>
    <div className="mt-3 mb-3 text-justify" style={{ wordBreak: "break-word" }}>
      <h1>What I've learned building this app</h1>
      <h2 className="text-secondary h4 mb-3">Leave your comment down below</h2>

      <p>Hello there! How's it going?</p>

      <p>
        You're inside my CommentHere application, built with{" "}
        <b>ReactJS, Firebase, and ContextAPI.</b>
      </p>

      <p>
        This is a very simple application, by the way, I've learned a little bit
        about the following things:
      </p>

      <ul>
        <li>
          Set up Firebase in realtime and connect/manipulate data into the
          database without axios
        </li>
        <li>
          Cleaning Firebase connection inside useEffect callback to prevent
          performance issues into the application
        </li>
        <li>
          Creating and retrieving data from Firebase using{" "}
          <b>firebase.database().ref()</b>{" "}
        </li>
        <li>
          Creating user using{" "}
          <b>firebase.auth().createUserWithEmailAndPassword()</b>
        </li>
        <li>
          Log in user using <b>firebase.auth().signInWithEmailAndPassword()</b>
        </li>
        <li>
          Creating a context to authentication using <b>ContextAPI</b>
        </li>
        <li>
          Change user Display Name using the <b>.updateProfile()</b> Firebase
          function
        </li>
        <li>
          Logout user from application using the <b>.signOut()</b> Firebase
          function
        </li>
      </ul>

      <p>
        I'm very happy! I'm enjoying React and all its ecosystem, I'm very
        excited to keep studying it and to build larger applications with React!
      </p>

      <p>
        If you've reached this far, leave a comment down below, so I can see the
        database growing.
      </p>

      <p>Thanks a lot!</p>

      <p>
        <a
          href="https://github.com/devmathiusso/comment-here"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={gitHubLogo}
            className="mr-2"
            width="32"
            height="32"
            alt="GitHub"
          />
          Follow me at GitHub!
        </a>
      </p>
    </div>

    <hr />
  </>
);

export default FakePost;
