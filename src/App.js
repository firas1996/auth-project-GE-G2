import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthStore from "./store/auth-store";

function App() {
  const { abc } = useContext(AuthStore);
  return (
    <>
      <MainHeader />
      <main>
        {!abc && <Login />}
        {abc && <Home />}
      </main>
    </>
  );
}

export default App;
