import React from 'react';
import logo from '../../assets/images/newlogo.png';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAsideEvent } from '../../redux/slices/appSlice';

import './header.scss';

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleNav() {
    dispatch(setAsideEvent(''));
    history.push('/dashboard');

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
        <span onClick={() => handleNav()}>INICIO</span>
        <span>PACIENTES EN ESPERA</span>
        <span>ENVIAR NOTIFICACION</span>
        <span>AYUDA</span>
        <span onClick={logout}>SALIR</span>
      </div>
  </header>
  )
}

export default Header
