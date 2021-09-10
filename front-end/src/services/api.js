import axios from 'axios';

export const signUp = async (signupValues) => {
  const { username, fullname, email, password, medicRole } = signupValues;
  const request = await axios({
    method: 'post',
    url: 'http://localhost:3001/user',
    data: {
      username,
      fullname,
      email,
      password,
      medicRole
    },
  });

  return request;
}

export const login = async (loginFormValues) => {
  const { username, password } = loginFormValues;
  const request = await axios({
    method: 'post',
    url: 'http://localhost:3001/user/login',
    data: {
      username,
      password,
    },
  });

  return request;
}

export const editUserData = async (userData, token) => {
  const request = await axios({
    method: 'put',
    url: 'http://localhost:3001/user/edit',
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