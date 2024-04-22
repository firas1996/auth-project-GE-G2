import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthStore from "./store/auth-store";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // console.log("effect");
    const token = localStorage.getItem("auth");
    if (token === "isLogged") {
      setIsLoggedIn(true);
    }
  }, []);
  // console.log("after");

  const loginHandler = (email, password) => {
    localStorage.setItem("auth", "isLogged");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
  };

  return (
    <AuthStore.Provider
      value={{
        abc: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthStore.Provider>
  );
}

export default App;
