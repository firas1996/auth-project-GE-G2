import { createContext, useEffect, useState } from "react";

const AuthStore = createContext({
  email: "",
  password: "",
  abc: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});
export default AuthStore;
export const MyProvider = ({ children }) => {
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
      {children}
    </AuthStore.Provider>
  );
};
