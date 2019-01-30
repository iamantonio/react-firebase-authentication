import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        <Link to={ROUTES.LANDING}>Landing</Link>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </ul>
    </div>
  );
}

export default Navigation;
