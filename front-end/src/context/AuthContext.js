import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({});

export default function AuthContextProvider(props) {
  const [loginFormValues, setLoginFormValues] = useState({});
  const [signupValues, setSignupValues] = useState({});
  const [signState, setSignState] = useState({
    signIn: false,
    signUp: false,
    serverResponse: {},
  });
  const history = useHistory();

  function validateToken() {
    const localStorageToken = JSON.parse(localStorage.getItem("token"));
    if (!localStorageToken) return history.push("/");
    const decodeJwt = jwt_decode(localStorageToken);
    const currentDate = new Date();
    if (decodeJwt.exp * 1000 < currentDate.getTime()) {
      return history.push("/");
    } else {
      return decodeJwt;
    }
  }

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

  function handleSignup(e) {
    const succesfull = "User successfully registered";
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signupValues.username,
        fullname: signupValues.fullname,
        email: signupValues.email,
        password: signupValues.password,
        medicRole: signupValues.medicRole,
      }),
    };
    fetch("http://localhost:3000/user", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === succesfull) {
          setSignupValues({
            username: "",
            fullname: "",
            email: "",
            password: "",
            medicRole: false,
          });
          return setSignState((prevState) => ({
            ...prevState,
            signUp: true,
            serverResponse: { message: data.message, success: true },
          }));
        }
        setSignState((prevState) => ({
          ...prevState,
          signUp: true,
          serverResponse: { message: data.message, error: true },
        }));
      });
  }

  function handleLogin(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginFormValues.username,
        password: loginFormValues.password,
      }),
    };
    fetch("http://localhost:3000/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          window.localStorage.setItem("token", JSON.stringify(data.token));
          return history.push("/dashboard");
        }
        setSignState((prevState) => ({ ...prevState, signIn: true }));
      });
  }

  return (
    <AuthContext.Provider
      value={{
        fillFormFields,
        handleLogin,
        handleSignup,
        setSignupValues,
        setSignState,
        validateToken,
        signupValues,
        loginFormValues,
        signState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
