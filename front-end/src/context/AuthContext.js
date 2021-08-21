import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext({});

export  default function AuthContextProvider(props) {
  const [loginFormValues, setLoginFormValues] = useState({ username: '', password: ''});
  const [signupValues, setSignupValues] = useState({ username: '', email: '', password: '', medicRole: false});
  const [token, setToken] = useState();
  const [signupState, setSignupState] = useState(false);
  const history = useHistory();


  function fillFormFields({ target }, isLogin) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    if(isLogin) {
      setLoginFormValues(prevState => ({...prevState, [name]: value}));
    }

    setSignupValues(prevState => ({ ...prevState, [name]: value}));
    console.log(signupValues);

  }

  function handleSignup(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        username: signupValues.username,
        email: signupValues.email,
        password: signupValues.password,
        medicRole: signupValues.medicRole
      })
  };
      fetch('http://localhost:3000/user', requestOptions)
      .then(response => response.json())
      .then(data => {
          if(data.message.length > 24) {
            setSignupValues({ username: '', email: '', password: '', medicRole: false});
            setSignupState(true);
            console.log(signupState)
          }
      });
  }

  function handleLogin(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: loginFormValues.username, password: loginFormValues.password })
  };
    fetch('http://localhost:3000/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.token) {
          setToken(data);
          history.push('/home')
        }
      });

  }

  return(
    <AuthContext.Provider value={{ 
      loginFormValues, 
      fillFormFields,
      handleLogin,
      token,
      handleSignup,
      signupValues,
      signupState,
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
