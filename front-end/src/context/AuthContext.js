import React, { createContext } from "react";
import { useHistory } from "react-router-dom";
import { signup, login } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { resetSignup, setLoginForm, setSignState, setSignup } from "../redux/slices/authSlice";

export const AuthContext = createContext({});

export default function AuthContextProvider(props) {
  const globalState = useSelector(state => state.authentication);
  const { signupValues, loginForm } = globalState;
  const history = useHistory();
  const dispatch = useDispatch();

  function fillFormFields({ target }, isLogin) {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (isLogin) {
      dispatch(setLoginForm({name, value}));
    }
    dispatch(setSignup({name, value }));
  }

  async function handleSignup(e) {
    e.preventDefault();
    
    dispatch(setSignState(
      {signUp: true, signIn: false, serverResponse: 
        { message: '', status: ''},
    }));
    
    const { data } = await signup(signupValues);
    

    if(data.status === 'success') {
      dispatch(resetSignup());
      return dispatch(setSignState({signUp: false, signIn: false, serverResponse: { ...data } }));
    }

    setInterval(()=> {
      dispatch(setSignState(
        {signUp: false, signIn: false, serverResponse: 
          { message: data.message, status: data.status },
      }));

    }, 4000)
  }

 async function handleLogin(e) {
    e.preventDefault();
    const { data } = await login(loginForm);
    
    if(data.token) {
      window.localStorage.setItem("user", JSON.stringify(data));
      setSignState((prevState) => ({ ...prevState, signIn: false }));
      
      if(data.userInfo.role === 'USER') return history.push("/dashboard");


      return history.push("/dashboard/medic");
    }

    setSignState((prevState) => ({ ...prevState, signIn: true }));

    return data;
  }

  return (
    <AuthContext.Provider
      value={{
        fillFormFields,
        handleLogin,
        handleSignup,
        setSignState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
