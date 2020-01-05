import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

const getLinkTo = pageName => (pageName === "Sign in" ? "/register" : "/");

const getLinkText = pageName =>
  pageName === "Sign in"
    ? "Sign up for an account"
    : "Already have an account? Sign in";

const AuthPage = ({ children, pageName, buttonOnClick, errorMsg }) => (
  <div className="form-sign">
    <div className="mb-4">
      <img src={logo} alt="CommentHere Logo" width="72" height="72" />
    </div>

    <h1 className="h3 mb-3 font-weight-normal">{pageName}</h1>

    {children}

    {errorMsg && <p className="mt-2 text-danger">{errorMsg}</p>}

    <button className="btn btn-primary btn-block mt-3" onClick={buttonOnClick}>
      {pageName}
    </button>

    <div className="mt-2 mb-2 text-secondary">OR</div>

    <Link to={getLinkTo(pageName)}>{getLinkText(pageName)}</Link>
  </div>
);

export default AuthPage;
