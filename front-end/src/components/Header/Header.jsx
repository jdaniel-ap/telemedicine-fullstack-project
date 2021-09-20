import React from 'react';
import logo from '../../assets/images/newlogo.png';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAsideEvent } from '../../redux/slices/appSlice';

import './header.scss';

function Header() {
  const history = useHistory();
  const { userInfo } = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const navigator = {
    home: '/dashboard',
    info: `/user/health-data/${userInfo.id}`
  }

  function handleNav({ target }) {
    dispatch(setAsideEvent(''));
    history.push(navigator[target.id]);

  }

  function logout() {
    localStorage.removeItem('user');
    dispatch(setAsideEvent(''));
    history.push('/');
  }


  return (
  <header>
    <img src={logo} alt='Medtools'/>
      <div>
        <span onClick={(e) => handleNav(e)} id="home">INICIO</span>
        <span onClick={(e) => handleNav(e)} id="info">MI INFORMACION MEDICA</span>
        <span>ENVIAR NOTIFICACION</span>
        <span>AYUDA</span>
        <span onClick={logout}>SALIR</span>
      </div>
  </header>
  )
}

export default Header
