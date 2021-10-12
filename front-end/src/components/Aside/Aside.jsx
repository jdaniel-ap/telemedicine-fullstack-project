import React from 'react';
import { useSelector } from 'react-redux';
import Asideoption from '../AsideOption/Asideoption';

import './aside.scss';

function Aside() {
  const userData = useSelector(state => state.appEvents.userData);
  const options = ['Perfil', 'Historia', 'Consulta'];
  return (
    <aside>
    <span>Menu</span>
    <div className='user-config'>
      { options.map(option => 
        <Asideoption 
          name={option}
          key={option}
          linkId={userData.id}
        />)}
    </div>
  </aside>
  )
}

export default Aside
