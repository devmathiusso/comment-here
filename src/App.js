import React from "react";
import "./App.css";

import NewComment from "./elements/NewComment";
import Comments from "./elements/Comments";
import CreateUser from "./elements/CreateUser";

import { AuthProvider } from "./auth";

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
      </div>
    </AuthProvider>
  );
}

export default App;
