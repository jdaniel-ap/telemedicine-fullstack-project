import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/Untitled.png';
import Asideoption from '../../components/asideOption/asideoption';
import { AuthContext } from '../../context/AuthContext';
import './adminDashboard.scss';
import emptyImg from '../../assets/images/empty.svg'

function AdminDashboard() {
  const history = useHistory();
  const [asideEvent, setAsideEvent] = useState('');
  const [userData, setUserData] = useState({});
  const { validateToken } = useContext(AuthContext)
  const options = ['Perfil', 'Consultas', 'Historial', 'Configuracion'];

  function logout() {
    localStorage.removeItem('token');
    history.push('/');
  }

  useEffect(() => {
    setUserData(validateToken());
  }, [setUserData, validateToken])

  return (
    <div className='content'>
      <header>
        <img src={logo} alt='Medtools'/>
        <div>
          <span>VER HISTORIAL</span>
          <span>PACIENTES EN ESPERA</span>
          <span>ENVIAR NOTIFICACION</span>
          <span>AYUDA</span>
          <span onClick={logout}>SALIR</span>
        </div>
      </header>
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
        <h2>Bienvenido {userData ? userData.fullname &&  userData.fullname.split(' ')[0] : ''}, tienes 0 novedades</h2>
        <div className='welcome-content'>
          <img src={emptyImg} alt='empty place' />
        </div>
        </section>
      </main>
    </div>
  )
}

export default AdminDashboard
