import { createContext } from "react";

const AuthStore = createContext({
  email: "",
  password: "",
  abc: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});
export default AuthStore;
