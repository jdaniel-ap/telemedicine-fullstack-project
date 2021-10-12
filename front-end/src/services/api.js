import axios from 'axios';

export const signup = async (signupValues) => {
  const { username, fullname, email, password, medicRole } = signupValues;
  const request = await axios({
    method: 'post',
    url: 'https://medtools.herokuapp.com/api/user/sign-up',
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
    url: 'https://medtools.herokuapp.com/api/user/login',
    data: {
      username,
      password,
    },
  }).catch(err => err.response);

  console.log(request);

  return request;
}

export const editUserData = async (userData, token) => {
  const request = await axios({
    method: 'put',
    url: 'https://medtools.herokuapp.com/api/user/edit',
    headers: {
      Authorization: token,
    },
    data: {
      username: userData.username,
      email: userData.email,
      fullname: userData.fullname,
      id: userData.id,
    },
  });
  return await request;

}

export const setUserDataRequest = async (data, token) => {
  const { userData, healthData } = data;

  const request = await axios({
    method: 'post',
    url: 'https://medtools.herokuapp.com/api/user/user-data',
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

export const updateUserData = async (data, token) => {
  const { userData, healthData } = data;
  const { id, userDataId, ...userHealthData } = healthData;
  const request = await axios({
    method: 'post',
    url: 'https://medtools.herokuapp.com/api/user/user-data/update',
    headers: {
      Authorization: token,
    },
    data: {
      userData,
      userHealthData
    },
  }).catch(err => err.response);

  console.log(request)

  return request;
}


export const getUserDataRequest = async (token) => {

  const request = await axios({
    method: 'get',
    url: 'https://medtools.herokuapp.com/api/user/user-data/health',
    headers: {
      Authorization: token,
    },
  }).catch(err => err.response);

  return request;
}

export const generateConsult = async (data, token) => {
  const request = await axios({
    method: 'post',
    url: 'https://medtools.herokuapp.com/api/user/new/consult',
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
    url: 'https://medtools.herokuapp.com/api/user/consult/pacient',
    headers: {
      Authorization: token,
    },
  });

  console.log(request)

  return request;
}

export const getMedicConsults = async (token) => {
  const request = await axios({
    method: 'get',
    url: 'https://medtools.herokuapp.com/api/user/consult/medic',
    headers: {
      Authorization: token,
    },
  });

  console.log(request)

  return request;
}

export const getPacientData = async (pacientId, token) => {

  const request = await axios({
    method: 'get',
    url: `https://medtools.herokuapp.com/api/user/consult/medic/pacientData/${pacientId}`,
    headers: {
      Authorization: token,
    },
  }).catch(err => err.response);

  return request;
}

export const getChatHistory = async (roomId, token) => {

  const request = await axios({
    method: 'get',
    url: `https://medtools.herokuapp.com/api/user/consult/chat/history/${roomId}`,
    headers: {
      Authorization: token,
    },
  }).catch(err => err.response);

  return request.data.messages;
}



