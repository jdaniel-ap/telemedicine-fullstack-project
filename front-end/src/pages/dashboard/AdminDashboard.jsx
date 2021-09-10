import React, { useContext, useEffect } from 'react';
import emptyImg from '../../assets/images/empty.svg';
import { AppEventsContext } from '../../context/AppEventsContext';
import Header from '../../components/Header/Header';
import './adminDashboard.scss';
import Aside from '../../components/Aside/Aside';

function AdminDashboard() {
  const { userData, setUserData } = useContext(AppEventsContext)

  useEffect(() => {
    const { userInfo }= JSON.parse(localStorage.getItem("user"));
    setUserData(userInfo);
  }, [setUserData])

  return (
    <div className='content'>
      <Header />
      <main>
      <Aside />
        <section>
        <h2>
          Hola
          {'\n'}
          {userData ? userData.fullname &&  userData.fullname.split(' ')[0] : ''}
          , tienes
          <span> 0</span> novedades
        </h2>
        <div className='welcome-content'>
          <img src={emptyImg} alt='empty place' />
        </div>
        </section>
      </main>
    </div>
  )
}

/*
2)  Axios
3)  Refactorizar los pages que tienen Header
4)  Agregar exceptions en el endpoint de editar
5)  Mover token verification al backend
*/

export default AdminDashboard
