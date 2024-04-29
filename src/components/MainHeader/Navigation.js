import React from "react";

import classes from "./Navigation.module.css";
import AuthStore from "../../store/auth-store";

const Navigation = () => {
  return (
    <AuthStore.Consumer>
      {({ abc, logoutHandler }) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {abc && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {abc && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {abc && (
                <li>
                  <button onClick={logoutHandler}>Logout</button>
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
