import axios from 'axios';

export const signup = async (signupValues) => {
  const { username, fullname, email, password, medicRole } = signupValues;
  const request = await axios({
    method: 'post',
    url: 'http://localhost:8080/user',
    data: {
      username,
      fullname,
      email,
      password,
      medicRole
    },
  }).then(response => { 
    return response
  })
  .catch(error => {
      return error.response
  });

  return request;
}

export const login = async (loginFormValues) => {
  const { username, password } = loginFormValues;
  const request = await axios({
    method: 'post',
    url: 'http://localhost:8080/user/login',
    data: {
      username,
      password,
    },
  }).catch(err => err.response);

  return request;
}

export const editUserData = async (userData, token) => {
  const request = await axios({
    method: 'put',
    url: 'http://localhost:8080/user/edit',
    headers: {
      Authorization: token,
    },
    data: {
      username: userData.username,
      email: userData.email,
      fullname: userData.fullname
    },
  });
  return await request;

}