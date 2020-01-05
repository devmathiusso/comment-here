import React, { useContext } from "react";
import { Redirect, Link } from "react-router-dom";

import { AuthContext } from "../auth";
import logo from "../logo.svg";

const UserInfo = () => {
  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return <Redirect to="/" />;
  }

  const { email } = auth.user;

  return (
    <ul
      className="navbar-nav ml-auto d-flex justify-content-center align-items-center"
      style={{ flexDirection: "row" }}
    >
      <li className="nav-item">{email}</li>
      <li className="nav-item ml-2">
        <button
          type="button"
          className="nav-link btn btn-link btn-sm"
          onClick={auth.logout}
        >
          Logout
        </button>
      </li>
    </ul>
  );
};

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light border-bottom shadow-sm">
      <div className="container">
        <Link to="/comments" className="navbar-brand">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-1"
            alt="CommentHere"
          />
          CommentHere
        </Link>

        <UserInfo />
      </div>
    </nav>
  );
};

export default Header;
