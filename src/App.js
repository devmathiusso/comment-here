import React from "react";
import "./App.css";

import NewComment from "./elements/NewComment";
import Comments from "./elements/Comments";
import CreateUser from "./elements/CreateUser";
import LoginUser from "./elements/LoginUser";
import UserInfo from "./elements/UserInfo";

import { AuthProvider } from "./auth";

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <LoginUser />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App;
