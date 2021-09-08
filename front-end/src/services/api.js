export const signUp = async (signupValues) => {
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
    const request = await fetch("http://localhost:3001/user", requestOptions)
    const objRequest = await request.json();

    return objRequest
}

export const login = async (loginFormValues) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: loginFormValues.username,
      password: loginFormValues.password,
    }),
  };
  const request = await fetch("http://localhost:3001/user/login", requestOptions);
  
  return await request.json();
}

export const editUserData = async (userData, token) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", 'Authorization': token },
    body: JSON.stringify({
      username: userData.username,
      email: userData.email,
      fullname: userData.fullname
    }),
  };

  const request = await  fetch("http://localhost:3001/user/edit", requestOptions);
  return await request.json();

}