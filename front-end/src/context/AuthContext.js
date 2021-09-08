import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { signUp, login } from "../services/api";
import { signStateCont, signupStateCont } from "./contextLocalState";

export const AuthContext = createContext({});

export default function AuthContextProvider(props) {
  const [loginFormValues, setLoginFormValues] = useState({});
  const [signupValues, setSignupValues] = useState(signupStateCont);
  const [signState, setSignState] = useState(signStateCont);
  const history = useHistory();

  function fillFormFields({ target }, isLogin) {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (isLogin) {
      return setLoginFormValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    setSignupValues((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSignup(e) {
    e.preventDefault();
    const succesfull = "User successfully registered";
    const request = await signUp(signupValues);
    
    if(request.message === succesfull) {
      setSignupValues(signupStateCont);

      return setSignState((prevState) => ({
        ...prevState,
        signUp: true,
        serverResponse: { message: request.message, success: true },
      }));
    }
    setSignState((prevState) => ({
      ...prevState,
      signUp: true,
      serverResponse: { message: request.message, error: true },
    }));
  }

 async function handleLogin(e) {
    e.preventDefault();
    const logRequest = await login(loginFormValues);
    
    if(logRequest.token) {
      window.localStorage.setItem("user", JSON.stringify(logRequest));
      return history.push("/dashboard");
    }
    setSignState((prevState) => ({ ...prevState, signIn: true }));
  }

  return (
    <AuthContext.Provider
      value={{
        fillFormFields,
        handleLogin,
        handleSignup,
        setSignupValues,
        setSignState,
        signupValues,
        loginFormValues,
        signState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
