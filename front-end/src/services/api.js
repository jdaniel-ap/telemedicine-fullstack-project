import axios from 'axios';

export const signup = async (signupValues) => {
  const { username, fullname, email, password, medicRole } = signupValues;
  const request = await axios({
    method: 'post',
    url: 'http://localhost:8080/api/user/sign-up',
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
    console.log(error.response)
      return error.response
  });

  return request;
}

export const login = async (loginFormValues) => {
  const { username, password } = loginFormValues;
  const request = await axios({
    method: 'post',
    url: 'http://localhost:8080/api/user/login',
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
    url: 'http://localhost:8080/api/user/edit',
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

export const setUserDataRequest = async (data, token) => {
  const { userData, healthData } = data;
  console.log(userData)

  const request = await axios({
    method: 'post',
    url: 'http://localhost:8080/api/user/user-data',
    headers: {
      Authorization: token,
    },
    data: {
      userData,
      healthData
    },
  }).catch(err => err.response);

  return request;
}

export const getUserDataRequest = async (token) => {

  const request = await axios({
    method: 'get',
    url: 'http://localhost:8080/api/user/user-data/health',
    headers: {
      Authorization: token,
    },
  }).catch(err => err.response);

  return request;
}

export const generateConsult = async (data, token) => {
  const request = await axios({
    method: 'post',
    url: 'http://localhost:8080/api/user/new/consult',
    headers: {
      Authorization: token,
    },
    data: {
      ...data
    }
  });

  return request.data;
  
}

export const getUserConsults = async (token) => {

  const request = await axios({
    method: 'get',
    url: 'http://localhost:8080/api/user/consult/pacient',
    headers: {
      Authorization: token,
    },
  });

  console.log(request.data)

  return request;
}
