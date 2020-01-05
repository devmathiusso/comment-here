import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import CreateUser from "./pages/CreateUser";
import LoginUser from "./pages/LoginUser";
import CommentsPage from "./pages/CommentsPage";

import { AuthProvider } from "./auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route path="/" exact component={LoginUser} />
        <Route path="/register" exact component={CreateUser} />
        <Route path="/comments" exact component={CommentsPage} />
      </Router>
    </AuthProvider>
  );
}

export default App;
