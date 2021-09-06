import React from 'react';
import logo from '../../assets/images/Untitled.png';
import { useHistory } from 'react-router-dom';

function Header({asideEvent}) {
  const history = useHistory();

  function handleNav() {
    asideEvent('');
    history.push('/dashboard');

  }


  function logout() {
    localStorage.removeItem('token');
    asideEvent('');
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
