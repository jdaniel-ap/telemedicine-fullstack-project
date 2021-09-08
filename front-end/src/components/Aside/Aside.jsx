import React from 'react';
import Asideoption from '../AsideOption/Asideoption';
import './aside.scss';

function Aside({userId}) {
  const options = ['Perfil', 'Consultas', 'Historial', 'Configuracion'];
  return (
    <aside>
    <span>Personal</span>
    <div className='user-config'>
      { options.map(option => 
        <Asideoption 
          name={option}
          key={option}
          linkId={userId}
        />)}
    </div>
  </aside>
  )
}

export default Aside
