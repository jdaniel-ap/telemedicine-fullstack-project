import React, { useState, useContext, useEffect } from 'react';
import Asideoption from '../../components/AsideOption/Asideoption';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../components/Header/Header'
import './profile.scss';
import Button from '../../components/Button/Button'

function Profile() {
  const [userData, setUserData] = useState({ username: '', email: '', fullname: ''});
  const [userValues, setUserValues] = useState({});
  const [editInput, setEditInput] = useState(false);
  const { validateToken, asideEvent, setAsideEvent } = useContext(AuthContext)
  const options = ['Perfil', 'Consultas', 'Historial', 'Configuracion'];

  function saveChanges(e) {
    const localStorageToken = JSON.parse(localStorage.getItem("token"));
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json", 'Authorization': localStorageToken },
      body: JSON.stringify({
        username: userData.username,
        email: userData.email,
        fullname: userData.fullname
      }),
    };
    fetch("http://localhost:3001/user/edit", requestOptions)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          setEditInput(false);
          setUserData(data);
      });
  }

  function enableInput(target) {
    setUserValues(userData);
    setEditInput(true);
  }

  function cancelEditData() {
    setUserData(userValues);
    setEditInput(false)
  }


  function handleUserData({target}) {
    const { name, value } = target;

    setUserData(prevState => ({ ...prevState, [name]: value}))
  }

  useEffect(() => {
    setUserData(validateToken());
  }, [setUserData, validateToken]);

  return (
    <div className='content'>
      <Header asideEvent={setAsideEvent} />
      <main>
        <aside>
          <span>Personal</span>
          <div className='user-config'>
            { options.map(option => 
              <Asideoption 
                name={option}
                key={option}
                state={asideEvent}
                setState={setAsideEvent} 
              />)}
          </div>
        </aside>
        <section>
        <h2>Perfil</h2>
        <div className='welcome-content'>
          <div>
            <span>Username</span>
            <input
              type="text"
              name="username"
              className={`${editInput ? 'profile-input' : 'profile-input-disable'}`}
              value={userData.username}
              readOnly={!editInput ? true : false}
              onChange={(e) => handleUserData(e)}
            />
          </div>
          <div>
            <span>Nombre</span>
            <input
              type="text"
              name="fullname"
              className={`${editInput ? 'profile-input' : 'profile-input-disable'}`}
              value={userData.fullname}
              readOnly={!editInput ? true : false}
              onChange={(e) => handleUserData(e)}
            />
          </div>
          <div>
            <span>Email</span>
            <input
              type="text"
              name="email"
              className={`${editInput ? 'profile-input' : 'profile-input-disable'}`}
              value={userData.email}
              readOnly={!editInput ? true : false}
              onChange={(e) => handleUserData(e)}
            />
          </div>
        </div>
        <div className="button-container">
        <Button onClick={editInput ? saveChanges : enableInput}>
          {editInput ? 'Guardar' : 'Editar informacion'}
        </Button>
        <Button onClick={cancelEditData}>
          Cancelar
        </Button>
        </div>
        </section>
      </main>
    </div>
  )
}

export default Profile
