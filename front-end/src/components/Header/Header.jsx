import React from 'react';
import logo from '../../assets/images/newlogo.png';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAsideEvent } from '../../redux/slices/appSlice';
import { IconButton, Tooltip } from '@material-ui/core/';
import { Settings, Notifications, ExitToApp, HomeRounded } from '@material-ui/icons/';

import './header.scss';
import useLogout from '../../hooks/useLogout';

function Header() {
  const [logout] = useLogout();
  const history = useHistory();
  const { userInfo } = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const navigator = {
    home: '/dashboard',
    info: `/user/health-data/${userInfo.id}`
  }

  function handleNav(path) {
    dispatch(setAsideEvent(''));
    history.push(navigator[path]);
  }


  return (
  <header>
    <img src={logo} alt='Medtools'/>
      <div>
        {/* <span onClick={(e) => handleNav(e)} id="info">MI INFORMACION MEDICA</span> */}
        <IconButton onClick={() => handleNav('home')}>
          <HomeRounded style={{ fontSize: '25px', margin: '0px'}} />
        </IconButton>
        <IconButton>
          <Settings style={{ fontSize: '25px', margin: '0px'}} />
        </IconButton>
        <IconButton>
          <Notifications style={{ fontSize: '25px'}} />
        </IconButton>
        <Tooltip title='Salir'>
          <IconButton onClick={logout} >
            <ExitToApp style={{ fontSize: '25px'}}  />
          </IconButton>
        </Tooltip>
      </div>
  </header>
  )
}

export default Header
