import React from "react";

import classes from "./Navigation.module.css";
import AuthStore from "../../store/auth-store";

const Navigation = () => {
  return (
    <AuthStore.Consumer>
      {(auth) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {auth.abc && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {auth.abc && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {auth.abc && (
                <li>
                  <button onClick={auth.logoutHandler}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthStore.Consumer>
  );
};

export default Navigation;
