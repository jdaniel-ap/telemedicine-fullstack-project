import React, { useContext } from 'react';
import logo from '../../assets/images/newlogo.png';
import { useHistory } from 'react-router-dom';
import { AppEventsContext } from '../../context/AppEventsContext';
import './header.scss';

function Header() {
  const { setAsideEvent } = useContext(AppEventsContext);
  const history = useHistory();

  function handleNav() {
    setAsideEvent('');
    history.push('/dashboard');

  }

  function logout() {
    localStorage.removeItem('user');
    setAsideEvent('');
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
