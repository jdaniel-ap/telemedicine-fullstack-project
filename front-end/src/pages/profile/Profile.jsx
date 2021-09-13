import React, { useState, useEffect,useContext } from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Aside from '../../components/Aside/Aside';
import profileImg from '../../assets/images/profileData.svg';
import Tooltip from '@material-ui/core/Tooltip';
import { editUserData } from '../../services/api';
import { useHistory } from 'react-router-dom';
import { AppEventsContext } from '../../context/AppEventsContext';
import './profile.scss';

function Profile() {
  const { userData, setUserData} = useContext(AppEventsContext);
  const [userValues, setUserValues] = useState({});
  const [editInput, setEditInput] = useState(false);
  const history = useHistory();


  async function saveChanges() {
    const localStorageValues = JSON.parse(localStorage.getItem("user"));
    const { data } = await editUserData(userData, localStorageValues.token);
    if(data.token) {
      localStorage.setItem("user", JSON.stringify({ token: data.token, userInfo: userData }));
      setEditInput(false);
      setUserData(userData);
    } else if (data.message === "jwt malformed") {
      localStorage.removeItem('user');
      history.push('/');
    }
  }

  function enableInput(target) {
    setUserValues(userData);
    setEditInput(true);
    console.log(userValues)
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
    const userData = JSON.parse(localStorage.getItem("user"));
    setUserData(userData.userInfo);
  }, []);

  return (
    <div className='content'>
      <Header />
      <main>
        <Aside />
        <section>
        <h2>Perfil</h2>
        <div className='welcome-content'>
        <div>
            <span>ID</span>
            <Tooltip title="El ID no puede ser editado"> 
              <input
                type="text"
                name="id"
                className='profile-input-disable'
                value={userData.id}
                readOnly
              />
            </Tooltip>
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
          <Button
            onClick={cancelEditData}
            className={editInput ? 'secondary-btn' : 'hide-element'}
            >
            Cancelar
          </Button>
        </div>
        </section>
        <img src={profileImg} alt="profile" />
      </main>
    </div>
  )
}

export default Profile
