import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { signup, login } from "../services/api";
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
    const { data } = await signup(signupValues);
    
    if(data.status === 'success') {
      setSignupValues(signupStateCont);

      return setSignState((prevState) => ({
        ...prevState,
        signUp: true,
        serverResponse: { data },
      }));
    }
    setSignState((prevState) => ({
      ...prevState,
      signUp: true,
      serverResponse: { message: data.message, status: data.status },
    }));
  }

 async function handleLogin(e) {
    e.preventDefault();
    const { data } = await login(loginFormValues);
    
    if(data.token) {
      window.localStorage.setItem("user", JSON.stringify(data));
      setSignState((prevState) => ({ ...prevState, signIn: false }));
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
